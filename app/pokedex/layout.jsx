import React from 'react';
import Nav from '@/components/Nav';

const PokedexLayout = ({children}) => {
	return (
		<div className='min-h-screen bg-primary'>
			<Nav />
			{children}
		</div>
	);
};

export default PokedexLayout;
