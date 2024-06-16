'use client'
import S from './FormStyled.module.css'
import { setCurrentDescription, setCurrentTitle, setTodos } from '@/store/TodoSlice';
import { useDispatch } from 'react-redux';


export const Form: React.FC = () => {
   const dispatch = useDispatch()
   
   const onFormSubmit = () => {
      dispatch(setTodos(''))
   }
   return(
      <form className={S.form}>
      <input className={S.formInputTitle} type='text' placeholder='Title' onChange={(e) => dispatch(setCurrentTitle(e.target.value))}/>
      <input className={S.formInputDiscription} type='text' placeholder='Description' onChange={(e) => dispatch(setCurrentDescription(e.target.value))}/>
      <button className={S.formButton} onClick={onFormSubmit}>Add todo</button>
   </form>
   )
}