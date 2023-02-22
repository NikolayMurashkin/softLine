import classNames from 'classnames/bind';

import styles from './Mission.module.scss';
import Pattern from '../../assets/svg/Pattern';

export const Mission = () => {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('mission')}>
			<div className={cx('mission__patterns')}>
				<Pattern />
				<Pattern right />
			</div>
			<div className={cx('mission__body')}>
				<h2 className={cx('mission__title')}>Миссия Softline</h2>
				<p className={cx('mission__text')}>
					Мы помогаем организациям трансформироваться, работать
					эффективно и безопасно {'\n'} в условиях цифровой экономики.
				</p>
			</div>
		</section>
	);
};
