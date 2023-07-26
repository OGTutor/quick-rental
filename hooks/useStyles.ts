import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	card: {
		height: rem(100),
		width: rem(160),
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	category: {
		color: theme.black,
		opacity: 1,
		fontWeight: 900,
		textTransform: 'uppercase',
	},
}));

export default useStyles;
