'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import DetailedInformationCard from './DetailedInformationCard';
import ReserveButton from './ReserveButton';

interface InfoCardProps {
	model: string;
	mark: string;
	year: number;
	doors: string;
	detailedInformation: {
		image: string;
		text: string;
	}[];
	ac: string;
	transmission: string;
	fuel: string;
	image: string;
	price: string;
}

const InfoCard: FC<InfoCardProps> = ({
	ac,
	doors,
	fuel,
	mark,
	model,
	transmission,
	year,
	image,
	price,
	detailedInformation,
}) => {
	return (
		<div className="w-full md:w-1/3 p-4">
			<Card sx={{ maxWidth: 440 }}>
				<CardMedia
					component="img"
					alt="car"
					height="298"
					image={image}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{mark}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						${doors} <span className="text-main">●</span> {fuel}
					</Typography>
					<Typography variant="body2">
						<div className="flex items-center">
							{detailedInformation.map((el, idx) => (
								<DetailedInformationCard
									key={idx}
									image={el.image}
									text={el.text}
								/>
							))}
						</div>
					</Typography>
					<Typography gutterBottom variant="h6" component="div">
						<div className="mt-3 font-bold items-center justify-between flex">
							<div>
								<span className="text-2xl text-main">
									{price}
								</span>{' '}
								/ rent{' '}
								<span className="text-main">per day</span>
							</div>
							<ScrollLink
								to="book-car-input"
								smooth={true}
								duration={500}
							>
								<ReserveButton className="hover:bg-orange-500">
									Reserve Now
								</ReserveButton>
							</ScrollLink>
						</div>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default InfoCard;
