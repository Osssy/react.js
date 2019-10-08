

// lesson 18
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './18_router/Lesson.jsx';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from './18_router/components/home/home.jsx';
// import Contacts from './18_router/components/contacts/contacts.jsx';
// import Posts from './18_router/components/posts/posts.jsx';

// ReactDOM.render((
// 	<BrowserRouter>
// 		<App>
// 			<Switch>
// 				<Route exact path='/' component={Home} />
// 				<Route path='/contacts' component={Contacts} />
// 				<Route path='/posts' component={Posts} />
// 			</Switch>
// 		</App>
// 	</BrowserRouter>
// ), document.getElementById('root'));
// registerServiceWorker();

// lesson 19
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './19_router/Lesson.jsx';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from './19_router/components/home/home.jsx';
// import Contacts from './19_router/components/contacts/contacts.jsx';
// import Posts from './19_router/components/posts/posts.jsx';
// import Post from './19_router/components/post/post.jsx';
// import Error from './19_router/components/error/error.jsx';

// ReactDOM.render((
// 	<BrowserRouter>
// 		<App>
// 			<Switch>
// 				<Route exact path='/' component={Home} />
// 				<Route path='/contacts' component={Contacts} />
// 				<Route exact path='/posts' component={Posts} />
// 				<Route path='/posts/:id' component={Post} />
// 				<Route path='*' component={Error} />
// 			</Switch>
// 		</App>
// 	</BrowserRouter>
// ), document.getElementById('root'));
// registerServiceWorker();


// for another lessons
import React from 'react';
import ReactDOM from 'react-dom';
import App from './24_redux_todo_app/App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './24_redux_todo_app/store.js';

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();