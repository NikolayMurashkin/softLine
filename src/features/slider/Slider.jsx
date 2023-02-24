import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import classNames from 'classnames/bind';

import { SliderArrowPrev } from '../../assets/icons/SliderArrowPrev.jsx';
import { SliderArrowNext } from '../../assets/icons/SliderArrowNext.jsx';
import styles from './Slider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = () => {
	const cx = classNames.bind(styles);
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const [width, setWidth] = useState(window.innerWidth);
	const [isOpened, setIsOpened] = useState(false);

	const breakpoint = 480;

	const openHandle = () => {
		if (isOpened) {
			setIsOpened(false);
		} else {
			setIsOpened(true);
		}
	};

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<div className={cx('slider')}>
			<div className={cx('slider__header')}>
				<h2 className={cx('slider__title')}>Корпоративная жизнь</h2>
				{width > 480 ? (
					<div className={cx('slider__controls')}>
						<SliderArrowPrev
							className={cx('slider__arrow')}
							navigationPrevRef={navigationPrevRef}
						/>
						<SliderArrowNext
							className={cx('slider__arrow')}
							navigationPrevRef={navigationNextRef}
						/>
					</div>
				) : null}
			</div>
			<div className={cx('slider__swiper')}>
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={0}
					slidesPerView={1}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
						enabled: true,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl =
							navigationPrevRef.current;
						swiper.params.navigation.nextEl =
							navigationNextRef.current;
					}}
					pagination={{
						el: `.${cx('slider__pagination')}`,
						clickable: true,
						renderBullet: function (index, className) {
							return (
								'<span class="' + className + '">' + '</span>'
							);
						},
					}}
					loop={true}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					<SwiperSlide>
						<img src='images/slider/1.jpg' alt='softline' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='images/slider/2.jpg' alt='softline' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='images/slider/3.jpg' alt='softline' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='images/slider/4.jpg' alt='softline' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='images/slider/5.jpg' alt='softline' />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className={cx('slider__pagination')}>
				{/* <span className={cx('pagination__item')}></span> */}
			</div>
		</div>
	);
};
