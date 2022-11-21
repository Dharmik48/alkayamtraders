import Image from 'next/image'
import Head from 'next/head'
import img1 from '../../public/images/products/automation/auto1.jpg'
import img2 from '../../public/images/products/automation/auto2.jpeg'
import img3 from '../../public/images/products/automation/auto3.jpeg'
import img4 from '../../public/images/products/automation/auto4.jpeg'
import img5 from '../../public/images/products/automation/auto5.jpeg'
import img6 from '../../public/images/products/automation/auto6.jpeg'
import img7 from '../../public/images/products/automation/auto7.jpeg'

const Automation = () => {
	return (
		<>
			<Head>
				<title>Automation Products</title>
			</Head>
			<section>
				<div className='section_heading'>
					<h2 className='section_title'>Marine Automation</h2>
					<p className='section_desc'>
						Marine Automation includes products like PLC, HMI, Module, Drive,
						Relay, Timer
					</p>
				</div>
				<ul className='products_list img_products'>
					<li className='product'>
						<Image src={img1} alt='Automation products' />
					</li>
					<li className='product'>
						<Image src={img2} alt='Automation products' />
					</li>
					<li className='product'>
						<Image src={img3} alt='Automation products' />
					</li>
					<li className='product'>
						<Image src={img4} alt='Automation products' />
					</li>
					<li className='product'>
						<Image src={img5} alt='Automation products' />
					</li>
					<li className='product'>
						<Image src={img6} alt='Automation products' />
					</li>
					<li className='product'>
						<Image src={img7} alt='Automation products' />
					</li>
				</ul>
			</section>
		</>
	)
}

export default Automation
