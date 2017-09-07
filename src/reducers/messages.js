const messages = [
	{
		author: 'Mihail P.',
		avatar: 'http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg',
		text: 'Some text',
		timestamp: 1504691791806
	},
	{
		author: 'Anna J.',
		avatar: 'http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg',
		text: 'Some text2',
		timestamp: 1504693899806
	}
];


const messagesReducer = (state = messages, action) => {
	if( action.type === 'ADD_NEW_MESSAGE' ) {
		return state.concat({
			author: action.author,
			avatar: action.avatar,
			text: action.text,
			timestamp: action.timestamp
		});
	}

	return state
};

export default messagesReducer