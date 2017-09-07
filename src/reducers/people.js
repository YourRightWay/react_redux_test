const users = ['test@gmail.com'];

// Мутация массива. Это концептуально неправильно если ты используешь редакс
// Как решение - использоваться Object.assign или Object.merge или immutable для более сложных вложенностей
const checkLogin = (state = users, action) => {
	if( action.type === 'LOGGED' ) {
		return state.concat(action.user)
	}
	return state
}

export default checkLogin