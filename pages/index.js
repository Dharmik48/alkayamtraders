import Image from 'next/image'
import Link from 'next/link'
import fireImg from '../public/images/products/fire1.jpeg'
import autoImg from '../public/images/products/auto2.jpeg'
import engineeImg from '../public/images/products/engine1.jpeg'
import pneumaticImg from '../public/images/products/pneumatic1.jpeg'
import hydraulicImg from '../public/images/products/hydraulic2.jpeg'
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaInstagram,
	FaWhatsapp,
} from 'react-icons/fa'

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
						<Image src={fireImg} alt='Fire and safety products' />
						<div>
							<h3>Marine fair & safety</h3>
							<Link href={'/products/fire-and-safety'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={engineeImg} alt='Engine products' />
						<div>
							<h3>Marine engine and spare</h3>
							<Link href={'/products/engine'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={autoImg} alt='Automation products' />
						<div>
							<h3>Marine automation</h3>
							<Link href={'/products/automation'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={pneumaticImg} alt='Pneumatic products' />
						<div>
							<h3>Marine pneumatic</h3>
							<Link href={'/products/pneumatic'}>View More</Link>
						</div>
					</li>
					<li className='product'>
						<Image src={hydraulicImg} alt='hydraulic pump and motors' />
						<div>
							<h3>Marine hydraulic pump & motor</h3>
							<Link href={'/products/pump-and-motor'}>View More</Link>
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
					<em>
						&ldquo;We build relationships, not customers, That&apos;s why our
						customers keep coming back to us.&rdquo;
					</em>
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
			<section className='contact' id='contact'>
				<div className='section_heading'>
					<h3 className='section_title'>Contact Us</h3>
					<p className='section_desc'>
						Any question or remarks? Just write us a message!
					</p>
				</div>
				<div className='details'>
					<div className='details_heading'>
						<h4>Contact Information</h4>
						<p>Say something to start a live chat!</p>
					</div>
					<div className='info'>
						<div className='contact_info'>
							<div className='detail call'>
								<FaPhoneAlt />
								<p>
									+919409701340
									<br />
									+919824786152
								</p>
							</div>
							<div className='detail mail'>
								<FaEnvelope />
								<p>alkayamtraders92@gmail.com</p>
							</div>
							<div className='detail address'>
								<FaMapMarkerAlt />
								<p>
									B-57 Rasheshyam complex, Waghawadi road, Bhavnagar-364001,
									Gujarat.
								</p>
							</div>
						</div>
						<div className='socials'>
							<Link
								href='https://www.instagram.com/marinemarket_/'
								target='_blank'
							>
								<FaInstagram />
							</Link>
							<Link href={'https://wa.me/919409701340'} target='_blank'>
								<FaWhatsapp />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
