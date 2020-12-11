import { Box } from '@material-ui/core';
import ProductCard from './ProductCard';

const ProductList = ({ productsData }) => {
	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='flex-start'
			flexWrap='wrap'
		>
			{productsData.map((product) => (
				<ProductCard product={product} key={product.id} />
			))}
		</Box>
	);
};

export default ProductList;
