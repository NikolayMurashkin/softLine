import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { Logo } from '../../assets/svg/Logo';

export const Header = () => {
	const cx = classNames.bind(styles);

	return (
		<header id='header' className={cx('header')}>
			<a href='#'>
				<Logo />
			</a>
			<nav className={cx('header__nav', 'nav')}>
				<ul className={cx('nav__links', 'links')}>
					<li className={cx('links__item')}>
						<a href='#'>Облачные решения</a>
					</li>
					<li className={cx('links__item')}>
						<a href='#'>Кибербезопасность</a>
					</li>
					<li className={cx('links__item')}>
						<a href='#'>Импортозамещение</a>
					</li>
					<li className={cx('links__item')}>
						<a href='#'>Цифровая трансформация</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
