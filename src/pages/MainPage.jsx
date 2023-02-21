import { Header } from '../features/header/Header';
import { Banner } from '../features/banner/Banner';
import { About } from '../entities/about/About';

export const MainPage = () => {
	return (
		<>
			<Header />
			<Banner />
			<About />
		</>
	);
};
