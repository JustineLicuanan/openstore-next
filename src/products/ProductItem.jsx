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
	Backdrop,
	CircularProgress,
} from '@material-ui/core';
import {
	AddShoppingCart as AddShoppingCartIcon,
	ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';
import RelatedProducts from './RelatedProducts';

const useStyles = makeStyles((theme) => ({
	productGrid: {
		margin: theme.spacing(1, 0),
	},
	productImg: {
		width: '100%',
	},
	categoryChip: {
		textTransform: 'capitalize',
	},
	addCartBtn: {
		margin: theme.spacing(0, 1),
	},
	goBackBtn: {
		margin: theme.spacing(1),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

const ProductItem = ({ productData, relatedProductsData }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<Grid
				container
				justify='center'
				spacing={1}
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
					<Button
						color='primary'
						className={classes.addCartBtn}
						startIcon={<AddShoppingCartIcon />}
					>
						Add to Cart
					</Button>
					<Button variant='contained' color='primary'>
						Buy Now
					</Button>
				</Grid>
			</Grid>
			<Link href='/'>
				<Button
					color='primary'
					className={classes.goBackBtn}
					onClick={() => setOpen(true)}
					startIcon={<ArrowBackIcon />}
				>
					Home
				</Button>
			</Link>
			<Backdrop className={classes.backdrop} open={open}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<RelatedProducts
				productId={productData.id}
				relatedProductsData={relatedProductsData}
			/>
		</Container>
	);
};

export default ProductItem;
