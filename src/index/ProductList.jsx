import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Container,
	Box,
	IconButton,
	Chip,
} from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';

const useStyles = makeStyles({
	productCard: {
		maxWidth: 345,
		margin: 10,
	},
	categoryChip: {
		textTransform: 'capitalize',
	},
	addCartBtn: {
		marginRight: 10,
	},
});

const ProductList = ({ productData }) => {
	const classes = useStyles();

	return (
		<>
			<Container>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='flex-start'
					flexWrap='wrap'
				>
					{productData.map((product) => (
						<Card className={classes.productCard} key={product.id}>
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
										{product.title.slice(0, 52).trim()}
										{product.title.length > 52 && '...'}
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
										{product.description.slice(0, 155).trim()}
										{product.description.length > 155 && '...'}
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
							<CardActions>
								<IconButton
									size='small'
									color='primary'
									className={classes.addCartBtn}
								>
									<AddShoppingCartIcon />
								</IconButton>
								<Button size='small' color='primary'>
									Buy Now
								</Button>
							</CardActions>
						</Card>
					))}
				</Box>
			</Container>
		</>
	);
};

export default ProductList;
