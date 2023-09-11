import { FC } from 'react';

const SubmitButton: FC = () => {
	return (
		<button
			className="flex w-full rounded-md border
			bg-transparent border-main
			hover:bg-main transition h-12 text-center
			items-center justify-center bold hover:text-white
			shadow shadow-main hover:shadow-md hover:shadow-main"
		>
			Submit
		</button>
	);
};

export default SubmitButton;
