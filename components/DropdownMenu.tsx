import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { FaLocationArrow } from 'react-icons/fa';

const DropdownMenu = () => {
	const router = useRouter();
	const [currentCity, setCurrentCity] = useState('New York');
	const cities = ['Washington', 'Boston', 'Bakersfield', 'Orlando', 'Macon'];

	const toggleChangeCity = (city: string) => {
		router.refresh();
		setCurrentCity(city);
	};

	return (
		<Menu as="div" className="relative inline-block text-left">
			{({ open }) => (
				<>
					<div className="w-40">
						<Menu.Button
							className="inline-flex w-full justify-center
							rounded-md bg-transparent px-4 py-2 text-sm
							font-bold text-black hover:bg-opacity-30
							focus:outline-none focus-visible:ring-2
							focus-visible:ring-black 
							focus-visible:ring-opacity-75"
						>
							<Image
								height={20}
								width={20}
								src="/images/location.svg"
								alt="Location"
								className="mr-2 -ml-1 h-5 w-5"
							/>
							{currentCity}
							{open ? (
								<BiChevronUp
									size={24}
									className="ml-2 -mr-1 h-5 w-5"
								/>
							) : (
								<BiChevronDown
									size={24}
									className="ml-2 -mr-1 h-5 w-5"
								/>
							)}
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items
							className="absolute right-0 mt-2 w-56
					origin-top-right divide-y divide-gray-100
					rounded-md bg-white shadow-lg ring-1
					ring-black ring-opacity-5 focus:outline-none"
						>
							<div className="px-1 py-1">
								{cities.map((city) => (
									<Menu.Item key={city}>
										{({ active }) => (
											<button
												className={`${
													active
														? 'bg-orange-500 text-white'
														: 'text-black'
												} group flex w-full items-center rounded-md
										px-2 py-2 text-sm font-bold`}
												onClick={(
													e: React.MouseEvent
												) =>
													toggleChangeCity(
														e.currentTarget
															.textContent || ''
													)
												}
											>
												<FaLocationArrow
													size={15}
													className="mr-2"
												/>
												{city}
											</button>
										)}
									</Menu.Item>
								))}
							</div>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
};

export default DropdownMenu;
