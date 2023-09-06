'use client';

import { Disclosure } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';

import { FC } from 'react';

const FaqSection: FC = () => {
	return (
		<div className="w-full px-4 pt-16">
			<div className="mx-auto max-w-4xl text-center">
				<h3 className="text-xl bold text-main">FAQ</h3>
				<h1 className="text-4xl bold mt-1">
					Frequently <span className="text-main">Asked </span>
					Questions
				</h1>
				<h6 className="text-lg text-gray-500 mt-5">
					Frequently Asked Questions About the{' '}
					<span className="text-main">
						Car Rental Booking Process
					</span>{' '}
					on Our Website: Answers to Common Concerns and Inquiries.
				</h6>
			</div>
			<div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-2 shadow-xl mt-3">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={`flex w-full items-center justify-between rounded-lg
								px-4 py-2 text-left text-sm font-medium border border-l-main
								border-r-main focus:outline-none focus-visible:ring 
								focus-visible:ring-purple-500 focus-visible:ring-opacity-75
								hover:border-main animate-fadeIn duration-500 delay-120
								animate-fadeOut delay-420 ${
									open
										? 'bg-main text-white shadow shadow-main border-none'
										: ''
								}`}
							>
								<span className="text-xl">
									What is special about comparing rental car
									deals?
								</span>
								<BiChevronDown
									className={`${
										open
											? 'rotate-180 transform text-white'
											: ''
									} h-5 w-5 text-main`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
								Comparing rental car deals is important as it
								helps find the best deal that fits your budget
								and requirements, ensuring you get the most
								value for your money. By comparing various
								options, you can find deals that offer lower
								prices, additional services, or better car
								models. You can find car rental deals by
								researching online and comparing prices from
								different rental companies.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={`flex w-full items-center justify-between rounded-lg
								px-4 py-2 text-left text-sm font-medium border border-l-main
								border-r-main focus:outline-none focus-visible:ring 
								focus-visible:ring-purple-500 focus-visible:ring-opacity-75
								hover:border-main animate-fadeIn duration-500 delay-120 mt-5
								animate-fadeOut delay-420 ${
									open
										? 'bg-main text-white shadow shadow-main border-none'
										: ''
								}`}
							>
								<span className="text-xl">
									How do I find the car rental deals?
								</span>
								<BiChevronDown
									className={`${
										open
											? 'rotate-180 transform text-white'
											: ''
									} h-5 w-5 text-main`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
								You can find car rental deals by researching
								online and comparing prices from different
								rental companies. Websites such as Expedia,
								Kayak, and Travelocity allow you to compare
								prices and view available rental options. It is
								also recommended to sign up for email
								newsletters and follow rental car companies on
								social media to be informed of any special deals
								or promotions.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={`flex w-full items-center justify-between rounded-lg
								px-4 py-2 text-left text-sm font-medium border border-l-main
								border-r-main focus:outline-none focus-visible:ring 
								focus-visible:ring-purple-500 focus-visible:ring-opacity-75
								hover:border-main animate-fadeIn duration-500 delay-120 mt-5
								animate-fadeOut delay-420 ${
									open
										? 'bg-main text-white shadow shadow-main border-none'
										: ''
								}`}
							>
								<span className="text-xl">
									How do I find such low rental car prices?
								</span>
								<BiChevronDown
									className={`${
										open
											? 'rotate-180 transform text-white'
											: ''
									} h-5 w-5 text-main`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
								Book in advance: Booking your rental car ahead
								of time can often result in lower prices.
								Compare prices from multiple companies: Use
								websites like Kayak, Expedia, or Travelocity to
								compare prices from multiple rental car
								companies. Look for discount codes and coupons:
								Search for discount codes and coupons that you
								can use to lower the rental price. Renting from
								an off-airport location can sometimes result in
								lower prices.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
};

export default FaqSection;
