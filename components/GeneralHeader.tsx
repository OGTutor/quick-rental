import Link from 'next/link';
import { FC } from 'react';

interface GeneralHeaderProps {
	title: string;
	subTitle: string;
}

const GeneralHeader: FC<GeneralHeaderProps> = ({ subTitle, title }) => {
	return (
		<>
			<div
				className="container mx-auto pl-10 flex
				justify-start"
			>
				<div>
					<h1 className="text-2xl bold">{title}</h1>
					<h3 className="text-lg font-semibold pt-2">
						<Link
							href="/"
							className="hover:text-main
						transition"
						>
							Home
						</Link>{' '}
						/ {subTitle}
					</h3>
				</div>
			</div>
		</>
	);
};

export default GeneralHeader;
