import useStyles from '@/hooks/useStyles';
import { Button, Paper, Text } from '@mantine/core';
import { FC } from 'react';

interface CardProps {
	image: string;
	category: string;
}

const Card: FC<CardProps> = ({ category, image }) => {
	const { classes } = useStyles();

	return (
		<Paper
			shadow="xs"
			p="xs"
			radius="lg"
			sx={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		>
			<div>
				<Text className={classes.category} size="xs">
					{category}
				</Text>
			</div>
			<Button variant="white" color="dark">
				Read article
			</Button>
		</Paper>
	);
};

export default Card;
