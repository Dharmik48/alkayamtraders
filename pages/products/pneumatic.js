import Head from 'next/head'
import Image from 'next/image'
// import img1 from '../../public/images/products/fire1.jpeg'
// import img2 from '../../public/images/products/fire2.jpeg'

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
				{/* <ul className='products_list img_products'>
				<li className='product'>
				<Image src={img1} />
				</li>
				<li className='product'>
				<Image src={img2} />
				</li>
			</ul> */}
			</section>
		</>
	)
}

export default FireAndSafety
