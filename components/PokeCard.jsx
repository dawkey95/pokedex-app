import Image from 'next/image';

const PokeCard = () => {
	return (
		<div className='relative px-2 pt-1 bg-white rounded-lg card shadow-dropShadowLight'>
			<p className='text-right card-title text-grayscaleMedium text-[0.5rem]'>
				#001
			</p>
			<div className='z-10 flex flex-col items-center'>
				<Image
					className='z-10'
					src={'/images/pokéball.png'}
					alt='Pokéball'
					width={72}
					height={72}
				/>
				<div className='z-10 items-center text-center card-body'>
					<h2 className=' text-gray'>Bulbasaur</h2>
				</div>
			</div>
			<div className='absolute bottom-0 left-0 z-0 w-full h-12 rounded-lg bg-background'></div>
		</div>
	);
};
export default PokeCard;
