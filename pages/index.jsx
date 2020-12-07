import Head from 'next/head';
import { Typography } from '@material-ui/core';

const Home = () => {
	return (
		<>
			<Head>
				<title>Next App</title>
			</Head>

			<Typography variant='h2' component='h1'>
				Next App
			</Typography>
		</>
	);
};

export default Home;
