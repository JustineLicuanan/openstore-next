import Head from 'next/head';
import ProductItem from './components/ProductItem';

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

export const getServerSideProps = async ({ params }) => {
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
