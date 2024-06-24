import { HeroProps } from '@/types'
import styles from './Hero.module.scss'
import cn from 'clsx'

const Hero = ({ title, buttonText, alt, subtitle, src }: HeroProps) => {
	return (
		<main className='hero h-[100svh]'>
			<div className='relative w-full h-full hero-content max-w-full'>
				<img
					className={cn(
						styles.img,
						'absolute w-full h-full object-cover opacity-55'
					)}
					src={src}
					alt={alt}
					loading='lazy'
				/>
				<div
					className={cn(
						styles.hero,
						'md:relative lg:ml-[-100px] z-10 mix-blend-difference'
					)}
				>
					<h1 className='text-5xl font-extrabold'>{title}</h1>
					{subtitle ? <>{subtitle}</> : null}
					{buttonText ? (
						<button
							className={cn(
								styles.button,
								'btn-md w-full md:btn-wide mt-3 tracking-[4px] weight-[300] font-bold'
							)}
						>
							{buttonText}
						</button>
					) : null}
				</div>
			</div>
		</main>
	)
}

export default Hero
