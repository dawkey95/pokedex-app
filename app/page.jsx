'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<main className='min-h-screen bg-eerieGray'>
			<div className='flex flex-col items-center justify-center gap-16 pt-24'>
				<Image
					src={'/images/pokemon-title.png'}
					alt='pokémon logo'
					priority
					width={250}
					height={250}
				/>
				<div className='group flex flex-col items-center justify-center w-[200px] h-[200px] rounded-full'>
					<Link
						className='rounded-full group-hover:scale-125 hover:bg-white hover:shadow-ballShadow'
						href={'/pokedex'}
					>
						<motion.img
							src='/images/pokéball.png'
							alt='pokéball'
							width={125}
							whileHover={{
								scale: 1.2,
								transition: { duration: 0.8, ease: 'easeInOut' },
							}}
						/>
					</Link>
				</div>
			</div>
		</main>
	);
}
