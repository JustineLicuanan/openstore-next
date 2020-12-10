import Head from 'next/head';
import ProductItem from '../../../src/products/ProductItem';

const Products = ({ productData, relatedProductsData }) => {
	return (
		<>
			<Head>
				<title>{productData.title} | OpenStore</title>
			</Head>
			<ProductItem
				productData={productData}
				relatedProductsData={relatedProductsData}
			/>
		</>
	);
};

export const getStaticPaths = async () => {
	const res = await fetch('https://fakestoreapi.com/products');
	const productsData = await res.json();
	return {
		paths: productsData.map(({ id }) => ({ params: { id: id.toString() } })),
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	try {
		const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
		const productData = await res.json();
		const resp = await fetch(
			`https://fakestoreapi.com/products/category/${productData.category}`
		);
		const relatedProductsData = await resp.json();
		return {
			props: {
				productData,
				relatedProductsData,
			},
		};
	} catch (err) {
		return { notFound: true };
	}
};

export default Products;
