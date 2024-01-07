import { useState } from "react";

import { useTodo } from "../Contexts";

const TodoForm = () => {

    const { addTodo} = useTodo();
    const [todoTitle, setTodoTitle] = useState('');

    const clickButton = (e) => {
        e.preventDefault();
        
        if (!todoTitle) return;

        addTodo({ todo: todoTitle, completed: false });
        setTodoTitle('');
        //    console.log(todos.map((item) => item.todo));
    }

    return (
        <div className="formtodo bg-slate-400 text-slate-900 w-full h-64 ">
            <form onSubmit={clickButton} className="w-full h-full flex justify-center items-center">
                <input type="text" className="w-1/2 h-16 rounded-l-3xl outline-none p-4 "
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                />
                <button className="p-3 border-x-2 border-y-2 border-cyan-700 bg-blue-300 rounded-r-3xl h-16 text-2xl">Submit</button>
            </form>
        </div>
    );

}

export default TodoForm