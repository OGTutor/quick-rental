'use client';

import { Tooltip } from '@mantine/core';
import { FC } from 'react';
import { BsHandbagFill } from 'react-icons/bs';
import { FaSnowflake } from 'react-icons/fa';
import { GiCarSeat } from 'react-icons/gi';
import { IoCarSportOutline } from 'react-icons/io5';

interface DetailedInformationCardProps {
	text: string;
	image: string;
}

const DetailedInformationCard: FC<DetailedInformationCardProps> = ({
	image,
	text,
}) => {
	const imageSelection = (image: string) => {
		switch (image) {
			case 'Seats':
				return <GiCarSeat size={18} />;
			case 'Bag':
				return <BsHandbagFill size={18} />;
			case 'Condition':
				return <FaSnowflake size={18} />;
			case 'Transmission':
				return <IoCarSportOutline size={18} />;
		}
	};

	return (
		<Tooltip
			label={image}
			position="top"
			transitionProps={{ transition: 'pop-bottom-right' }}
			withArrow
		>
			<div
				className="mt-3 mr-3 w-18 h-4 p-4
				border border-main flex items-center
				space-x-2 rounded hover:text-white
				hover:bg-main hover:cursor-pointer"
			>
				{imageSelection(image)}
				<span>{text}</span>
			</div>
		</Tooltip>
	);
};

export default DetailedInformationCard;
