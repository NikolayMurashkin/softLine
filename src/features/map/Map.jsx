import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import styles from './Map.module.scss';
import { MapArrowIcon } from '../../assets/icons/MapArrowIcon';
import { MapSvg } from '../../assets/svg/MapSvg';

export const Map = () => {
	const cx = classNames.bind(styles);
	const isCitylistVisible = false;
	const [currentTab, setCurrentTab] = useState('all');
	const citylistRef = useRef(null);
	const linksRef = useRef(null);

	const handleCitylistVisibility = () => {
		citylistRef.current.classList.toggle(cx('hidden'));
		linksRef.current.classList.toggle(cx('map__links_blur'));
	};

	const handleTabChange = (tab) => {
		console.log(tab);
		setCurrentTab(tab);
	};

	return (
		<section className={cx('map')}>
			<div className={cx('map__header')}>
				<span
					className={cx('map__dropdown')}
					onClick={handleCitylistVisibility}
				>
					Офисы Softline{' '}
					<MapArrowIcon
						className={cx('rotate', {
							rotateTrue: isCitylistVisible,
						})}
					/>
				</span>
				<ul ref={linksRef} className={cx('map__links')}>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'all'}
						className={cx('map__link', {
							map__link_active: currentTab === 'all',
						})}
					>
						Все
					</li>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'msk'}
						className={cx('map__link', {
							map__link_active: currentTab === 'msk',
						})}
					>
						Москва
					</li>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'center'}
						className={cx('map__link', {
							map__link_active: currentTab === 'center',
						})}
					>
						Центр
					</li>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'nw'}
						className={cx('map__link', {
							map__link_active: currentTab === 'nw',
						})}
					>
						Северо-Запад
					</li>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'south'}
						className={cx('map__link', {
							map__link_active: currentTab === 'south',
						})}
					>
						Юг
					</li>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'volga'}
						className={cx('map__link', {
							map__link_active: currentTab === 'volga',
						})}
					>
						Волга
					</li>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'ural'}
						className={cx('map__link', {
							map__link_active: currentTab === 'ural',
						})}
					>
						Урал
					</li>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'siberia'}
						className={cx('map__link', {
							map__link_active: currentTab === 'siberia',
						})}
					>
						Сибирь
					</li>
					<li
						onClick={(e) => handleTabChange(e.target.dataset.tab)}
						data-tab={'farEast'}
						className={cx('map__link', {
							map__link_active: currentTab === 'farEast',
						})}
					>
						Дальний восток
					</li>
				</ul>
			</div>
			<div className={cx('map__content')}>
				<MapSvg region={currentTab} />
				<div className={cx('map__cities', 'cities')}>
					{currentTab === 'all' && (
						<div className={cx('cities__wrapper')}>
							<div
								className={cx(
									'cities__city',
									'cities__city_yaroslavl'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Ярославль
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_voronezh'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Воронеж
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_belgorod'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Белгород
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_msk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Москва
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_spb'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Санкт-Петербург
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_kaliningrad'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Калиниград
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_rostov'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Ростов-на-Дону
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_volgograd'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Волгоград
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_krasnodar'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Краснодар
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_novgorod'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Н. Новгород
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_kazan'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Казань
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_ufa'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Уфа
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_samara'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Самара
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_orenburg'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Оренбург
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_izhevsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Ижевск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_perm'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Пермь
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_surgut'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Сургут
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_ekb'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Екатеринбург
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_chelyabinsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Челябинск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_tyumen'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Тюмень
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_omsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Омск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_nsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Новосибирск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_tomsk'
								)}
							>
								Томск
								<span className={cx('cities__city_dot')}></span>
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_krasnoyarsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Красноярск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_irkutsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Иркутск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_habarovsk'
								)}
							>
								Хабаровск
								<span className={cx('cities__city_dot')}></span>
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_vladivostok'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Владивосток
							</div>
						</div>
					)}
					{currentTab === 'msk' && (
						<div className={cx('cities__city', 'cities__city_msk')}>
							<span className={cx('cities__city_dot')}></span>
							Москва
						</div>
					)}
					{currentTab === 'center' && (
						<div className={cx('cities__wrapper')}>
							<div
								className={cx(
									'cities__city',
									'cities__city_yaroslavl'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Ярославль
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_voronezh'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Воронеж
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_belgorod'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Белгород
							</div>
						</div>
					)}
					{currentTab === 'nw' && (
						<div className={cx('cities__wrapper')}>
							<div
								className={cx(
									'cities__city',
									'cities__city_spb'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Санкт-Петербург
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_kaliningrad'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Калиниград
							</div>
						</div>
					)}
					{currentTab === 'south' && (
						<div className={cx('cities__wrapper')}>
							<div
								className={cx(
									'cities__city',
									'cities__city_rostov'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Ростов-на-Дону
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_volgograd'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Волгоград
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_krasnodar'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Краснодар
							</div>
						</div>
					)}
					{currentTab === 'volga' && (
						<div className={cx('cities__wrapper')}>
							<div
								className={cx(
									'cities__city',
									'cities__city_novgorod'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Н. Новгород
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_kazan'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Казань
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_ufa'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Уфа
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_samara'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Самара
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_orenburg'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Оренбург
							</div>
						</div>
					)}
					{currentTab === 'ural' && (
						<div className={cx('cities__wrapper')}>
							<div
								className={cx(
									'cities__city',
									'cities__city_izhevsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Ижевск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_perm'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Пермь
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_surgut'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Сургут
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_ekb'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Екатеринбург
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_chelyabinsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Челябинск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_tyumen'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Тюмень
							</div>
						</div>
					)}
					{currentTab === 'siberia' && (
						<div className={cx('cities__wrapper')}>
							<div
								className={cx(
									'cities__city',
									'cities__city_omsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Омск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_nsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Новосибирск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_tomsk'
								)}
							>
								Томск
								<span className={cx('cities__city_dot')}></span>
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_krasnoyarsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Красноярск
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_irkutsk'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Иркутск
							</div>
						</div>
					)}
					{currentTab === 'farEast' && (
						<div className={cx('cities__wrapper')}>
							<div
								className={cx(
									'cities__city',
									'cities__city_habarovsk'
								)}
							>
								Хабаровск
								<span className={cx('cities__city_dot')}></span>
							</div>
							<div
								className={cx(
									'cities__city',
									'cities__city_vladivostok'
								)}
							>
								<span className={cx('cities__city_dot')}></span>
								Владивосток
							</div>
						</div>
					)}
				</div>
			</div>
			<div
				ref={citylistRef}
				className={cx('map__city-list', 'city-list', 'hidden')}
			>
				<div className={cx('city-list__column')}>
					<span className={cx('city-list__item')}>Москва</span>
				</div>
				<div className={cx('city-list__column')}>
					<span className={cx('city-list__item')}>Центр</span>
					<span className={cx('city-list__item')}>Воронеж</span>
					<span className={cx('city-list__item')}>Ярославль</span>
					<span className={cx('city-list__item')}>Белгород</span>
				</div>
				<div className={cx('city-list__column')}>
					<span className={cx('city-list__item')}>Северо-Запад</span>
					<span className={cx('city-list__item')}>
						Санкт-Петербург
					</span>
					<span className={cx('city-list__item')}>Калиниград</span>
				</div>
				<div className={cx('city-list__column')}>
					<span className={cx('city-list__item')}>Юг</span>
					<span className={cx('city-list__item')}>
						Ростов-на-Дону
					</span>
					<span className={cx('city-list__item')}>Краснодар</span>
					<span className={cx('city-list__item')}>Волгоград</span>
				</div>
				<div className={cx('city-list__column')}>
					<span className={cx('city-list__item')}>Волга</span>
					<span className={cx('city-list__item')}>Казань</span>
					<span className={cx('city-list__item')}>Самара</span>
					<span className={cx('city-list__item')}>Уфа</span>
					<span className={cx('city-list__item')}>Оренбург</span>
					<span className={cx('city-list__item')}>
						Нижний Новгород
					</span>
				</div>
				<div className={cx('city-list__column')}>
					<span className={cx('city-list__item')}>Урал</span>
					<span className={cx('city-list__item')}>Екатеринбург</span>
					<span className={cx('city-list__item')}>Челябинск</span>
					<span className={cx('city-list__item')}>Пермь</span>
					<span className={cx('city-list__item')}>Сургут</span>
					<span className={cx('city-list__item')}>Тюмень</span>
					<span className={cx('city-list__item')}>Ижевск</span>
				</div>
				<div className={cx('city-list__column')}>
					<span className={cx('city-list__item')}>Сибирь</span>
					<span className={cx('city-list__item')}>Омск</span>
					<span className={cx('city-list__item')}>Томск</span>
					<span className={cx('city-list__item')}>Красноярск</span>
					<span className={cx('city-list__item')}>Иркутск</span>
					<span className={cx('city-list__item')}>Новосибирск</span>
				</div>
				<div className={cx('city-list__column')}>
					<span className={cx('city-list__item')}>
						Дальний Восток
					</span>
					<span className={cx('city-list__item')}>Хабаровск</span>
					<span className={cx('city-list__item')}>Владивосток</span>
				</div>
			</div>
		</section>
	);
};
