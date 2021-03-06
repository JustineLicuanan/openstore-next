import Head from 'next/head';
import { Container } from '@material-ui/core';
import ProductList from '../components/ProductList';
import CategoryTabs from '../components/CategoryTabs';

const Home = ({ productsData, productCategories }) => {
	return (
		<>
			<Head>
				<title>OpenStore | Your Favorite Store in the Web</title>
			</Head>
			<Container>
				<CategoryTabs
					currentCategory={0}
					productCategories={productCategories}
				/>
				<ProductList productsData={productsData} />
			</Container>
		</>
	);
};

export const getStaticProps = async () => {
	try {
		const res = await fetch('https://fakestoreapi.com/products');
		const productsData = await res.json();
		const productCategories = [];

		productsData.forEach((product) => {
			if (!productCategories.includes(product.category))
				productCategories.push(product.category);
		});
		return {
			props: {
				productsData,
				productCategories,
			},
		};
	} catch (err) {
		return { notFound: true };
	}
};

export default Home;
