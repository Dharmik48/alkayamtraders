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
					'../../public/images/products/engine/',
					false,
					/\.(png|jpe?g|svg)$/
				)
			)
		)
	}, [])

	return (
		<>
			<Head>
				<title>Engine and Spare Products</title>
			</Head>
			<section>
				<div className='section_heading'>
					<h2 className='section_title'>Marine engine and spare</h2>
					<p className='section_desc'>
						Marine Engine and spare includes products like Engine, DG set,
						Generator, Linear, Head, Turbocharger, Governor, Shafting, Honing
						machine, etc.
					</p>
				</div>
				<ul className='products_list img_products'>
					{listOfImages.map((image, index) => (
						<li className='product' key={index}>
							<img
								loading='lazy'
								src={image.default.src}
								alt='Engine products'
							/>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default FireAndSafety
