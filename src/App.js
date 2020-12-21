import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
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

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown
					label='Select a color'
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
				<div style={{color: selected.value}}>{selected.label}</div>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
};
