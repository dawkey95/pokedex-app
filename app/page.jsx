'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<div className='min-h-screen'>
			<div className='flex flex-col items-center justify-center gap-5 pt-24'>
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
								transition: { duration: 1, ease: 'easeInOut' },
								rotate: 360,
							}}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
