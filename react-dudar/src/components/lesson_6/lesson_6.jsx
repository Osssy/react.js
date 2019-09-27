import * as React from 'react';

// lesson_6
// export class Task extends React.Component {
// 	edit() {
// 		alert('нажата кнопка редактировать');
// 	}

// 	remove() {
// 		alert('нажата кнопка удалить');
// 	}

// 	render() {
// 		return <div className="box">
// 					<div className="text">{this.props.children}</div>
// 					<button className="btn light" onClick={this.edit}>Редактировать</button>
// 					<button className="btn red" onClick={this.remove}>удалить</button>
// 				</div>
// 	}
// }

// lesson_7!!!
// export class Task extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			checked: true,
// 		};
// 	};

// 	handleCheck() {
// 		this.setState({checked: !this.state.checked});
// 	};

// 	render() {
// 		let message;

// 		if (this.state.checked) {
// 			message = 'выбран';
// 		}	else {
// 			message = 'не выбран';
// 		}
// 		return <div>
// 					<input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
// 					<p>Чекбокс {message}</p>
// 				</div>
// 	};
// }

// lesson_8 !!!
// export class Task extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			edit: false,
// 		}
// 	};

// 	edit() {
// 		this.setState ({edit: true});
// 	};

// 	remove() {
// 		alert('нажата кнопка удалить');
// 	};

// 	save() {
// 		this.setState ({edit: false});
// 	};

// 	rendNorm() {
// 		return <div className="box">
// 					<div className="text">{this.props.children}</div>
// 					<button className="btn light" onClick={this.edit}>Редактировать</button>
// 					<button className="btn red" onClick={this.remove}>удалить</button>
// 				</div>
// 	};

// 	rendEdit() {
// 		return <div className="box">
// 					<textarea defaultValue={this.props.children}></textarea>
// 					<button className="btn success" onClick={this.save}>сохранить</button>
// 				</div>
// 	};

// 	render() {
// 		if (this.state.edit) {
// 			return this.rendEdit();
// 		}	else {
// 			return this.rendNorm();
// 		}
// 	}
// }

// lesson_9 !!!
// export class Task extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			edit: false,
// 		}
// 	};

// 	edit() {
// 		this.setState ({edit: true});
// 	};

// 	remove() {
// 		alert('нажата кнопка удалить');
// 	};

// 	save() {
// 		let value = this.refs.newTxt.value;
// 		alert(value);
// 		this.setState ({edit: false});
// 	};

// 	rendNorm() {
// 		return <div className="box">
// 					<div className="text">{this.props.children}</div>
// 					<button className="btn light" onClick={this.edit}>Редактировать</button>
// 					<button className="btn red" onClick={this.remove}>удалить</button>
// 				</div>
// 	};

// 	rendEdit() {
// 		return <div className="box">
// 					<textarea ref="newTxt" defaultValue={this.props.children}></textarea>
// 					<button className="btn success" onClick={this.save}>сохранить</button>
// 				</div>
// 	};

// 	render() {
// 		if (this.state.edit) {
// 			return this.rendEdit();
// 		}	else {
// 			return this.rendNorm();
// 		}
// 	}
// }

// lesson_10 !!!
// export class Task extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			edit: false,
// 		}
// 	};

// 	edit() {
// 		this.setState ({edit: true});
// 	};

// 	remove() {
// 		alert('нажата кнопка удалить');
// 	};

// 	save() {
// 		let value = this.refs.newTxt.value;
// 		alert(value);
// 		this.setState ({edit: false});
// 	};

// 	rendNorm() {
// 		return <div className="box">
// 					<div className="text">{this.props.children}</div>
// 					<button className="btn light" onClick={this.edit}>Редактировать</button>
// 					<button className="btn red" onClick={this.remove}>удалить</button>
// 				</div>
// 	};

// 	rendEdit() {
// 		return <div className="box">
// 					<textarea ref="newTxt" defaultValue={this.props.children}></textarea>
// 					<button className="btn success" onClick={this.save}>сохранить</button>
// 				</div>
// 	};

// 	render() {
// 		if (this.state.edit) {
// 			return this.rendEdit();
// 		}	else {
// 			return this.rendNorm();
// 		}
// 	}
// };

// export class Field extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			tasks: [
// 				'need to buy milk',
// 				'need to catch the fish',
// 				'need to bring chair'
// 			]
// 		};
// 	};

// 	render() {
// 		return <div>
// 				{
// 					this.state.tasks.map (function (item, i) {
// 						return (<Task key={i}>{item}</Task>);
// 					})
// 				}
// 				</div>
// 	}
// };

// lesson_11 !!!
// export class Task extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			edit: false,
// 		}
// 	};

// 	edit() {
// 		this.setState ({edit: true});
// 	};

// 	remove() {
// 		alert('нажата кнопка удалить');
// 	};

// 	save() {
// 		let value = this.refs.newTxt.value;
// 		alert(value);
// 		this.setState ({edit: false});
// 	};

