'use strict';

import React from 'react';

import SingleUser from './SingleUser';

// services
import UserService from '../../services/UserService'

export default class Users extends React.Component {

	componentWillMount() {
		let userService = new UserService();
		userService.getUsers().then((users) => {
			this.props.setUsers(users);
		}).catch((e) => {
			console.log('Could not load users');
		});
	}

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
					{this.props.users.map((user, i) => <SingleUser {...this.props} user={user} key={i}/>)}
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