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
}));

const ProductCard = ({ product }) => {
	const classes = useStyles();

	return (
		<Card className={classes.productCard}>
			<Link href={`/products/${product.id}`}>
				<CardActionArea>
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
						<Link
							href={`/products/category/${
								!product.category.includes(' ')
									? product.category
									: product.category.split(' ').join('-')
							}`}
						>
							<Chip
								label={product.category}
								clickable
								color='secondary'
								variant='outlined'
								className={classes.categoryChip}
							/>
						</Link>
					</CardContent>
				</CardActionArea>
			</Link>
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
