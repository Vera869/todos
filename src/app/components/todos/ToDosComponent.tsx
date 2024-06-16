import S from './ToDosStyled.module.css'
import storage from '../../../../localStorage'; 

export const ToDo: React.FC = () => {
   type todo = {
      id: string,
      title: string, 
      description: string,
      isCompleted: boolean
   }
   const tasks: any = storage.get('todos')
   console.log(tasks);
   //checked={task.isCompleted}
   return(
         <div className={S.sectionTodosItems}>
            {tasks?.map((task: todo, index: any) => {
               return(
                <div className={S.todosItem} key={index}>
                     <input className={S.todosItemCheckbox} type='checkbox' checked={task.isCompleted} />
                     <div className={S.todosItemBox}> 
                        <p className={S.todosItemTitle}>{task.title}</p>
                        <p className={S.todosItemDescription}>{task.description}</p>
                     </div>
                  </div>
               )
            })}
           
         </div>
         )
}