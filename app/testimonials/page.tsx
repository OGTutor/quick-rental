import Footer from '@/components/Footer';
import GeneralHeader from '@/components/GeneralHeader';
import TestimonialsContent from './components/TestimonialsContent';

const Testimonials = () => {
	return (
		<>
			<header>
				<GeneralHeader title="Testimonials" subTitle="Testimonials" />
			</header>
			<main>
				<TestimonialsContent />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Testimonials;
