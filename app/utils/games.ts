import axios from 'axios';

export async function fetchGames() {
  const res = await axios.get('http://localhost:4200/api/games/');
  const games = res.data;
  return games;
}