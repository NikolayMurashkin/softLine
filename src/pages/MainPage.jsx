import { Header } from '../features/header/Header';
import { Banner } from '../features/banner/Banner';
import { About } from '../entities/about/About';
import { Numbers } from '../entities/numbers/Numbers';
import { Mission } from '../entities/mission/Mission';

export const MainPage = () => {
	return (
		<>
			<Header />
			<Banner />
			<About />
			<Numbers />
			<Mission />
		</>
	);
};
