import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Route } from 'types';
import Button from './Button';
import DropdownMenu from './DropdownMenu';

interface NavbarItemProps {
	route: Route;
	index: number;
}

const NavbarItem: FC<NavbarItemProps> = ({ route, index }) => {
	switch (index) {
		case 0:
			return (
				<div className="flex items-center space-x-4">
					<div className="flex items-center space-x-4 pr-5">
						<Link href="/">
							<Image
								height={10}
								width={150}
								src={route?.home?.icon!}
								alt="Logo"
							/>
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4 pr-5">
						<DropdownMenu />
					</div>
					<div className="hidden md:flex items-center space-x-4 pr-10">
						<Button>{route.catalog?.label}</Button>
					</div>
				</div>
			);
		case 1:
			return (
				<div className="flex items-center space-x-4">
					<div className="hidden md:flex items-center space-x-4 pr-5">
						<Link
							href={route.about?.href!}
							className={twMerge(
								`text-black hover:text-orange-500 
							hover:border-b-4 border-orange-500
							rounded-lg transition-transform font-bold`,
								route?.about?.active &&
									`text-orange-500 border-b-4 border-orange-500
								rounded-lg`
							)}
						>
							{route.about?.label}
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4 pr-10">
						<Link
							href={route.testimonials?.href!}
							className={twMerge(
								`text-black hover:text-orange-500 
							hover:border-b-4 border-orange-500
							rounded-lg transition-transform font-bold`,
								route?.testimonials?.active &&
									`text-orange-500 border-b-4 border-orange-500
								rounded-lg`
							)}
						>
							{route.testimonials?.label}
						</Link>
					</div>
				</div>
			);
		case 2:
			return (
				<div className="flex items-center space-x-4">
					<div className="flex items-center space-x-4 pr-5">
						<Image
							className="object-cover"
							width={20}
							height={20}
							src={route.phone?.icon!}
							alt="Phone"
						/>
						<p className="hidden lg:flex text-black font-bold">
							+1 233-000-2288
						</p>
					</div>
					<div className="flex items-center space-x-4 pr-5">
						<Image
							className="object-cover"
							width={24}
							height={24}
							src={route.like?.icon!}
							alt="Like"
						/>
					</div>
					<div className="flex items-center space-x-4">
						<Image
							className="object-cover"
							width={24}
							height={24}
							src={route.search?.icon!}
							alt="Search"
						/>
						<Link
							href={route.search?.href!}
							className={twMerge(
								`text-black hover:text-orange-500 
							hover:border-b-4 border-orange-500
							rounded-lg transition-transform font-bold`,
								route?.testimonials?.active &&
									`text-orange-500 border-b-4 border-orange-500
								rounded-lg`
							)}
						>
							{route.search?.label}
						</Link>
					</div>
					<div className="flex items-center space-x-4">
						<button id="burger" className="md:hidden text-black">
							☰
						</button>
					</div>
				</div>
			);
		default:
			break;
	}
};

export default NavbarItem;
