import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
	subsets: ['latin'], 
	variable: '--font-poppins',
	weight: ['400', '500', '600', '700', '800', '900'], 
});

export const metadata = {
	title: 'Pokémon App',
	description: 'Pokémon App created by Dawid Keyser',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`bg-background font-mono ${poppins.variable}`}>{children}</body>
		</html>
	);
}
