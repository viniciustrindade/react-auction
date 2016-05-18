'use strict';

import React from 'react';

export default class SingleUser extends React.Component {

	render() {
		const user = this.props.user;

		return (
			<figure className="grid-figure">
				<figcaption>
					<p>{user.name}</p>
					<p>{user.bank}</p>
				</figcaption>
			</figure>
		);
	}
}