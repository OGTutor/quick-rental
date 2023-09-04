import { forwardRef } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

export interface FindDetailsButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const FindDetailsButton = forwardRef<HTMLButtonElement, FindDetailsButtonProps>(
	({ className, children, type = 'button', ...props }, ref) => {
		return (
			<button
				type={type}
				className={twMerge(
					`w-40 h-16 bg-main
					text-white flex items-center justify-center
					uppercase hover:bg-orange-500 shadow-sm shadow-main
					hover:shadow-md hover:shadow-main
					bold rounded transition`,
					className
				)}
				ref={ref}
				{...props}
			>
				Find Details
				<BiChevronRight size={30} className="align-baseline" />
			</button>
		);
	}
);

FindDetailsButton.displayName = 'FindDetailsButton';

export default FindDetailsButton;
