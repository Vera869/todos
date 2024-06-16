import S from './FormStyled.module.css'

export const Form: React.FC = () => {
   console.log('render form')
   return(
      <form className={S.form}>
      <input className={S.formInputTitle} type='text' placeholder='Title'/>
      <input className={S.formInputDiscription} type='text' placeholder='Discription'/>
      <button className={S.formButton}>Add task</button>
   </form>
   )
}