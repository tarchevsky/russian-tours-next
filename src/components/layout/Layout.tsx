import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

import FadeIn from '@/components/fadeIn/FadeIn'
import { LayoutProps } from '@/types'

// Supports weights 100-900
import '@fontsource-variable/raleway'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<FadeIn className='cont absolute w-full'>
				<Header />
			</FadeIn>

			{children}

			<FadeIn>
				<Footer />
			</FadeIn>
		</>
	)
}

export default Layout
