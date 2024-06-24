import { NextPage } from 'next'
import Hero from '@/components/hero/Hero'
import Accordion from '@/components/accordion/Accordion'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import CarouselBeyond from '@/components/carouselBeyond/CarouselBeyond'
import Carousel from '@/components/carousel/Carousel'
import { MaterialSlider } from '@/components/materialSlider/MaterialSlider'
import Quiz from '@/components/quiz/Quiz'
import Masonry from '@/components/masonry/Masonry'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<FadeIn>
				<Hero
					src='/mountains.jpg'
					alt='Альт картинки'
					title='Путешествия по самым ярким местам страны'
					subtitle={
						<p>
							Подбор отелей, программы мероприятий, передвижения.
							<br /> От Москвы до Териберки. От Ростова - на - Дону до Камчатки
						</p>
					}
					buttonText='Распланировать тур'
				/>
			</FadeIn>
			{/*<FadeIn className='cont'>*/}
			{/*	Алтай, Териберка, Переславль-Залесский, Санкт-Петербург, Камчатка,*/}
			{/*	Казань, Дагестан, Сергиев-Посад*/}
			{/*</FadeIn>*/}
			{/*<FadeIn className='cont'>*/}
			{/*	<Quiz />*/}
			{/*</FadeIn>*/}
			<FadeIn className='cont'>
				<Masonry />
			</FadeIn>
		</>
	)
}

export default HomePage
