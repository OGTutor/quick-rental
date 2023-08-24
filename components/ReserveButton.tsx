'use client';

// @ts-ignore
import { Link as ScrollLink } from 'react-scroll';

const ReserveButton = () => {
	return (
		<ScrollLink to="book-car-input" smooth={true} duration={500}>
			<button
				className="uppercase
				w-40 h-10 bg-main
				text-white text-sm 
				hover:bg-orange-500
				reserve-shadow"
			>
				Reserve Now
			</button>
		</ScrollLink>
	);
};

export default ReserveButton;
