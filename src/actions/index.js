export const globalState = (action) => {
    return  {
        type: 'CHANGE_LOGIN',
        action
    }
}

export const newMessage = (author,avatar,text,timestamp) => {
	return  {
		type: 'ADD_NEW_MESSAGE',
		author,
		avatar,
		text,
		timestamp
	}
}

export const checkLogin = (user) => {
    return  {
        type: 'LOGGED',
        user
    }
}