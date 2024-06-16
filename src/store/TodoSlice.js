import { createSlice } from "@reduxjs/toolkit";
import storage from "../../localStorage";

const todosSlice = createSlice({
   name: 'todos',
   initialState: {
      todos: [],
      // isCompleted: [],
      currentTitle: '',
      currentDescription: '',

   },
   reducers: {
      setCurrentTitle(state, action) {
         state.currentTitle = action.payload;
      },
      setCurrentDescription(state, action) {
         state.currentDescription = action.payload;
      },
      setTodos(state, action) {
         const  todosLS  = storage.get('todos');
         const newId = () => Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
         const title = state.currentTitle;
         const description = state.currentDescription;
         const newTodo = {
            id: newId(),
            title, 
            description,
            isCompleted: false
         }
         if(todosLS === null){
            let newTodos = [newTodo]
            state.todos = action.payload.newTodos
            storage.set('todos', newTodos)
         } else{
            let newTodos = [newTodo].concat(todosLS)
            state.todos = action.payload.newTodos
            storage.set('todos', newTodos)
         }
         
         // storage.set('todos', newTodos)
      },

   }
}
)

export const { setTodos, setCurrentTitle, setCurrentDescription, } = todosSlice.actions
 
 export const todosReducer = todosSlice.reducer