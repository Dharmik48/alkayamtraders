import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				{/* Primary Meta Tags */}
				<title>Al Kayam Traders</title>
				<meta name='title' content='Al Kayam Traders' />
				<meta
					name='description'
					content='Al Kayam Traders provides clients with the best services and high-quality marine products and has been trusted by satisfied clients worldwide for more than 5 years.'
				/>

				{/* Open Graph / Facebook */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://alkayamtraders.vercel.app/' />
				<meta property='og:title' content='Al Kayam Traders' />
				<meta
					property='og:description'
					content='Al Kayam Traders provides clients with the best services and high-quality marine products and has been trusted by satisfied clients worldwide for more than 5 years.'
				/>
				<meta property='og:image' content='https://i.imgur.com/rMyN59p.jpg' />

				{/* Twitter  */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://alkayamtraders.vercel.app/'
				/>
				<meta property='twitter:title' content='Al Kayam Traders' />
				<meta
					property='twitter:description'
					content='Al Kayam Traders provides clients with the best services and high-quality marine products and has been trusted by satisfied clients worldwide for more than 5 years.'
				/>
				<meta
					property='twitter:image'
					content='https://i.imgur.com/rMyN59p.jpg'
				/>

				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
