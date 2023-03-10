import Head from 'next/head'
import { useState, useEffect } from 'react'

const FireAndSafety = () => {
	const importAll = r => {
		return r.keys().map(r)
	}

	const [listOfImages, setListOfImages] = useState([])

	useEffect(() => {
		setListOfImages(
			importAll(
				require.context(
					'../../public/images/products/hydraulic/',
					false,
					/\.(png|jpe?g|svg)$/
				)
			)
		)
	}, [])

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
					{listOfImages.map((image, index) => (
						<li className='product' key={index}>
							<img
								loading='lazy'
								src={image.default.src}
								alt='Hydraulic products'
							/>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default FireAndSafety
