import React, { useState, useEffect } from 'react';
import toDoListData from '../data';
import Form from './Form';

export default function App(props) {
	const [list, setList] = useState([...toDoListData]);
	const [doneList, setDoneList] = useState([]);

	const addItem = newItem => {
		setList([...list, newItem]);
	};

	const handleMoveList = element => {
		const updatedList = list.filter(item => item.title !== element);
		setList(updatedList);
		setDoneList([...doneList, element]);
	};
	const deleteItem = element => {
		const newList = doneList.filter(item => item === element);
		setDoneList(newList);
	};

	console.log(doneList);
	return (
		<div className="app">
			<div className="todoSide">
				<h1>My To Do List</h1>
				<Form addItem={addItem} />
				<ul className="todoList">
					{list.map(item => {
						return (
							<li key={`${item.title}`}>
								<span>{item.title}</span>
								<span>{item.completed}</span>
								<button
									type="button"
									onClick={() => handleMoveList(item.title)}
								>
									Move
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="doneSide">
				<h1>Done</h1>
				<ul className="doneList">
					{doneList.map(item => {
						return <button onClick={deleteItem}>{item}</button>;
					})}
				</ul>
			</div>
		</div>
	);
}
