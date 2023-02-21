import classNames from 'classnames/bind';

import styles from './About.module.scss';

export const About = () => {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('about')}>
			<p className={cx('about__text')}>
				<strong>Softline</strong> – ведущий поставщик IT-решений и сервисов.*
				Мы предлагаем комплексные IT-решения, облака, программное
				и аппаратное обеспечение, решения по цифровой трансформации
				и кибербезопасности, а также широкий спектр IT-услуг.
			</p>
		</section>
	);
};