// 	rendNorm() {
// 		return <div className="box">
// 					<div className="text">{this.props.children}</div>
// 					<button className="btn light" onClick={this.edit}>Редактировать</button>
// 					<button className="btn red" onClick={this.remove}>удалить</button>
// 				</div>
// 	};

// 	rendEdit() {
// 		return <div className="box">
// 					<textarea ref="newTxt" defaultValue={this.props.children}></textarea>
// 					<button className="btn success" onClick={this.save}>сохранить</button>
// 				</div>
// 	};

// 	render() {
// 		if (this.state.edit) {
// 			return this.rendEdit();
// 		}	else {
// 			return this.rendNorm();
// 		}
// 	}
// };

// export class Field extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			tasks: [
// 				'need to buy milk',
// 				'need to catch the fish',
// 				'need to bring chair'
// 			]
// 		};
// 	};

// 	deleteBlock(i) {
// 		let arr = this.state.tasks;
// 		arr.splice(i, 1);
// 		this.setState ({tasks: arr});
// 	};

// 	upDateText(text, i) {
// 		let arr = this.state.tasks;
// 		arr[i] = text;
// 		this.setState ({tasks: arr});
// 	};

// 	eachTask(item, i) {
// 		return 
// 			<Task key={i} index={i}>
// 				{item}
// 			</Task>
// 	};

// 	render() {
// 		return <div>
// 				{this.state.tasks.map (this.eachTask)}
// 				</div>
// 	}
// };

// lesson_12 !!!
// export class Task extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			edit: false,
// 		}
// 	};

// 	edit() {
// 		this.setState ({edit: true});
// 	};

// 	remove() {
// 		this.props.deleteBlock(this.props.index);
// 	};

// 	save() {
// 		let value = this.refs.newTxt.value;
// 		this.props.upDateText(this.refs.newTxt.value, this.props.index);
// 		this.setState ({edit: false});
// 	};

// 	rendNorm() {
// 		return <div className="box">
// 					<div className="text">{this.props.children}</div>
// 					<button className="btn light" onClick={this.edit}>Редактировать</button>
// 					<button className="btn red" onClick={this.remove}>удалить</button>
// 				</div>
// 	};

// 	rendEdit() {
// 		return <div className="box">
// 					<textarea ref="newTxt" defaultValue={this.props.children}></textarea>
// 					<button className="btn success" onClick={this.save}>сохранить</button>
// 				</div>
// 	};

// 	render() {
// 		if (this.state.edit) {
// 			return this.rendEdit();
// 		}	else {
// 			return this.rendNorm();
// 		}
// 	}
// };

// export class Field extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			tasks: [
// 				'need to buy milk',
// 				'need to catch the fish',
// 				'need to bring chair'
// 			]
// 		};
// 	};

// 	deleteBlock(i) {
// 		let arr = this.state.tasks;
// 		arr.splice(i, 1);
// 		this.setState ({tasks: arr});
// 	};

// 	upDateText(text, i) {
// 		let arr = this.state.tasks;
// 		arr[i] = text;
// 		this.setState ({tasks: arr});
// 	};

// 	eachTask(item, i) {
// 		return 
// 			<Task key={i} index={i} update={this.upDateText} deleteBlock={this.deleteBlock}>
// 				{item}
// 			</Task>
// 	};

// 	render() {
// 		return <div>
// 				{this.state.tasks.map (this.eachTask)}
// 				</div>
// 	}
// };

// lesson_13 !!!
export class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
		}
	};

	edit() {
		this.setState ({edit: true});
	};

	remove() {
		this.props.deleteBlock(this.props.index);
	};

	save() {
		let value = this.refs.newTxt.value;
		this.props.upDateText(this.refs.newTxt.value, this.props.index);
		this.setState ({edit: false});
	};

	rendNorm() {
		return <div className="box">
					<div className="text">{this.props.children}</div>
					<button className="btn light" onClick={this.edit}>Редактировать</button>
					<button className="btn red" onClick={this.remove}>удалить</button>
				</div>
	};

	rendEdit() {
		return <div className="box">
					<textarea ref="newTxt" defaultValue={this.props.children}></textarea>
					<button className="btn success" onClick={this.save}>сохранить</button>
				</div>
	};

	render() {
		if (this.state.edit) {
			return this.rendEdit();
		}	else {
			return this.rendNorm();
		}
	}
};

export class Field extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
	};

	add(text) {
		let arr = this.state.tasks;
		arr.push(text);
		this.setState ({tasks: arr});
	};

	deleteBlock(i) {
		let arr = this.state.tasks;
		arr.splice(i, 1);
		this.setState ({tasks: arr});
	};

	upDateText(text, i) {
		let arr = this.state.tasks;
		arr[i] = text;
		this.setState ({tasks: arr});
	};

	eachTask(item, i) {
		return 
			<Task key={i} index={i} update={this.upDateText} deleteBlock={this.deleteBlock}>
				{item}
			</Task>
	};

	render() {
		return <div>
					<button onClick={this.add.bind (null, 'Easy Task')} className="btn new">new task</button>
					{this.state.tasks.map (this.eachTask)}
				</div>
	}
};