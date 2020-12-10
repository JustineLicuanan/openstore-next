import { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

const CategoryTabs = ({ productCategories }) => {
	const [value, setValue] = useState(0);

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
			<Tab label='All' />
			{productCategories.map((category, i) => (
				<Tab label={category} key={i} />
			))}
		</Tabs>
	);
};

export default CategoryTabs;
