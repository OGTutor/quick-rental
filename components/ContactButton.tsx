import { FC } from 'react';
import { IconType } from 'react-icons';

interface ContactButtonProps {
	Icon: IconType;
	text: string;
}

const ContactButton: FC<ContactButtonProps> = ({ Icon, text }) => {
	return (
		<div className="flex justify-center md:justify-start">
			<button
				className="flex bold items-center text-md
			hover:text-main transition"
			>
				<Icon size={30} /> <span className="ml-3">{text}</span>
			</button>
		</div>
	);
};

export default ContactButton;
