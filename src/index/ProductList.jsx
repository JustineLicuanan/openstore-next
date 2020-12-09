import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';
import ProductCard from '../../components/ProductCard';

const useStyles = makeStyles((theme) => ({
	productCard: {
		maxWidth: 345,
		margin: theme.spacing(1),
	},
	categoryChip: {
		textTransform: 'capitalize',
	},
	addCartBtn: {
		margin: `0 ${theme.spacing(1)}`,
	},
	productsLabel: {
		marginTop: theme.spacing(1),
	},
}));

const ProductList = ({ productsData }) => {
	const classes = useStyles();

	return (
		<Container>
			<Typography
				variant='h4'
				component='h1'
				align='center'
				className={classes.productsLabel}
			>
				All Products
			</Typography>
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
		</Container>
	);
};

export default ProductList;
