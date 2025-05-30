import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('isLoggedIn');
    if (session === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();
  if (username === 'usuario' && password === 'contraseña') {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/JuegosPendientes'); // Redirige tras login
  } else {
    alert('Credenciales incorrectas');
  }
};

  // 👇 Separar estilos del login vs. app logueada
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Bienvenido, {username || 'usuario'} 🎉</h2>
          <p className="text-gray-400">Selecciona una sección del menú superior</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Ingresar
          </button>
        </form>
        <div className="mt-4 text-sm text-center text-gray-400">
          <p><strong>Usuario:</strong> usuario</p>
          <p><strong>Contraseña:</strong> contraseña</p>
        </div>
      </div>
    </div>
  );
}

export default Login;