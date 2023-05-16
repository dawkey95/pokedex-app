'use client';
import { useState } from 'react';
import { TbPokeball, TbSearch, TbHash } from 'react-icons/tb';
import { MdTextFormat } from 'react-icons/md';

const Nav = () => {
	const filterButton = () => {
		setIsFilterClicked(!isFilterClicked);
	};

	const [isFocused, setIsFocused] = useState(false);
	const [isFilterClicked, setIsFilterClicked] = useState(false);

	return (
		<div className='flex flex-col items-start px-4 pt-4 pb-6 navbar'>
			<div className='flex flex-row items-center gap-4'>
				<TbPokeball className='w-6 h-6 fill-white stroke-primary' />
				<h1 className='text-2xl font-bold text-white'>Pokédex</h1>
			</div>
			<div className='flex flex-row w-full gap-4 mt-2'>
				<div
					className={`flex flex-row items-center gap-2 px-3 bg-white form-control rounded-2xl w-[90%] ${
						isFocused ? 'shadow-dropShadowHeavy' : 'shadow-innerShadow'
					}`}
				>
					<TbSearch className='stroke-primary' />
					<input
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						type='text'
						placeholder=' Search'
						className='w-full py-2 text-xs font-normal bg-transparent focus:outline-none text-grayscaleMedium input input-bordered placeholder:text-grayscaleMedium'
					/>
				</div>
				<button
					onClick={filterButton}
					className={`flex flex-row items-center justify-center p-2 m-0 bg-white rounded-full ${
						isFilterClicked ? 'shadow-dropShadowHeavy' : 'shadow-innerShadow'
					}`}
				>
					{isFilterClicked ? (
						<MdTextFormat className='fill-primary' />
					) : (
						<TbHash className='stroke-primary' />
					)}
				</button>
			</div>
		</div>
	);
};

export default Nav;
