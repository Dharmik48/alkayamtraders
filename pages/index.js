import Link from 'next/link'

const Home = () => {
	return (
		<>
			<section className='hero' id='hero'>
				<h1>
					Al Kayam <br />
					Traders
				</h1>
				<p>
					Al Kayam Traders provides the best services and high quality products
					to the clients and is trusted by satisfied clients from all of the
					world for more than 5 years.
				</p>
				<a href={'#products'} className='btn'>
					Explore Products
				</a>
				<div className='hero_img'>
					{/* <img src='/ship.jpg' alt='Cargo ship' /> */}
				</div>
			</section>
		</>
	)
}

export default Home
