import React, { useState } from 'react';
import Formulario from './assets/Components/Formulario';
import ListaEstudiantes from './assets/Components/ListaEstudiante';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === 'admin@example.com' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className='App'>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Correo: </label>
            <input 
              type='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Contraseña: </label>
            <input 
              type='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      ) : (
        <>
          <Formulario />
          <ListaEstudiantes />
        </>
      )}
    </div>
  );
}

export default App;
