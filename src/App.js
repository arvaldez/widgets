import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
const items = [
	{
		title: 'What is React?',
		content: 'Front end JS Framework',
	},
	{
		title: 'Why use React?',
		content: 'Fave Front end JS Framework',
	},
	{
		title: 'How do you use?',
		content: 'Use React by creating components ',
	},
];

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Blue',
		value: 'blue',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
];
export default () => {
	return (
		<div>
			<Translate />
		</div>
	);
};
