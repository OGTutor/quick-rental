import { FC } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import ContactButton from './ContactButton';

const BookingBanner: FC = () => {
	return (
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
	);
};

export default BookingBanner;
