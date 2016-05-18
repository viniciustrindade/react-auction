import React from 'react';

import SingleLot from './SingleLot';

export default class LotDetails extends React.Component {
	render() {
		const { code } = this.props.params;

		const i = this.props.lots.findIndex((lot) => lot.code === code);
		const lot = this.props.lots[i];

		return (
			<div className="single-photo">
				<SingleLot i={i} lot={lot} {...this.props} />
			</div>
		)
	}
}