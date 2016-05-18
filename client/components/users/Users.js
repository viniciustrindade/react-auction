'use strict';

import React from 'react';

import SingleUser from './SingleUser';

export default class Users extends React.Component {

	onAddUser(e) {
		e.preventDefault();

		const name = this.refs.name.value;
		const bank = +this.refs.bank.value;
		this.props.addUser(name, bank);

		this.refs.addUser.reset();
	}

	render() {

		return (
			<div>
				<div className="photo-grid">
					{this.props.users.map((user) => <SingleUser {...this.props} user={user} />)}
				</div>
				<form ref="addUser" className="comment-form" onSubmit={this.onAddUser.bind(this)}>
					<input type="text" ref="name" placeholder="name"/>
					<input type="text" ref="bank" placeholder="bank"/>
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
}