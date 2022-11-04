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
							<h3>Marine Engine</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine Engine</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine Engine</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine Engine</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine Engine</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine Engine</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={productImg} />
						<div>
							<h3>Marine Engine</h3>
							<Link href={'/'}>View More</Link>
						</div>
					</li>
				</ul>
			</section>
		</>
	)
}

export default Home
