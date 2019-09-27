import * as React from 'react';

export class Lesson_5 extends React.Component {
	render() {
		return <div>
					<h1> { this.props.name } </h1>
					<h2> { this.props.age } </h2>
				</div>
		}
}