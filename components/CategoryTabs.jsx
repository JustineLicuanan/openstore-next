import { useState } from 'react';
import Link from 'next/link';
import { Tabs, Tab } from '@material-ui/core';

const CategoryTabs = ({ currentCategory, productCategories }) => {
	const [value, setValue] = useState(currentCategory);

	return (
		<Tabs
			value={value}
			onChange={(e, newVal) => setValue(newVal)}
			indicatorColor='primary'
			textColor='primary'
			variant='scrollable'
			scrollButtons='on'
			aria-label='scrollable auto tabs'
		>
			<Link href='/'>
				<Tab label='All' />
			</Link>
			{productCategories.map((category, i) => (
				<Link
					href={`/products/category/${
						!category.includes(' ') ? category : category.split(' ').join('-')
					}`}
					key={i}
				>
					<Tab label={category} onClick={() => setValue(i + 1)} />
				</Link>
			))}
		</Tabs>
	);
};

export default CategoryTabs;
