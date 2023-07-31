import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const FavoriteButton = () => {
	const [isSmashed, setIsSmashed] = useState(false);

	return (
		<button
			onClick={() => setIsSmashed(!isSmashed)}
			className={twMerge(`like-button`, isSmashed && 'animate-button')}
			style={{ backgroundImage: `url('/images/heart-animation.png')` }}
		/>
	);
};

export default FavoriteButton;
