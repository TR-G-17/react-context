import React from "react"

const TodoItem = ({item: {title, isDone}}) => {
    return (
        <span className={isDone ?  "is-done": ''}>{title}</span>
    )
};

export default TodoItem