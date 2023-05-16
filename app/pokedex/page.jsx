import PokeCard from '@/components/PokeCard';

const Pokédex = () => {
	return (
		<main className='grid min-h-full grid-cols-3 gap-2 px-3 py-6 mx-2 mb-2 bg-white rounded-lg'>
			<PokeCard />
			<PokeCard />
			<PokeCard />
		</main>
	);
};

export default Pokédex;
