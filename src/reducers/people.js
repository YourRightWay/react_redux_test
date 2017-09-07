const users = ['test@gmail.com'];

const checkLogin = (state = users, action) => {
	if( action.type === 'LOGGED' ) {
		return state.concat(action.user)
	}
	return state
}

export default checkLogin