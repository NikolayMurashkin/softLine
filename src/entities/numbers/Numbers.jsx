import classNames from 'classnames/bind';

import styles from './Numbers.module.scss';
import { NumbersItem } from '../../shared/ui/numbersItem/NumbersItem';

export const Numbers = () => {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('numbers')}>
			<NumbersItem
				className={cx('numbers__item')}
				number={'>30 лет'}
				label={'на IT-рынке'}
			/>
			<NumbersItem
				className={cx('numbers__item')}
				number={'4600'}
				label={'сотрудников в России'}
			/>
			<NumbersItem
				className={cx('numbers__item')}
				number={'25'}
				label={'городов России'}
			/>
			<NumbersItem
				className={cx('numbers__item')}
				number={'2000 +'}
				label={'разработчиков'}
			/>
			<NumbersItem
				className={cx('numbers__item')}
				number={'3000 +'}
				label={`сотрудников ежегодно \n проходят оценку и обучение`}
			/>
		</section>
	);
};
