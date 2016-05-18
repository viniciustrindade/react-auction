import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class SingleLot extends React.Component {

	handleSubmit(e) {
		e.preventDefault();
		let offer = +this.refs.offer.value;
		this.props.bid(this.props.i, offer);
		this.refs.bidForm.reset();
	}

	render() {
		const { lot, i, comments } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/lot/${lot.code}`}>
						<img src={lot.image} alt={lot.name} className="grid-photo" />
					</Link>

					<CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
						<span key={lot.price} className="likes-heart">{lot.price}</span>
					</CSSTransitionGroup>

				</div>

				<figcaption>
					<p>{lot.name}</p>
					<p>{lot.price}</p>
					<div className="single-photo">
						<form ref="bidForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
							<input type="text" ref="offer" placeholder="your bid"/>
							<input type="submit" hidden />
						</form>
					</div>


					<div className="control-buttons">
						<button onClick={this.props.bid.bind(null, i, lot.price + 10)} className="likes">&hearts; {lot.price}</button>
						<Link className="button" to={`/lot/${lot.code}`}>View</Link>
					</div>
				</figcaption>

			</figure>
		)
	}
}
