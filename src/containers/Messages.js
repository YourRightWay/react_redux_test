import React, {Component} from 'react';

export default class Messages extends Component {
    render() {
        // Метод render желательно оставлять максимально чистым, т.е без условий
        // без методов Array.prototype map filter reduce и проч.
        // Здесь логично было бы разделить компонент сообщения и встроить его в контейнер
        return (
            <ul className="comments-list">
                {this.props.messages.map((item, index) => {
                    const d = new Date(item.timestamp)
                    return (
                        <li key={index} className="messages-wrapper">
                            <div className="comment-main-level">
                                <div className="comment-avatar">
                                    <img src={item.avatar} alt=""/>
                                </div>
                                <div className="comment-box">
                                    <div className="comment-head">
                                        {/* Заголовки можно было бы реализовать как stateless component */}
                                        <h6 className="comment-name">{item.author}</h6>
                                        {/* Точно также с отображение даты */}
                                        <span>{`${d.getDate()}/${d.getMonth()} ${d.getHours()}:${d.getMinutes()}`}</span>
                                        <i className="fa fa-reply"/>
                                        <i className="fa fa-heart"/>
                                    </div>
                                    <div className="comment-content">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}