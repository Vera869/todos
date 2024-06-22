import S from './ToDosStyled.module.css'
import storage from '../../../../localStorage'; 
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

export const ToDo: React.FC = () => {
   type todo = {
      id: string,
      title: string, 
      description: string,
      isCompleted: boolean
   }

   const tasks: todo[] = storage.get('todos')
   const params = useParams()
   
   // const removeTodo = (prop: any) => {
   //    const tasks: todo[] = storage.get('todos')
   //    const id: string | undefined = prop
   //    console.log(prop);
   //    tasks.filter((task: todo) => task.id !== prop)
   //    console.log(tasks);
   //    storage.set('todos', tasks)
   // }
   //console.log(tasks);

   const removeTodo: Function = (props: string) => {
      const tasks: todo[] = storage.get('todos')
      const id: string | undefined = props
      console.log(props)
      const newTasks = tasks.filter((task: todo) => task.id !== props)
      console.log(newTasks)
      storage.set('todos', newTasks)
   }
   //checked={task.isCompleted} Edit
   return(
         <div className={S.sectionTodosItems}>
            {tasks?.map((task: todo, index: any) => {
               return(
                <form className={S.todosItem} key={index}>
                     <input className={S.todosItemCheckbox} type='checkbox' />
                     <div className={S.todosItemBox}> 
                        <p className={S.todosItemTitle}>{task.title}</p>
                        <p className={S.todosItemDescription}>{task.description}</p>
                     </div>
                     <button className={S.todosItemButton} onClick={()=>{console.log(task.id); removeTodo(task.id)}}>delete</button>
                     
                  </form>
               )
            })}
           
         </div>
         )
}