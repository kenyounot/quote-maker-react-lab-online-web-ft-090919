// TODO: Create action creators as defined in tests

export const addQuote = quote => {
	return {
		quote: {
			id: quote.id,
			content: quote.content,
			author: quote.author,
			votes: 0
		},
		type: 'ADD_QUOTE'
	};
};

export const removeQuote = quoteID => {
	return {
		type: 'REMOVE_QUOTE',
		quoteId: quoteID
	};
};

export const upvoteQuote = quoteID => {
	return {
		type: 'UPVOTE_QUOTE',
		quoteId: quoteID
	};
};

export const downvoteQuote = quoteID => {
	return {
		type: 'DOWNVOTE_QUOTE',
		quoteId: quoteID
	};
};
