import Image from 'next/image';
import { FC } from 'react';
import { PiQuotesFill } from 'react-icons/pi';

interface ReviewCardProps {
	title: string;
	image: string;
	name: string;
	city: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ title, image, name, city }) => {
	return (
		<div className="w-full xl:w-1/3 p-4">
			<div className="bg-white shadow-2xl rounded-lg overflow-hidden">
				<div className="p-14">
					<h2 className="text-xl font-semibold text-center">
						&quot;{title}&quot;
					</h2>
					<div
						className="mt-3 flex flex-col md:flex-row items-center
								text-center md:text-left justify-between"
					>
						<div
							className="w-full md:w-1/4 flex flex-col
									md:items-start items-center justify-between"
						>
							<Image
								width={70}
								height={70}
								className="rounded-full"
								alt="avatar-1"
								src={image}
							/>
						</div>
						<div className="text-center">
							<h3 className="text-xl bold">{name}</h3>
							<h4 className="text-md">{city}</h4>
						</div>
						<div className="text-main">
							<PiQuotesFill size={52} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
