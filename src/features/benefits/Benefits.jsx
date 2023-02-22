import classNames from 'classnames/bind';

import styles from './Benefits.module.scss';
import { BenefitsIcon } from '../../entities/benefitsIcon/BenefitsIcon';
import { DmsIcon } from '../../assets/icons/DmsIcon';
import { BirthdayIcon } from '../../assets/icons/BirthdayIcon';
import { MobileIcon } from '../../assets/icons/MobileIcon';
import { SportIcon } from '../../assets/icons/SportIcon';
import { LtiIcon } from '../../assets/icons/LtiIcon';
import { PrinterIcon } from '../../assets/icons/PrinterIcon';
import { MortgageIcon } from '../../assets/icons/MortgageIcon';

export const Benefits = () => {
	const cx = classNames.bind(styles);
	return (
		<section className={cx('benefits')}>
			<div className={cx('benefits__top')}>
				<h2 className={cx('benefits__title')}>Компенсационный пакет</h2>
				<div className={cx('benefits__icons')}>
					<BenefitsIcon
						label={'ДМС'}
						icon={<DmsIcon className={cx('benefits__icon')} />}
					/>
					<BenefitsIcon
						label={'Выходной \n в день рождения'}
						icon={<BirthdayIcon className={cx('benefits__icon')} />}
					/>
					<BenefitsIcon
						label={'Корпоративная \n мобильная связь'}
						icon={<MobileIcon className={cx('benefits__icon')} />}
					/>
					<BenefitsIcon
						label={'Корпоративные скидки \n на спорт'}
						icon={<SportIcon className={cx('benefits__icon')} />}
					/>
					<BenefitsIcon
						label={'LTI'}
						icon={<LtiIcon className={cx('benefits__icon')} />}
					/>
				</div>
			</div>
			<hr />
			<div className={cx('benefits__bottom')}>
				<h3 className={cx('benefits__subtitle')}>
					Программа дополнительной мотивации {'\n'}{' '}
					<strong>доплата 12% от суммы</strong>
				</h3>
				<div className={cx('benefits__icons')}>
					<BenefitsIcon
						label={'Оргтехники'}
						icon={<PrinterIcon className={cx('benefits__icon')} />}
					/>
					<BenefitsIcon
						label={'ДМС'}
						icon={<DmsIcon className={cx('benefits__icon')} />}
					/>
					<BenefitsIcon
						label={'Ипотеки'}
						icon={<MortgageIcon className={cx('benefits__icon')} />}
					/>
				</div>
			</div>
		</section>
	);
};
