import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import ProductCard from '../../components/ProductCard';

const useStyles = makeStyles((theme) => ({
	relatedProductsLabel: {
		marginTop: theme.spacing(3),
	},
}));

const RelatedProducts = ({ productId, relatedProductsData }) => {
	const classes = useStyles();

	return (
		<>
			<Typography
				variant='h4'
				component='h3'
				className={classes.relatedProductsLabel}
			>
				Related Products
			</Typography>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='flex-start'
				flexWrap='wrap'
				my={1}
			>
				{relatedProductsData.map((product) => {
					if (product.id !== productId)
						return <ProductCard product={product} key={product.id} />;
				})}
			</Box>
		</>
	);
};

export default RelatedProducts;
