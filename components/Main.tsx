import Image from 'next/image';
import { FC } from 'react';
import Button from './Button';
import InfoCard from './InfoCard';

const data = [
	{
		model: 'Benz GLK',
		mark: 'Mercedes',
		year: 2006,
		doors: '4/5 doors',
		detailedInformation: [
			{ image: 'Seats', text: '4' },
			{ image: 'Bag', text: '1' },
			{ image: 'Condition', text: 'AC' },
			{ image: 'Transmission', text: 'Manual' },
		],
		ac: 'Yes',
		transmission: 'Manual',
		fuel: 'Diesel',
		image: '/images/car.jpg',
		price: '$50',
	},
	{
		model: 'Benz GLK',
		mark: 'Mercedes',
		year: 2006,
		doors: '4/5 doors',
		detailedInformation: [
			{ image: 'Seats', text: '4' },
			{ image: 'Bag', text: '1' },
			{ image: 'Condition', text: 'AC' },
			{ image: 'Transmission', text: 'Manual' },
		],
		ac: 'Yes',
		transmission: 'Manual',
		fuel: 'Diesel',
		image: '/images/car.jpg',
		price: '$50',
	},
	{
		model: 'Benz GLK',
		mark: 'Mercedes',
		year: 2006,
		doors: '4/5 doors',
		detailedInformation: [
			{ image: 'Seats', text: '4' },
			{ image: 'Bag', text: '1' },
			{ image: 'Condition', text: 'AC' },
			{ image: 'Transmission', text: 'Manual' },
		],
		ac: 'Yes',
		transmission: 'Manual',
		fuel: 'Diesel',
		image: '/images/car.jpg',
		price: '$50',
	},
	{
		model: 'Benz GLK',
		mark: 'Mercedes',
		year: 2006,
		doors: '4/5 doors',
		detailedInformation: [
			{ image: 'Seats', text: '4' },
			{ image: 'Bag', text: '1' },
			{ image: 'Condition', text: 'AC' },
			{ image: 'Transmission', text: 'Manual' },
		],
		ac: 'Yes',
		transmission: 'Manual',
		fuel: 'Diesel',
		image: '/images/car.jpg',
		price: '$50',
	},
	{
		model: 'Benz GLK',
		mark: 'Mercedes',
		year: 2006,
		doors: '4/5 doors',
		detailedInformation: [
			{ image: 'Seats', text: '4' },
			{ image: 'Bag', text: '1' },
			{ image: 'Condition', text: 'AC' },
			{ image: 'Transmission', text: 'Manual' },
		],
		ac: 'Yes',
		transmission: 'Manual',
		fuel: 'Diesel',
		image: '/images/car.jpg',
		price: '$50',
	},
	{
		model: 'Benz GLK',
		mark: 'Mercedes',
		year: 2006,
		doors: '4/5 doors',
		detailedInformation: [
			{ image: 'Seats', text: '4' },
			{ image: 'Bag', text: '1' },
			{ image: 'Condition', text: 'AC' },
			{ image: 'Transmission', text: 'Manual' },
		],
		ac: 'Yes',
		transmission: 'Manual',
		fuel: 'Diesel',
		image: '/images/car.jpg',
		price: '$50',
	},
];

const Main: FC = () => {
	return (
		<div
			className="container mx-auto px-4 flex
			flex-col items-center justify-center md:justify-between"
		>
			<div className="text-center">
				<h3 className="text-black text-xl font-bold">
					Plan <span className="text-main">your</span> trip now
				</h3>
				<h1 className="text-black text-4xl font-bold">
					<span className="text-main">Quick</span> & easy car{' '}
					<span className="text-main">rental</span>
				</h1>
			</div>
			<div className="md:flex mt-10">
				<div className="text-center md:mr-80 flex flex-col items-center">
					<Image
						width={170}
						height={170}
						src="/images/about-icon1.png"
						alt="About-icon1"
					/>
					<h1 className="text-black text-2xl font-bold">
						Select Car
					</h1>
					<p className="text-neutral-600">
						We offers a big range of vehicles for all your driving
						needs. We have the perfect car to meet your needs
					</p>
				</div>
				<div className="text-center md:mr-80 flex flex-col items-center">
					<Image
						width={170}
						height={170}
						src="/images/about-icon2.png"
						alt="About-icon3"
					/>
					<h1 className="text-black text-2xl font-bold">
						Contact Operator
					</h1>
					<p className="text-neutral-600">
						Our knowledgeable and friendly operators are always
						ready to help with any questions or concerns
					</p>
				</div>
				<div className="text-center flex flex-col items-center">
					<Image
						width={170}
						height={170}
						src="/images/about-icon3.png"
						alt="About-icon3"
					/>
					<h1 className="text-black text-2xl font-bold">
						Let`s Drive
					</h1>
					<p className="text-neutral-600">
						Whether you`re hitting the open road, we`ve got you
						covered with our wide range of cars
					</p>
				</div>
			</div>
			<div className="mt-20">
				<div className="text-center">
					<h1 className="text-black text-2xl md:text-4xl font-bold">
						<span className="text-main">Featured</span> in the{' '}
						<span className="text-main">catalog</span>
					</h1>
				</div>
				<div className="flex flex-wrap mt-10">
					{data.map((car) => (
						<InfoCard key={car.model} {...car} />
					))}
				</div>
			</div>
			<Button className="w-72 mt-5">Catalog</Button>
			<div
				className="h-60 w-screen
				flex flex-col justify-center 
				items-center bg-zinc-700 mt-8
				text-white"
			>
				<h1 className="text-6xl font-bold">
					<span className="text-main">Save</span> big with our{' '}
					<span className="text-main">cheap</span> car{' '}
					<span className="text-main">rental</span>!
				</h1>
				<h5 className="text-2xl mt-6">
					Top Airports. Local Suppliers.{' '}
					<span className="text-main font-mono">24/7</span> Support.
				</h5>
			</div>
			<div className="relative w-full flex">
				<div className="hidden md:block relative z-10 w-1/2">
					<Image
						width={832}
						height={483}
						src="/images/choose-us-bg.png"
						alt="Background"
					/>
				</div>
				<div className="hidden md:block relative z-50 w-1/2">
					<Image
						width={1832}
						height={483}
						src="/images/choose-us-main.png"
						alt="Main"
					/>
				</div>
			</div>
		</div>
	);
};

export default Main;
