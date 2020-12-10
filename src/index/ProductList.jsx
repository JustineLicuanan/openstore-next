import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Tabs, Tab } from '@material-ui/core';
import ProductCard from '../../components/ProductCard';

const useStyles = makeStyles((theme) => ({
	productsLabel: {
		marginTop: theme.spacing(1),
	},
}));

const ProductList = ({ productsData, productCategories }) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor='primary'
				textColor='primary'
				variant='scrollable'
				scrollButtons='on'
				aria-label='scrollable auto tabs'
			>
				<Tab label='All' />
				{productCategories.map((category, i) => (
					<Tab label={category} key={i} />
				))}
			</Tabs>
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
