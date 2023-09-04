import Link from 'next/link';
import { forwardRef } from 'react';

interface MyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: React.ReactNode;
}

const MyLink = forwardRef<HTMLAnchorElement, MyLinkProps>((props, ref) => {
	let { href, children, ...rest } = props;
	return (
		<Link href={href} legacyBehavior>
			<a ref={ref} {...rest}>
				{children}
			</a>
		</Link>
	);
});

MyLink.displayName = 'MyLink';

export default MyLink;
