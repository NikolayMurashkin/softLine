import classNames from 'classnames/bind';

import styles from './Banner.module.scss';

export const Banner = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('banner')}>
			<h1 className={cx('banner__text')}>
				Поставщик услуг цифровой{'\n'}трансформации{'\n'}и
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
	);
};
