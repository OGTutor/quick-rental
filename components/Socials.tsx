import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const socials = [
	{
		href: 'https://www.youtube.com/',
		icon: (
			<AiFillYoutube
				color="f97316"
				className={`hover:opacity-75`}
				size={30}
			/>
		),
	},
	{
		href: 'https://www.instagram.com/',
		icon: (
			<AiFillInstagram
				color="f97316"
				className={`ml-5 hover:opacity-75`}
				size={30}
			/>
		),
	},
	{
		href: 'https://web.telegram.org/',
		icon: (
			<FaTelegramPlane
				color="f97316"
				className={`ml-5 hover:opacity-75`}
				size={30}
			/>
		),
	},
	{
		href: 'https://www.whatsapp.com/',
		icon: (
			<IoLogoWhatsapp
				color="f97316"
				className={`ml-5 hover:opacity-75`}
				size={30}
			/>
		),
	},
	{
		href: 'https://www.facebook.com/',
		icon: (
			<BsFacebook
				color="f97316"
				className={`ml-5 hover:opacity-75`}
				size={30}
			/>
		),
	},
];

const SocialContent = () => {
	return (
		<>
			{socials.map((item) => (
				<a
					key={item.href}
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{item.icon}
				</a>
			))}
		</>
	);
};

export default SocialContent;
