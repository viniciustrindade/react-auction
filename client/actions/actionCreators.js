// increment

export function increment(index) {

	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}

export function bid(index, price) {
	console.log(`Bid Called for ${index}, offered ${price}`);
	return {
		type: 'BID',
		index,
		price
	}
}
