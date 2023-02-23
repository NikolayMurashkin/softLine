import classNames from 'classnames/bind';

import styles from './Banner.module.scss';

export const Banner = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('banner')}>
			<picture className={cx('banner__img')}>
				<source
					srcSet='/images/bg-290x300.jpg'
					media='(max-width: 320px)'
				/>
				<source
					srcSet='/images/bg-1250x600.jpg'
					media='min-width: 321px)'
				/>

				<img
					src='/images/bg-1250x600.jpg'
					alt='Поставщик услуг цифровой трансформации и кибербезопасности'
				></img>
			</picture>
			<div className={cx('banner__cta')}>
				<h1 className={cx('banner__text')}>
					Поставщик услуг цифровой трансформации <br /> и
					кибербезопасности
				</h1>
				<a
					href='https://softline.ru'
					target={'_blank'}
					className={cx('banner__button')}
				>
					На сайт
				</a>
			</div>
		</div>
	);
};
