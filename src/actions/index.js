// Было бы лучше завести файл constants.js и в нем хранить константы
// так как одна константа может использоваться на все приложение в разных местах
// например для глобального сброса состояния

// Что значит название этого экшена. Название не отражает сути происходящего
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