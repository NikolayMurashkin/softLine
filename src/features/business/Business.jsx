import classNames from 'classnames/bind';

import styles from './Business.module.scss';
import { BusinessCard } from '../../entities/business-card/BusinessCard';

export const Business = () => {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('business')}>
			<h2 className={cx('business__title')}>Направления бизнеса</h2>
			<div className={cx('business__content', 'content')}>
				<BusinessCard
					title={'Решения Softline'}
					text={
						'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.'
					}
					image={'url("/images/business/1.jpg")'}
				/>
				<BusinessCard
					title={'Кибербезопасность'}
					text={
						'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.'
					}
					image={'url("/images/business/2.jpg")'}
				/>
				<BusinessCard
					title={'Импортозамещение'}
					text={
						'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.'
					}
					image={'url("/images/business/3.jpg")'}
				/>
				<BusinessCard
					title={'Облачные решения'}
					text={
						'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.'
					}
					image={'url("/images/business/4.jpg")'}
				/>
				<BusinessCard
					title={'Цифровая трансформация \n и разработка ПО'}
					text={
						'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.'
					}
					image={'url("/images/business/5.jpg")'}
				/>
				<BusinessCard
					title={'Техническая поддержка Softline'}
					text={
						'200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.'
					}
					image={'url("/images/business/6.jpg")'}
				/>
			</div>
		</section>
	);
};
