import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface BookButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BookButton = forwardRef<HTMLButtonElement, BookButtonProps>(
	({ className, children, disabled, type = 'button', ...props }, ref) => {
		return (
			<button
				className={twMerge(
					`w-full rounded-xl bg-main
					border border-transparent px-3 py-3 
					disabled:cursor-not-allowed disabled:opacity-50
					text-white font-bold shadow-lg transition`,
					disabled && 'opacity-50 cursor-not-allowed',
					!disabled &&
						'hover:shadow-md hover:shadow-main hover:bg-transparent hover:border hover:border-main hover:text-black',
					className
				)}
				type={type}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	}
);

BookButton.displayName = 'BookButton';

export default BookButton;
