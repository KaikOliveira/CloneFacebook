import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
  <div>
    <h1>Welcome</h1>
    <button>
      <Link to="/">Entrar</Link>
    </button>
  </div>
  );
}