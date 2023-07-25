import Image from 'next/image';
import { FC } from 'react';
import CardsCarousel from './CardsCarousel';

const Header: FC = () => {
	return (
		<>
			<div className="z-0">
				<Image
					fill
					className="object-cover hidden md:block"
					src="/images/desktop-bg.png"
					alt="Background (Desktop)"
				/>
			</div>
			<div className="container mx-auto px-4 flex justify-between">
				<div className="flex items-center space-x-4">
					<div className="flex flex-col space-y-2 pr-72 pt-24 z-50">
						<h1 className="text-black text-4xl font-semibold">
							<span className="text-orange-500">Find </span>
							<br />
							<span className="text-orange-500">the </span>best
							<br />
							<span className="text-orange-500">car</span> rental
							deals
						</h1>
						<p className="text-black pt-8 text-xl font-semibold">
							Find the perfect fit yourself or leave it to us
						</p>
						<div className="hidden md:flex">
							<CardsCarousel />
						</div>
					</div>
				</div>
				<div className="flex items-center space-x-4 z-50">
					Lorem ipsum
				</div>
			</div>
		</>
	);
};

export default Header;
