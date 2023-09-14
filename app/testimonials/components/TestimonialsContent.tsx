import BookingBanner from '@/components/BookingBanner';
import ReviewCard from '@/components/ReviewCard';
import { FC } from 'react';

const TestimonialsContent: FC = () => {
	return (
		<div
			className="container mx-auto px-4 flex
			flex-col items-center justify-center md:justify-between"
		>
			<div className="text-center w-1/2 mt-10">
				<h4 className="text-xl bold">
					<span className="text-main">Reviewed</span> by People
				</h4>
				<h1 className="text-4xl bold my-3">
					Client`s <span className="text-main">Testimonials</span>
				</h1>
				<p className="text-md text-gray-500">
					Discover the positive impact we`ve made on the our clients
					by reading through their testimonials. Our clients have
					experienced our service and results, and they`re eager to
					share their positive experiences with you.
				</p>
			</div>
			<div className="flex flex-wrap justify-center my-10">
				<ReviewCard
					title="We rented a car from this website and had an
						amazing experience! The booking was easy and the rental
						rates were very affordable."
					image="/images/avatar-1.jpg"
					name="Arthur Morgan"
					city="Macon"
				/>
				<ReviewCard
					title="The car was in great condition and made
						our trip even better. Highly recommend for this
						car rental website!"
					image="/images/avatar-2.jpg"
					name="Thanos Titan"
					city="Orlando"
				/>
				<ReviewCard
					title="A wonderful car. I guess I was lucky. Despite the
					fact that I have a basic package, I don’t even have power windows."
					image="/images/avatar-3.jpg"
					name="Tony Stark"
					city="Boston"
				/>
				<ReviewCard
					title="A good, proven company that I have contacted
					several times and have never let me down. Thank you,
					I will contact you again)"
					image="/images/avatar-4.jpg"
					name="Peter Parker"
					city="New York"
				/>
				<ReviewCard
					title="I have used car rental. The managers
					helped us choose a car and gave a discount on the
					second rental. I'm happy with the service)"
					image="/images/avatar-5.jpg"
					name="Heisenberg"
					city="Albuquerque"
				/>
				<ReviewCard
					title="Managers will promptly select a car, the cars are always well-maintained. I thank QUICK RENTAL for the car rental services provided."
					image="/images/avatar-6.jpg"
					name="Michael Ehrmantraut"
					city="Bakersfield"
				/>
			</div>
			<BookingBanner />
		</div>
	);
};

export default TestimonialsContent;
