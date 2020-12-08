import Head from 'next/head';
import ProductList from '../src/index/ProductList';

const Home = ({ productData }) => {
	return (
		<>
			<Head>
				<title>OpenStore | Your Favorite Store in the Web</title>
			</Head>
			<ProductList productData={productData} />
		</>
	);
};

export const getServerSideProps = async () => {
	try {
		const res = await fetch('https://fakestoreapi.com/products');
		const productData = await res.json();
		return { props: { productData } };
	} catch (err) {
		return { notFound: true };
	}
};

export default Home;
