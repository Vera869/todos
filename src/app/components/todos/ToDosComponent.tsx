import S from './ToDosStyled.module.css'

export const ToDo: React.FC = () => {
   console.log('render todos')
   return(
         <div className={S.sectionTodosItem}>
            <input className={S.sectionTodosCheckbox} type='checkbox'/>
            <div className={S.sectionTodosItem}> todos here</div>
         </div>
         )
}