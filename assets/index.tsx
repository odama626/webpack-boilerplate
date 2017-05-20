import * as React from 'react';
import * as ReactDOM from 'react-dom';

var $ = document.querySelector

class HelloWorld extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<div> hello World </div>
		);
	}
}
window.onload = _ => {
	ReactDOM.render(<HelloWorld />, $('body'));
}
