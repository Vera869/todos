import S from './ToDosStyled.module.css'

export const ToDo: React.FC = () => {
   console.log('render todos')
   return(
         <div className={S.todosItem}>
            <input className={S.todosItemCheckbox} type='checkbox'/>
            <div className={S.todosItemBox}> 
               <p className={S.todosItemTitle}>Title Todo Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam odio animi ipsam autem et maiores delectus consequatur praesentium amet.</p>
               <p className={S.todosItemDescription}>Description Todo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore distinctio qui veritatis recusandae adipisci quas ea temporibus delectus placeat quos totam deleniti ab praesentium nihil impedit optio repellat illum, dolores consectetur necessitatibus id magnam. Sit eius amet possimus ea nesciunt.</p>
            </div>
         </div>
         )
}