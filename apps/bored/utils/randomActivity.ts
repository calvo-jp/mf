export interface Activity {
  key: string;
  type: string;
  link: number;
  price: number;
  activity: string;
  participants: number;
  accessibility: string;
}

const endpoint = 'https://www.boredapi.com/api/activity';

export default async function randomActivity(): Promise<Activity> {
  const response = await fetch(endpoint);
  return await response.json();
}
