"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Login.css'; // Importando o arquivo CSS

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      router.push('/home');
    }, 1000);
  };

  return (
    <div className="login-main-container">
      <video className="login-bg-video" src="/video/earth.mp4" autoPlay loop muted playsInline />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="username">Usuário</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
