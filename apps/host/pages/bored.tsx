import dynamic from 'next/dynamic';

const Bored = dynamic(() => import('@remotes/bored/Bored'));

export default function BoredPage() {
  return <Bored />;
}
