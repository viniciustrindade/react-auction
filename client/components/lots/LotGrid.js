import React from 'react';

import SingleLot from './SingleLot';

// services
import LotService from '../../services/LotService';

export default class LotGrid extends React.Component {

	componentWillMount() {
		let lotService = new LotService();
		lotService.getLots().then((lots) => {
			this.props.setLots(lots);
		})
	}

	render() {
		return (
			<div className="photo-grid">
				{this.props.lots.map((lot, i) => <SingleLot {...this.props} key={i} i={i} lot={lot} />)}
			</div>
		)
	}
}