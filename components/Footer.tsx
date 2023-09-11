import { FC } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import ContactButton from './ContactButton';
import Input from './Input';
import SubmitButton from './SubmitButton';

const Footer: FC = () => {
	return (
		<div
			className="container mx-auto px-4 flex
			flex-col items-center justify-center
			md:justify-between py-20"
		>
			<div
				className="flex flex-col md:flex-row
				text-center md:text-left z-50"
			>
				<div className="w-full md:w-1/2 md:pr-16">
					<h3 className="text-2xl">
						<span className="bold">CAR</span> Rental
					</h3>
					<ul>
						<li className="text-md text-gray-600 mt-5">
							We offers a big range of vehicles for all your
							driving needs. We have the perfect car to meet your
							needs.
						</li>
						<li className="mt-5">
							<ContactButton
								Icon={BiPhoneCall}
								text="+1 233-000-2288"
							/>
						</li>
						<li className="mt-3">
							<ContactButton
								Icon={AiOutlineMail}
								text="carrental@gmail.com"
							/>
						</li>
					</ul>
				</div>
				<div className="w-full md:w-1/2 md:pr-16 md:mt-0 mt-10">
					<h3 className="text-2xl bold">COMPANY</h3>
					<ul>
						<li className="mt-5">Washington</li>
						<li className="mt-3">Boston</li>
						<li className="mt-3">Bakersfield</li>
						<li className="mt-3">Orlando</li>
						<li className="mt-3">Macon</li>
					</ul>
				</div>
				<div className="w-full md:w-1/2 md:pr-16 md:mt-0 mt-10">
					<h3 className="text-2xl bold">WORKING HOURS</h3>
					<ul>
						<li className="mt-5">Mon - Fri: 9:00AM - 9:00PM</li>
						<li className="mt-3">Sat: 9:00AM - 19:00PM</li>
						<li className="mt-3">Sun: Closed</li>
					</ul>
				</div>
				<div className="w-full md:w-1/2 md:mt-0 mt-10">
					<h3 className="text-2xl bold">SUBSCRIPTION</h3>
					<ul>
						<li className="mt-5 text-md">
							Subscribe your Email address for latest news &
							updates.
						</li>
						<li className="mt-3">
							<Input placeholder="Enter Email Address" />
						</li>
						<li className="mt-3">
							<SubmitButton />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
