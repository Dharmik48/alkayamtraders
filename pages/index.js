import Image from 'next/image'
import Link from 'next/link'
import productImg from '../public/product.jpg'

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
				<div className='hero_img'></div>
			</section>
			<section className='products' id='products'>
				<div className='section_heading'>
					<h2 className='section_title'>Products</h2>
					<p className='section_desc'>
						Explore the variety of products we offer
					</p>
				</div>
				<ul className='products_list'>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine automation</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine fair & safety</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine engine and spare</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine pneumatic</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine hydraulic pump & motor</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
				</ul>
			</section>
			<section className='about_us' id='about-us'>
				<div className='section_heading'>
					<h3 className='section_title'>About Us</h3>
					<p className='section_desc'>Who are we? Why choose us?</p>
				</div>
				<div className='text'>
					<p>
						Al Kayam Traders is active in the trading business for 5 years and
						we our client base is spread across the world including India, USA,
						Europe, UK, Saudi Arabia, Australia, Norway, Canada, Malaysia,
						Ukraine, South Africa, South America, UAE, New Zealand, Thailand,
						New York, Turkey, Russia, Singapore & Latin America.
					</p>
					<p>
						We always aim to provide best possible and reliable services to our
						clients. We have satisfied client base in ship management companies,
						ship owners, ship repairs, ship suppliers & traders.
					</p>
					<p>
						By choosing us you can be assured to get best services and products.
					</p>
				</div>
			</section>
		</>
	)
}

export default Home
