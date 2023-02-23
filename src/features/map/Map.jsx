import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import styles from './Map.module.scss';
import { MapArrowIcon } from '../../assets/icons/MapArrowIcon';

export const Map = () => {
	const cx = classNames.bind(styles);
	const [isCitiesVisible, setIsCitiesVisible] = useState(false);
	const citiesRef = useRef(null);

	const handleCitiesVisibility = () => {
		if (isCitiesVisible) {
			citiesRef.current.classList.toggle(cx('hidden'));
		} else {
			citiesRef.current.classList.toggle(cx('hidden'));
		}
	};

	return (
		<section className={cx('map')}>
			<div className={cx('map__header')}>
				<span
					className={cx('map__dropdown')}
					onClick={handleCitiesVisibility}
				>
					Офисы Softline{' '}
					<MapArrowIcon
						className={cx('rotate', {
							rotateTrue: isCitiesVisible,
						})}
					/>
				</span>
			</div>

			<div
				ref={citiesRef}
				className={cx('map__cities', 'cities', 'hidden')}
			>
				<div className={cx('cities__column')}>
					<span className={cx('cities__item')}>Москва</span>
				</div>
				<div className={cx('cities__column')}>
					<span className={cx('cities__item')}>Центр</span>
					<span className={cx('cities__item')}>Воронеж</span>
					<span className={cx('cities__item')}>Ярославль</span>
					<span className={cx('cities__item')}>Белгород</span>
				</div>
				<div className={cx('cities__column')}>
					<span className={cx('cities__item')}>Северо-Запад</span>
					<span className={cx('cities__item')}>Санкт-Петербург</span>
					<span className={cx('cities__item')}>Калиниград</span>
				</div>
				<div className={cx('cities__column')}>
					<span className={cx('cities__item')}>Юг</span>
					<span className={cx('cities__item')}>Ростов-на-Дону</span>
					<span className={cx('cities__item')}>Краснодар</span>
					<span className={cx('cities__item')}>Волгоград</span>
				</div>
				<div className={cx('cities__column')}>
					<span className={cx('cities__item')}>Волга</span>
					<span className={cx('cities__item')}>Казань</span>
					<span className={cx('cities__item')}>Самара</span>
					<span className={cx('cities__item')}>Уфа</span>
					<span className={cx('cities__item')}>Оренбург</span>
					<span className={cx('cities__item')}>Нижний Новгород</span>
				</div>
				<div className={cx('cities__column')}>
					<span className={cx('cities__item')}>Урал</span>
					<span className={cx('cities__item')}>Екатеринбург</span>
					<span className={cx('cities__item')}>Челябинск</span>
					<span className={cx('cities__item')}>Пермь</span>
					<span className={cx('cities__item')}>Сургут</span>
					<span className={cx('cities__item')}>Тюмень</span>
					<span className={cx('cities__item')}>Ижевск</span>
				</div>
				<div className={cx('cities__column')}>
					<span className={cx('cities__item')}>Сибирь</span>
					<span className={cx('cities__item')}>Омск</span>
					<span className={cx('cities__item')}>Томск</span>
					<span className={cx('cities__item')}>Красноярск</span>
					<span className={cx('cities__item')}>Иркутск</span>
				</div>
				<div className={cx('cities__column')}>
					<span className={cx('cities__item')}>Дальний Восток</span>
					<span className={cx('cities__item')}>Хабаровск</span>
					<span className={cx('cities__item')}>Владивосток</span>
				</div>
			</div>
		</section>
	);
};
