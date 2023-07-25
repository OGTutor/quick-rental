'use client';

import { usePathname } from 'next/navigation';
import { FC, useMemo } from 'react';
import NavbarItem from './NavbarItem';

interface NavbarProps {
	children: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{
				home: {
					icon: '/images/logo.png',
					label: 'Home',
					active: false,
					href: '/',
				},
				location: {
					icon: '',
					label: 'Your location',
					active: false,
					href: '',
				},
				catalog: {
					icon: '',
					label: 'Catalog',
					active: false,
					href: '',
				},
			},
			{
				about: {
					icon: '',
					label: 'About',
					active: pathname === '/about',
					href: '/about',
				},
				testimonials: {
					icon: '',
					label: 'Testimonials',
					active: pathname === '/testimonials',
					href: '/testimonials',
				},
			},
			{
				phone: {
					icon: '/images/phone.svg',
					label: 'Phone number',
					active: false,
					href: '',
				},
				search: {
					icon: '/images/search.svg',
					label: 'Search by name',
					active: false,
					href: '/search',
				},
				like: {
					icon: '/images/like.svg',
					label: 'Like',
					active: false,
					href: '',
				},
				burger: {
					icon: '',
					label: 'Burger',
					active: false,
					href: '',
				},
			},
		],
		[pathname]
	);

	return (
		<>
			<nav className="relative z-50 bg-transparent">
				<div className="container mx-auto flex justify-between my-5">
					{routes.map((route, idx) => (
						<NavbarItem key={idx} route={route} index={idx} />
					))}
				</div>
			</nav>
			{children}
		</>
	);
};

export default Navbar;
