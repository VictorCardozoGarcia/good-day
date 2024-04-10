// Indica que este componente deve ser renderizado no lado do cliente.
"use client";

import styles from "./page.module.css"

import React, { useState, useCallback, useMemo } from "react";

function useForum() {
  const [forumPosts, setForumPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [feedback, setFeedback] = useState("");

  const adicionarPost = useCallback(
    (event) => {
      event.preventDefault(); // Impede o recarregamento da página
      if (newPost.trim() !== "") {
        setForumPosts((currentPosts) => [...currentPosts, newPost]);
        setNewPost("");
        setFeedback("Post adicionado com sucesso!");
      } else {
        setFeedback("Por favor, escreva algo antes de postar.");
      }
    },
    [newPost],
  );

  return { forumPosts, newPost, setNewPost, adicionarPost, feedback };
}

export default function BemEstarEstudantil() {
  const [atividade, setAtividade] = useState("");
  const [humor, setHumor] = useState("");
  const dicas = useMemo(
    () => ["Respire fundo", "Beba água", "Faça uma caminhada"],
    [],
  );

  const { forumPosts, newPost, setNewPost, adicionarPost, feedback } =
    useForum();

  return (
    <div className={styles.bemEstarEstudantil}>
      <h2>
        Monitoramento de Atividade e Humor da Universidade Presbiteriana
        Mackenzie
      </h2>
      <div>
        <label htmlFor="atividade">Qual atividade você fez hoje?</label>
        <input
          id="atividade"
          aria-label="Descreva a atividade física realizada"
          placeholder="Ex: caminhada de 30 minutos"
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="humor">Como você está se sentindo?</label>
        <input
          id="humor"
          aria-label="Descreva seu humor atual"
          placeholder="Ex: feliz, triste, ansioso"
          value={humor}
          onChange={(e) => setHumor(e.target.value)}
        />
      </div>
      <h3>Dicas de saúde mental e alimentação</h3>
      <ul>
        {dicas.map((dica, index) => (
          <li key={index}>{dica}</li>
        ))}
      </ul>
      <form
        onSubmit={adicionarPost}
        aria-label="Formulário de experiências e desafios"
      >
        <h3>Fórum de experiências e desafios</h3>
        <textarea
          aria-label="Compartilhe sua experiência ou desafio"
          placeholder="Compartilhe sua experiência ou desafio"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button type="submit">Adicionar Post</button>
      </form>
      <div aria-live="polite">{feedback}</div>
      <div>
        {forumPosts.map((post, index) => (
          <p key={index}>{post}</p>
        ))}
      </div>
    </div>
  );
}
