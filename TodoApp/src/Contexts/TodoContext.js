import {useContext,createContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Add todo",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    editTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCheck:(id)=>{}
});

export const TodoContextProvider = TodoContext.Provider;

export function useTodo () {
    return useContext(TodoContext);
}

