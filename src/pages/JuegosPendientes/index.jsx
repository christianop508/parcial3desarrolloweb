import React from 'react';
import Navbar from '../Navbar';

const juegosPendientes = [
  "Stardew Valley",
  "Graveyard Keeper Collector's Edition",
  "Hades",
  "Hollow Knight",
  "Darkest Dungeon Ancestral Edition",
  "Subnautica",
  "No Mans Sky",
  "DOOM",
  "Metro Last Light Redux",
  "Nioh Complete Edition",
  "BioShock Remastered Collection",
  "Party Hard",
  "The Long Dark",
  "Devil May Cry 3 Special Edition",
  "NieR:Automata Game of the YoRHa Edition",
  "Undertale",
  "Shovel Knight Treasure Trove",
  "Wolfenstein II The New Colossus Deluxe Edition",
  "Metro 2033 Redux",
  "Hellblade Senuas Sacrifice Enhanced",
  "Terraria",
  // Puedes seguir agregando más...
];

const JuegosPendientes = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🎮 Juegos Pendientes</h1>
        <ul className="space-y-2">
          {juegosPendientes.map((juego, index) => (
            <li
              key={index}
              className="bg-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-700 transition"
            >
              {juego}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JuegosPendientes;