import Head from 'next/head'
import { useState, useEffect } from 'react'

const Automation = () => {
	const importAll = r => {
		return r.keys().map(r)
	}

	const [listOfImages, setListOfImages] = useState([])

	useEffect(() => {
		setListOfImages(
			importAll(
				require.context(
					'../../public/images/products/automation/',
					false,
					/\.(png|jpe?g|svg)$/
				)
			)
		)
	}, [])

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
					{listOfImages.map((image, index) => (
						<li className='product' key={index}>
							<img
								loading='lazy'
								src={image.default.src}
								alt='Automation products'
							/>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default Automation
