import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Badge,
	Container,
	MenuItem,
	Menu,
} from '@material-ui/core';
import {
	ShoppingCart as ShoppingCartIcon,
	AccountCircle,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cartButton: {
		marginLeft: theme.spacing(1),
	},
	title: {
		flexGrow: 1,
	},
}));

const ButtonAppBar = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Container>
					<Toolbar>
						<Typography variant='h6' className={classes.title}>
							OpenStore
						</Typography>
						<IconButton
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
						<IconButton
							aria-label='show new cart items'
							color='inherit'
							className={classes.cartButton}
						>
							<Badge badgeContent={6} color='secondary'>
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Login</MenuItem>
							<MenuItem onClick={handleClose}>Register</MenuItem>
						</Menu>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default ButtonAppBar;
