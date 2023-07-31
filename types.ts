interface Path {
	icon?: string;
	Icon?: React.ReactElement;
	label: string;
	active: boolean;
	href: string;
}

export interface Route {
	home?: Path;
	location?: Path;
	catalog?: Path;
	about?: Path;
	testimonials?: Path;
	phone?: Path;
	search?: Path;
	like?: Path;
	burger?: Path;
}
