// Import react and react-dom
var React = require('react');
var ReactDOM =  require('react-dom');

// Create component
var TodoComponent = React.createClass({
	getInitialState: function(){
		return {
			todos:['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
			age: 30
		}
	},
	render: function(){
		var ager = setTimeout(function(){
			this.setState({
				age: 35
			});
		}.bind(this), 5000);

		var todos = this.state.todos;
		todos = todos.map(function(item, index){
			return(
				// <li>{item +"!"}</li>
				<TodoItem item={item} key={index} />
			);
		});
		return(
			<div>
				<h1>Hello World!!</h1>
				<p>More than one line.</p>
				<p>{this.props.mssg}</p>
				<p>If that contains cheese, wow!!</p>
				<p><strong>Cheese name: </strong>{this.props.cheese.name}</p>
				<p><strong>Cheese smell factor: </strong>{this.props.cheese.smellFactor}</p>
				<p><strong>Cheese price: </strong>{this.props.cheese.price}</p>
				<div id="todo-list">
					<p>The busiest people have the most leisure...</p>
					<p>{this.state.age}</p>
					<ul>
						<li>{this.state.todos[0]}</li>
						<li>{this.state.todos[1]}</li>
						<li>{this.state.todos[2]}</li>
					</ul>
					<ul>{todos}</ul>
				</div>
			</div>
		);
	}
});

// Create TodoItem component
var TodoItem = React.createClass({
	render: function(){
		return(
			<li>
				<div className="todo-item">
					<span className="item-name">{this.props.item}</span>
				</div>
			</li>
		)
	}
});

var myCheese = {name:'Camembert', smellFactor: 'Extreme pong', price:'3.50'};
// Put component into html page
ReactDOM.render(<TodoComponent mssg="I love pizza." cheese={myCheese}/>, document.getElementById('todo-wrapper'));
