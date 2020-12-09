import { useState } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
	Container,
	Grid,
	Box,
	Typography,
	Chip,
	Button,
	IconButton,
	Backdrop,
	CircularProgress,
} from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';
import ProductCard from '../../../../components/ProductCard';

const useStyles = makeStyles((theme) => ({
	productGrid: {
		margin: theme.spacing(1),
	},
	productImg: {
		width: '100%',
	},
	categoryChip: {
		textTransform: 'capitalize',
	},
	addCartBtn: {
		margin: `0 ${theme.spacing(1)}`,
	},
	goBackBtn: {
		margin: theme.spacing(1),
	},
	relatedProductsLabel: {
		marginTop: theme.spacing(3),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

const ProductItem = ({ productData, relatedProductsData }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<Container>
			<Grid
				container
				justify='center'
				spacing={3}
				className={classes.productGrid}
			>
				<Grid item xs={12} sm={5}>
					<Box maxWidth={345} margin='0 auto'>
						<img
							src={productData.image}
							alt={productData.title}
							className={classes.productImg}
						/>
					</Box>
				</Grid>
				<Grid item xs={12} sm={7}>
					<Typography variant='h4' component='h1'>
						{productData.title.trim()}
					</Typography>
					<Typography
						gutterBottom
						variant='h5'
						component='h2'
						color='secondary'
					>
						{`$${productData.price}`}
					</Typography>
					<Typography
						gutterBottom
						variant='body1'
						color='textPrimary'
						component='p'
					>
						{productData.description.trim()}
					</Typography>
					<Box mb={1}>
						<Chip
							label={productData.category}
							clickable
							color='secondary'
							variant='outlined'
							className={classes.categoryChip}
						/>
					</Box>
					<IconButton color='primary' className={classes.addCartBtn}>
						<AddShoppingCartIcon />
					</IconButton>
					<Button size='small' color='primary'>
						Buy Now
					</Button>
				</Grid>
			</Grid>
			<Link href='/'>
				<Button
					variant='contained'
					color='primary'
					className={classes.goBackBtn}
					onClick={handleToggle}
				>
					Go back
				</Button>
			</Link>
			<Backdrop className={classes.backdrop} open={open}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<Typography
				variant='h4'
				component='h3'
				className={classes.relatedProductsLabel}
			>
				Related Products
			</Typography>
			<Grid
				container
				justify='center'
				spacing={3}
				className={classes.productGrid}
			>
				{relatedProductsData.map((product) => {
					if (product.id !== productData.id)
						return (
							<Grid item xs={12} sm={6} md={4} key={product.id}>
								<ProductCard product={product} key={product.id} />
							</Grid>
						);
				})}
			</Grid>
		</Container>
	);
};

export default ProductItem;
