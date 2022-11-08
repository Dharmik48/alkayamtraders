import Head from 'next/head'
import Image from 'next/image'
import img1 from '../../public/images/products/hydraulic1.jpeg'
import img2 from '../../public/images/products/hydraulic2.jpeg'
import img3 from '../../public/images/products/hydraulic3.jpeg'
import img4 from '../../public/images/products/hydraulic4.jpeg'

const FireAndSafety = () => {
	return (
		<>
			<Head>
				<title>Marine Hydraulic Pump & Motor Products</title>
			</Head>
			<section>
				<div className='section_heading'>
					<h2 className='section_title'>Marine Hydraulic Pump & Motor</h2>
					<p className='section_desc'>
						Marine hydraulic pump & motor includes products like Rexroth,
						Mitsubishi pump, Servo motor.
					</p>
				</div>
				<ul className='products_list img_products'>
					<li className='product'>
						<Image src={img1} alt='Hydraulic Pumps and motors' />
					</li>
					<li className='product'>
						<Image src={img4} alt='Hydraulic Pumps' />
					</li>
					<li className='product'>
						<Image src={img3} alt='Rexroth hydraulic' />
					</li>
					<li className='product'>
						<Image src={img2} alt='Hydraulic Pumps and motors' />
					</li>
				</ul>
			</section>
		</>
	)
}

export default FireAndSafety
