'use client';

import { DatePicker } from '@mui/x-date-pickers';
import { FC, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillCar } from 'react-icons/ai';
import { CiLocationOff, CiLocationOn } from 'react-icons/ci';
import { FcCalendar } from 'react-icons/fc';
import BookButton from './BookButton';
import ListboxMenu from './ListboxMenu';

const BookCarCard: FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [fromValue, setFromValue] = useState<number | null>(null);
	const [toValue, setToValue] = useState<number | null>(null);

	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			carType: '',
			pickUp: '',
			dropOf: '',
			pickUpDate: null,
			dropOfDate: null,
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (values) => {
		try {
			setIsLoading(true);
			console.log('Hello');
		} catch (error) {
			toast.error('Something went wrong');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div
			className="container mx-auto py-4 bg-[url(/images/book-bg.png)]
				rounded-2xl shadow-2xl mt-20 mb-20"
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="md:text-start text-center font-bold text-2xl p-4">
					Book a car
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-50">
					{/* First column */}
					<div className="p-4">
						<div className="mb-4 flex items-center">
							<AiFillCar
								size={22}
								color="#ff8404"
								className="mr-2"
							/>
							<label className="block text-gray-700 text-sm font-bold">
								Select Your Car Type{' '}
								<span className="text-main">*</span>{' '}
							</label>
						</div>
						<div className="relative z-50">
							<ListboxMenu />
						</div>
						<div>
							<div className="mb-4 mt-8 flex items-center">
								<FcCalendar size={22} className="mr-2" />
								<label className="block text-gray-700 text-sm font-bold">
									Pick-up <span className="text-main">*</span>{' '}
								</label>
							</div>
							<div className="relative z-0">
								<DatePicker
									className="w-full"
									value={fromValue}
									onChange={(value) => setFromValue(value)}
								/>
							</div>
						</div>
					</div>
					{/* Second column */}
					<div className="p-4">
						<div className="mb-4 flex items-center">
							<CiLocationOn
								size={22}
								color="#ff8404"
								className="mr-2"
							/>
							<label className="block text-gray-700 text-sm font-bold">
								Pick-up <span className="text-main">*</span>{' '}
							</label>
						</div>
						<div className="relative z-50">
							<ListboxMenu />
						</div>
						<div>
							<div className="mb-4 mt-8 flex items-center">
								<FcCalendar size={22} className="mr-2" />
								<label className="block text-gray-700 text-sm font-bold">
									Pick-up <span className="text-main">*</span>{' '}
								</label>
							</div>
							<div className="relative z-0">
								<DatePicker
									className="w-full"
									value={toValue}
									onChange={(value) => setToValue(value)}
								/>
							</div>
						</div>
					</div>
					{/* Third column */}
					<div className="p-4">
						<div className="mb-4 flex items-center">
							<CiLocationOff
								size={22}
								color="#ff8404"
								className="mr-2"
							/>
							<label className="block text-gray-700 text-sm font-bold">
								Pick-up <span className="text-main">*</span>{' '}
							</label>
						</div>
						<ListboxMenu />
						<div>
							<div className="mb-4 mt-[72px] flex items-center">
								<BookButton disabled={isLoading} type="submit">
									Search
								</BookButton>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BookCarCard;
