import Head from 'next/head';
import ProductList from '../src/index/ProductList';

const Home = ({ productsData }) => {
	return (
		<>
			<Head>
				<title>OpenStore | Your Favorite Store in the Web</title>
			</Head>
			<ProductList productsData={productsData} />
		</>
	);
};

export const getServerSideProps = async () => {
	try {
		const res = await fetch('https://fakestoreapi.com/products');
		const productsData = await res.json();
		return { props: { productsData } };
	} catch (err) {
		return { notFound: true };
	}
};

export default Home;
