export interface RandomJoke {
  id: string;
  type: string;
  setup: string;
  punchline: string;
}

const endpoint =
  'https://official-joke-api.appspot.com/jokes/programming/random';

export default async function randomJoke(): Promise<RandomJoke> {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data[0];
}
