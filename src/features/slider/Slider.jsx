import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import classNames from 'classnames/bind';

import styles from './Slider.modules.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = () => {
	const cx = classNames.bind(styles);
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	return (
		<div className={cx('slider')}>
			<div className={cx('slider__header')}>
				<h2 className={cx('slider__title')}>Корпоративная жизнь</h2>
				<div className={cx('slider__controls')}>
					<span ref={navigationPrevRef}>prev</span>
					<span ref={navigationNextRef}>next</span>
				</div>
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
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					<SwiperSlide>
						<img src='images/slider/1.jpg' alt='' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='images/slider/2.jpg' alt='' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='images/slider/3.jpg' alt='' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='images/slider/4.jpg' alt='' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='images/slider/5.jpg' alt='' />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
