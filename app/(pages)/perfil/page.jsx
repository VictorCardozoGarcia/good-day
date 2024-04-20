import React from 'react';
import styles from './Profile.module.css'; // Certifique-se de que o caminho está correto

export default function Profile() {
  return (
    <main className={styles.profileContainer}>
      <div className={styles.backButton}>
        {/* Ícone de seta para voltar, você pode substituir por um ícone de sua escolha ou imagem */}
        <span className={styles.arrow}>{"<"}</span>
      </div>
      <div className={styles.avatarContainer}>
        {/* Substitua 'avatar.png' pelo caminho correto para a imagem do seu perfil */}
        <img src="avatar.png" alt="Avatar" className={styles.avatar} />
      </div>
      <h1 className={styles.name}>Nome</h1>
      <div className={styles.statsContainer}>
        {/* Substitua 'stats-icon.png' pelo caminho correto para a imagem de ícone de estatísticas */}
        <img src="stats-icon.png" alt="Estatísticas" className={styles.statsIcon} />
        <p className={styles.statsText}>Estatísticas</p>
      </div>
    </main>
  );
}
