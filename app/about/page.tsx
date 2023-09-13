import Footer from '@/components/Footer';
import GeneralHeader from '@/components/GeneralHeader';
import AboutContent from './components/AboutContent';

const About = () => {
	return (
		<>
			<header>
				<GeneralHeader title="About" subTitle="About" />
			</header>
			<main>
				<AboutContent />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default About;
