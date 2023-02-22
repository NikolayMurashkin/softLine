import { Header } from '../features/header/Header';
import { Banner } from '../features/banner/Banner';
import { About } from '../entities/about/About';
import { Numbers } from '../entities/numbers/Numbers';
import { Mission } from '../entities/mission/Mission';
import { Business } from '../features/business/Business';
import { Benefits } from '../features/benefits/Benefits';

export const MainPage = () => {
	return (
		<>
			<Header />
			<Banner />
			<About />
			<Numbers />
			<Mission />
			<Business />
			<Benefits />
		</>
	);
};
