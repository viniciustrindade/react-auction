'use strict';

import React from 'react';

export default class PlaceLot extends React.Component {

	handleSubmit(e) {
		e.preventDefault();
		const name = this.refs.name.value;
		const price = +this.refs.price.value;
		this.props.placeLot(name, price);
		this.refs.newLotForm.reset();
	}

	render() {
		return (
			<div className="single-photo">
				<form ref="newLotForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="name" placeholder="name"/>
					<input type="text" ref="price" placeholder="price"/>
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
}