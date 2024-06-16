'use client'
import { useEffect, useState } from 'react'
import S from './FormStyled.module.css'
import storage from '../../../../localStorage'; 

export const Form: React.FC = () => {
   let dataLS: any = storage.get('titleTodo')

   const [title, setTitle] = useState(dataLS ?? '')
   const [discription, setDiscription] = useState('')
   
   const onFormSubmit = () => {
      storage.set('titleTodo', title)
   }
   console.log(dataLS);
   //console.log(title)
   return(
      <form className={S.form}>
      <input className={S.formInputTitle} type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
      <input className={S.formInputDiscription} type='text' placeholder='Discription' onChange={(e) => setDiscription(e.target.value)}/>
      <button className={S.formButton} onClick={onFormSubmit}>Add task</button>
   </form>
   )
}