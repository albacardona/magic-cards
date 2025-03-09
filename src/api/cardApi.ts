import type { Card } from '@/types/types';

const baseURL = import.meta.env.VITE_API_URL;

export async function getCards(): Promise<Card[]> {
  const response = await fetch(`${baseURL}/cards`);
  const data = await response.json();
  return data.cards;
}
