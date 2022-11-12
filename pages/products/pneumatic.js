import Head from 'next/head'
import Image from 'next/image'
import img1 from '../../public/images/products/pneumatic/pneumatic1.jpg'
import img2 from '../../public/images/products/pneumatic/pneumatic2.jpg'
import img3 from '../../public/images/products/pneumatic/pneumatic3.jpg'
import img4 from '../../public/images/products/pneumatic/pneumatic4.jpg'
import img5 from '../../public/images/products/pneumatic/pneumatic5.jpeg'

const FireAndSafety = () => {
	return (
		<>
			<Head>
				<title>Pneumatic Products</title>
			</Head>
			<section>
				<div className='section_heading'>
					<h2 className='section_title'>Marine Pneumatic</h2>
					<p className='section_desc'>
						Marine Pneumatic includes products like Rexroth valve, Vickers
						valve, Denfoss Air valve, Rig products, Oil tep, Positioner.
					</p>
				</div>
				<ul className='products_list img_products'>
					<li className='product'>
						<Image src={img1} alt='Pneumatic products' />
					</li>
					<li className='product'>
						<Image src={img2} alt='Pneumatic products' />
					</li>
					<li className='product'>
						<Image src={img5} alt='Pneumatic products' />
					</li>
					<li className='product'>
						<Image src={img4} alt='Pneumatic products' />
					</li>
					<li className='product'>
						<Image src={img3} alt='Pneumatic products' />
					</li>
				</ul>
			</section>
		</>
	)
}

export default FireAndSafety
