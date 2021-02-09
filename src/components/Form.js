import React, { useState } from 'react';

export default function Form(props) {
	const [newItem, setNewItem] = useState({
		title: '',
		completed: false
	});
	const addItem = event => {
		event.preventDefault();
		props.addItem(newItem);
		setNewItem({
			title: '',
			completed: false
		});
	};
	const handleChange = event => {
		setNewItem({
			...newItem,
			[event.target.id]: event.target.value
		});
	};

	return (
		<div className="form>">
			<form onSubmit={addItem}>
				<input
					type="text"
					id="title"
					placeholder="task"
					value={newItem.title}
					onChange={handleChange}
				></input>
				<input type="submit" value="Add to the List!"></input>
			</form>
		</div>
	);
}
