import { useState } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	IconButton,
	Chip,
	Backdrop,
	CircularProgress,
} from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	productCard: {
		maxWidth: 345,
		margin: theme.spacing(1),
	},
	categoryChip: {
		textTransform: 'capitalize',
	},
	addCartBtn: {
		margin: theme.spacing(0, 1),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

const ProductCard = ({ product }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	return (
		<Card className={classes.productCard}>
			<Link href={`/products/${product.id}`}>
				<CardActionArea onClick={() => setOpen(true)}>
					<CardMedia
						component='img'
						alt={product.title}
						height='140'
						image={product.image}
						title={product.title}
					/>
					<CardContent>
						<Typography variant='h5' component='h2'>
							{product.title.trim().length > 52
								? `${product.title.trim().slice(0, 52).trim()}...`
								: product.title.trim()}
						</Typography>
						<Typography
							gutterBottom
							variant='h6'
							component='h3'
							color='secondary'
						>
							{`$${product.price}`}
						</Typography>
						<Typography
							gutterBottom
							variant='body2'
							color='textSecondary'
							component='p'
						>
							{product.description.trim().length > 155
								? `${product.description.trim().slice(0, 155).trim()}...`
								: product.description.trim()}
						</Typography>
						<Chip
							label={product.category}
							clickable
							color='secondary'
							variant='outlined'
							className={classes.categoryChip}
						/>
					</CardContent>
				</CardActionArea>
			</Link>
			<Backdrop className={classes.backdrop} open={open}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<CardActions>
				<IconButton color='primary' className={classes.addCartBtn}>
					<AddShoppingCartIcon />
				</IconButton>
				<Button color='primary'>Buy Now</Button>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
