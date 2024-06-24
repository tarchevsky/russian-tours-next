import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header
			className={cn(
				styles.header,
				'relative z-10 flex justify-between md:justify-between items-center py-4'
			)}
		>
			<Link href='/' className={cn(styles.logo)}>
				<span className='font-bold'>Туры </span>
				<br />
				по России
			</Link>
			<nav
				className={cn(
					'fixed md:static z-10 w-full h-full md:w-auto md:h-auto end-0 bottom-0 -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 transition-all duration-300 ease-out'
				)}
			>
				<ul className='menu flex-nowrap gap-5 md:menu-horizontal'>
					<li className={cn('block text-center')}>
						<Link className='px-[10px] btn btn-ghost font-normal' href='/'>
							Главная
						</Link>
					</li>
					<li className={cn('block text-center')}>
						<Link className='px-[10px] btn btn-ghost font-normal' href='/about'>
							О нас
						</Link>
					</li>
					<li className={cn('block text-center')}>
						<Link
							className='px-[10px] btn btn-ghost font-normal'
							href='/documentation'
						>
							Фото
						</Link>
					</li>
					<li className={cn('block text-center')}>
						<Link
							className='px-[10px] btn btn-ghost font-normal'
							href='/pricing'
						>
							Цены
						</Link>
					</li>
					<li className={cn('block text-center')}>
						<Link
							className='px-[10px] btn btn-ghost font-normal'
							href='/contacts'
						>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
