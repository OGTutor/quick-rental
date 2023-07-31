'use client';

import { Carousel, Embla } from '@mantine/carousel';
import { Progress, rem, useMantineTheme } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Card from './Card';

const data = [
	{
		image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Best forests to visit in North America',
		category: 'nature',
	},
	{
		image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Hawaii beaches review: better than you think',
		category: 'beach',
	},
	{
		image: 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Mountains at night: 12 best locations to enjoy the view',
		category: 'nature',
	},
	{
		image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Aurora in Norway: when to visit for best experience',
		category: 'nature',
	},
	{
		image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Best places to visit this winter',
		category: 'tourism',
	},
	{
		image: 'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Active volcanos reviews: travel at your own risk',
		category: 'nature',
	},
];

const CardsCarousel = () => {
	const theme = useMantineTheme();
	const slides = data.map((item) => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	));

	const [scrollProgress, setScrollProgress] = useState(0);
	const [embla, setEmbla] = useState<Embla | null>(null);

	const handleScroll = useCallback(() => {
		if (!embla) return;
		const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
		setScrollProgress(progress * 100);
	}, [embla, setScrollProgress]);

	useEffect(() => {
		if (embla) {
			embla.on('scroll', handleScroll);
			handleScroll();
		}
	}, [embla, handleScroll]);

	return (
		<div className="pt-16">
			<Carousel
				maw={520}
				mx="auto"
				withIndicators
				previousControlIcon={<BiChevronLeft size={25} />}
				nextControlIcon={<BiChevronRight size={25} />}
				height={100}
				slideSize="33.333333%"
				slideGap="md"
				loop
				align="start"
				breakpoints={[
					{ maxWidth: 'md', slideSize: '50%' },
					{ maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
				]}
				getEmblaApi={setEmbla}
			>
				{slides}
			</Carousel>
			<Progress
				value={scrollProgress}
				size="sm"
				mt="xl"
				mx="auto"
				styles={(theme) => ({
					bar: {
						transitionDuration: '0ms',
						backgroundImage: theme.fn.gradient({
							from: 'red',
							to: 'yellow',
						}),
					},
					root: { maxWidth: rem(320) },
				})}
			/>
		</div>
	);
};

export default CardsCarousel;
