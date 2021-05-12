import React, {useState} from "react"

const Header = ({addTodo}) => {
    const [text, setText] = useState('')

    const handleChange = event => {
        setText( event.target.value )
    }
    const handleAdd = () => {
        addTodo(text)
        setText('')
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <button type="button" onClick={handleAdd}>Add</button>
            <p>{text}</p>
        </div>
    )
}
export default Header