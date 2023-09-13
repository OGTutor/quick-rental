import ContactButton from '@/components/ContactButton';
import Image from 'next/image';
import { FC } from 'react';
import {
	BiPhoneCall,
	BiSolidCarGarage,
	BiSolidCarMechanic,
} from 'react-icons/bi';
import { FaCarAlt } from 'react-icons/fa';

const AboutContent: FC = () => {
	return (
		<>
			<div className="container mx-auto px-4">
				<h1 className="text-4xl bold text-center py-10">
					About Company
				</h1>
				<div className="flex flex-wrap px-20">
					<div className="w-full md:w-1/2">
						<Image
							src="/images/about-us.jpg"
							width={600}
							height={450}
							objectFit="cover"
							alt="About company"
						/>
					</div>
					<div className="w-full md:w-1/2 pt-10 md:pt-0 text-center">
						<h1 className="text-4xl bold">
							You start the engine and your adventure begins
						</h1>
						<p className="text-md text-gray-500 pt-5">
							Certain but she but shyness why cottage. Guy the put
							instrument sir entreaties affronting. Pretended
							exquisite see cordially the you. Weeks quiet do
							vexed or whose. Motionless if no to affronting
							imprudence no precaution. My indulged as disposal
							strongly attended.
						</p>
						<div className="flex flex-wrap md:justify-center justify-between pt-5">
							<div className="w-full md:w-1/3 flex flex-col text-center items-center">
								<FaCarAlt size={50} color="ff8404" />
								<div className="flex items-center">
									<h1 className="text-4xl bold">20</h1>
									<p className="text-md text-gray-500">
										Car Types
									</p>
								</div>
							</div>
							<div
								className="w-full md:w-1/3 flex flex-col text-center
								items-center pt-5 md:pt-0"
							>
								<BiSolidCarGarage size={50} color="ff8404" />
								<div className="flex items-center">
									<h1 className="text-4xl bold">85</h1>
									<p className="text-md text-gray-500">
										Rental Outlets
									</p>
								</div>
							</div>
							<div
								className="w-full md:w-1/3 flex flex-col text-center
								items-center pt-5 md:pt-0"
							>
								<BiSolidCarMechanic size={50} color="ff8404" />
								<div className="flex items-center">
									<h1 className="text-4xl bold">75</h1>
									<p className="text-md text-gray-500">
										Repair Shop
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="flex flex-col items-center
					justify-center md:justify-between py-20"
				>
					<div className="text-center">
						<h3 className="text-black text-xl font-bold">
							Plan <span className="text-main">your</span> trip
							now
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
								We offers a big range of vehicles for all your
								driving needs. We have the perfect car to meet
								your needs
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
								Our knowledgeable and friendly operators are
								always ready to help with any questions or
								concerns
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
								Whether you`re hitting the open road, we`ve got
								you covered with our wide range of cars
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="h-60 w-screen
				flex flex-col justify-center 
				items-center bg-zinc-700
				text-white"
			>
				<div className="text-center flex flex-col md:flex-row relative z-50">
					<h1 className="text-4xl bold">
						Book a car by getting in touch with us
					</h1>
					<h1 className="text-4xl bold ml-0 md:ml-2 text-main">
						<ContactButton
							Icon={BiPhoneCall}
							text="+1 233-000-2288"
							size={40}
						/>
					</h1>
				</div>
			</div>
		</>
	);
};

export default AboutContent;
