import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Auction</Link>
				</h1>

				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/new-lot">New Lot</Link></li>
				</ul>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}