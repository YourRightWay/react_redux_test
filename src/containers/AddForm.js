import React, {Component} from 'react';


// Этот компонент можно подключить к редакс контейнеру и использовать в нем те property
// которые необходимы.
// Когда в системе много компонентов и они получают свойства из общего родителя - это
// тяжело поддерживать и теряется весь смысл редакса
export default class AddForm extends Component {

    // Пример биндинга метода через конструктор класса

    // constructor(props) {
    // super()
    //  this.handleSubmitForm = this.handleSubmitForm.bind(this)
    // }


    // Работа с реальным DOM API концептуально не правильна при использовании react way
    // за исключением тех случаев когда работа с виртуальным dom требует слишком много временных ресурсов
    // на прокидывание ссылком между комопнентами вычисление реальных размеров узлов и прочего
    checkFields(el) {
        el.classList.remove('has-error');
        el.childNodes[1].setAttribute('placeholder', '');
        if (el.childNodes[1].value.length < 5) {
            el.className += " has-error";
            el.childNodes[1].setAttribute('placeholder', 'Cant be empty ...');
            return false;
        }
        return true;
    }

    handleSubmitForm(event) {
        event.preventDefault();
        // При работе с локальным состоянием не нужно будет выполнять эти проверки
        if (this.checkFields(this.inputName) && this.checkFields(this.inputText)) {
            if (!this.inputURL.childNodes[1].value) {
                this.inputURL.childNodes[1].value = `http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg`;
            }
            // Не самый лучший подход использовать ссылку на реальный
            // узел для получения имени коментария и прочего.
            // Рекомендую использоваться локальное состояние компонента для этих целей.
            // Или redux-form
            this.props.dispatchNewMessage(this.inputName.childNodes[1].value, this.inputURL.childNodes[1].value, this.inputText.childNodes[1].value, Date.now());

            // Локальное состояние намного легче обнулить не прибегая
            // к этим конструкциям
            this.inputName.childNodes[1].value = '';
            this.inputText.childNodes[1].value = '';
            this.inputURL.childNodes[1].value = '';
        }
    }

    render() {
        console.log(this.props.user[1])

        // Используя react way для проектирования приложений лучше использовать
        // компонентный подход для узлов приложения которые логично вынести в
        // отдельный компонент.

        // Input можно было реализовать отдельным компонентом
        // который включал бы в себя label input и валидация
        
        // Точно также можно было бы реализовать отельный компонент для button

        // Рекомедрую обратить внимание на redux-form для реализации этих вещей
        return (
            <div className="addform-wrapper">
                {/* Этого не нужно делать!! */}
                <hr/>
                <br/>
                <p>Comment form:</p>

                {/* Правильней это биндить в конструкторе классаю Смотреть выше constructor */}
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <div className="form-group" ref={(input) => this.inputName = input}>
                        <label>Name</label>
                        <input value={this.props.user[1]} disabled="disabled" className="form-control" type="text"
                               placeholder=""/>
                    </div>
                    <div className="form-group" ref={(input) => this.inputText = input}>
                        <label>Text</label>
                        <textarea className="form-control"/>
                    </div>
                    <div className="form-group" ref={(input) => this.inputURL = input}>
                        <label>Avatar URL</label>
                        <input className="form-control" type="text"
                               placeholder="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}