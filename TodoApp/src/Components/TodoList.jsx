import { useState } from "react";
import { useTodo } from "../Contexts";

const TodoList = ({ todo }) => {

    const [check,setCheck] = useState(false);

    const [newTodo, setNewTodo] = useState(todo.todo);

    // using this we can make the set value in readOnly in input
    const [editable, setEditable] = useState(false);

    // it check that when to update button name
    const [nameChange, setNameChange] = useState(true);

    const { editTodo, toggleCheck, deleteTodo } = useTodo();

    const clickOnInput = (e) => {
        e.preventDefault();

        setNameChange((prev) => !prev)

            if (nameChange && !check) {
                e.target.innerHTML = "update";
            } else {
                e.target.innerHTML = "Edit";
            }

        setEditable((prev) => !prev)

        editTodo(todo.id, { ...todo, todo: newTodo });
    }

    const deleteClicked = () =>{
        deleteTodo(todo.id)
    }


    const checkClicked = () =>{
        setCheck((prev) => !prev)
        toggleCheck(todo.id)
    }
    return (
        <div className={`w-10/12 bg-orange-300 h-12 rounded-lg flex justify-between m-2 items-center ${check ? "bg-green-500" : "bg-orange-300"} ${check ? "bg-green-400":"bg-orange-300"}`}>

            <form className=" w-full h-full items-center flex justify-between">
                <div className="input-section items-center flex">

                    <input type="checkbox" onClick={checkClicked} className="w-8 h-8 border-x-4 border-y-4 border-slate-800 ml-2" />

                    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} readOnly={!editable || check} className={` w-max h-8 bg-orange-300 p-2 outline-none ${check ? "bg-green-400":"bg-orange-300"}`}

                    />
                </div>

                <div className="button-section">
                    <button className={`w-16 h-8 border-x-2 border-y-2 border-slate-800 hover:bg-slate-400 rounded-2xl mr-2 `}
                        onClick={clickOnInput}
                    >Edit</button>

                    <button className="w-16 h-8 border-x-2 border-y-2 border-red-500 rounded-2xl mr-2 hover:bg-red-400"
                    onClick={deleteClicked}
                    >Delete</button>
                </div>
            </form>

        </div>

    );
}

export default TodoList;