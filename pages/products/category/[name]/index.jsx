import Head from 'next/head';
import { Container } from '@material-ui/core';
import CategoryTabs from '../../../../components/CategoryTabs';
import ProductList from '../../../../components/ProductList';

const Category = ({
	currentCategory,
	productCategories,
	productsByCategory,
}) => {
	return (
		<>
			<Head>
				<title>
					Category:{' '}
					{productCategories[currentCategory - 1].replace(/\w\S*/g, (w) =>
						w.replace(/^\w/, (c) => c.toUpperCase())
					)}{' '}
					| OpenStore
				</title>
			</Head>
			<Container>
				<CategoryTabs
					currentCategory={currentCategory}
					productCategories={productCategories}
				/>
				<ProductList productsData={productsByCategory} />
			</Container>
		</>
	);
};

export const getStaticPaths = async () => {
	const res = await fetch('https://fakestoreapi.com/products');
	const data = await res.json();
	const productCategories = [];

	data.forEach((product) => {
		if (!productCategories.includes(product.category))
			productCategories.push(product.category);
	});
	return {
		paths: productCategories.map((name) => ({
			params: { name: !name.includes(' ') ? name : name.split(' ').join('-') },
		})),
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const name = !params.name.includes('-')
		? params.name
		: params.name.split('-').join(' ');
	try {
		const res = await fetch(
			`https://fakestoreapi.com/products/category/${name}`
		);
		const productsByCategory = await res.json();
		const resp = await fetch('https://fakestoreapi.com/products');
		const productsData = await resp.json();
		const productCategories = [];

		productsData.forEach((product) => {
			if (!productCategories.includes(product.category))
				productCategories.push(product.category);
		});
		return {
			props: {
				currentCategory: productCategories.indexOf(name) + 1,
				productCategories,
				productsByCategory,
			},
		};
	} catch (err) {
		return { notFound: true };
	}
};

export default Category;
