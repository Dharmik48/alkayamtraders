import Head from 'next/head'
import Image from 'next/image'
import img1 from '../../public/images/products/fire/fire1.jpg'
import img2 from '../../public/images/products/fire/fire2.jpg'
import img3 from '../../public/images/products/fire/fire3.jpg'
import img4 from '../../public/images/products/fire/fire4.jpg'
import img5 from '../../public/images/products/fire/fire5.jpg'
import img6 from '../../public/images/products/fire/fire6.jpg'
import img7 from '../../public/images/products/fire/fire7.jpg'
import img8 from '../../public/images/products/fire/fire8.jpeg'
import img9 from '../../public/images/products/fire/fire9.jpeg'

const FireAndSafety = () => {
	return (
		<>
			<Head>
				<title>Fire and Safety Products</title>
			</Head>
			<section>
				<div className='section_heading'>
					<h2 className='section_title'>Marine Fire and Safety</h2>
					<p className='section_desc'>
						Marine Fire and Safety includes products like Safety helmet, Fire
						suit, Safety boat, Hose crimper, Fire alarm, Smoke detectors, Hit
						detectors, etc.
					</p>
				</div>
				<ul className='products_list img_products'>
					<li className='product'>
						<Image src={img2} alt='Fire and safety products' />
					</li>
					<li className='product'>
						<Image src={img3} alt='Fire and safety products' />
					</li>
					<li className='product'>
						<Image src={img4} alt='Fire and safety products' />
					</li>
					<li className='product'>
						<Image src={img5} alt='Fire and safety products' />
					</li>
					<li className='product'>
						<Image src={img6} alt='Fire and safety products' />
					</li>
					<li className='product'>
						<Image src={img7} alt='Fire and safety products' />
					</li>
					<li className='product'>
						<Image src={img8} alt='Fire and safety products' />
					</li>
					<li className='product'>
						<Image src={img1} alt='Fire and safety products' />
					</li>
					<li className='product'>
						<Image src={img9} alt='Fire and safety products' />
					</li>
				</ul>
			</section>
		</>
	)
}

export default FireAndSafety
