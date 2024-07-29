import HeroList from '../components/HeroList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Lista de Heróis</h1>
      <HeroList />
    </div>
  );
}
