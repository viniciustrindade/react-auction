import React from 'react';

import SingleLot from './SingleLot';

export default class LotGrid extends React.Component {

	render() {
		return (
			<div className="photo-grid">
				{this.props.lots.map((lot, i) => <SingleLot {...this.props} key={i} i={i} lot={lot} />)}
			</div>
		)
	}
}