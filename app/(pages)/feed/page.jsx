"use client"
import React, { useState } from 'react';

// Componente para cada Post
const Post = ({ nome, conteudo, emoji }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  return (
    <div style={styles.postContainer}>
      <div style={styles.imagePlaceholder}>👤</div>
      <div style={styles.contentContainer}>
        <p style={styles.nome}>{nome}</p>
        <p style={styles.conteudo}>{conteudo}</p>
        <p>{emoji}</p>
        <button onClick={handleLike} style={styles.likeButton}>
          {liked ? '❤️' : '🤍'} {likes}
        </button>
        <div>
          {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
          <form onSubmit={handleComment}>
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Adicione um comentário..."
            />
            <button type="submit">Comentar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Estilos
const styles = {
  postContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginBottom: '10px',
    borderRadius: '8px',
    padding: '10px',
  },
  imagePlaceholder: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  contentContainer: {
    flex: 1,
  },
  nome: {
    fontWeight: 'bold',
  },
  conteudo: {
    margin: '5px 0',
  },
  likeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
  },
};

// Dados dos posts (pode vir de uma API ou estado global)
const posts = [
  { nome: 'Josué', conteudo: 'Eu corri em frente ao parque central durante 30 minutos e melhorei meu tempo', emoji: '🏃‍♂️' },
  { nome: 'Ingrid', conteudo: 'Partiu Zumba, cardio com o mozão depois.', emoji: '😂' },
  { nome: 'Ortência', conteudo: 'A aula de hidroginástica foi contagiante', emoji: '💦😍' },
  { nome: 'Alfredo', conteudo: 'O de hoje tá pago!!!', emoji: '💪' },
];

// Componente de perfil com lista de posts
export default function Profile() {
  return (
    <main style={{ width: '80%', margin: 'auto' }}>
      <h1>Perfil!</h1>
      <section>
        {posts.map((post, index) => (
          <Post key={index} nome={post.nome} conteudo={post.conteudo} emoji={post.emoji} />
        ))}
      </section>
    </main>
  );
}
