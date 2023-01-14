import dynamic from 'next/dynamic';

const Jokes = dynamic(() => import('@remotes/jokes/Jokes'));

export default function JokesPage() {
  return <Jokes />;
}
