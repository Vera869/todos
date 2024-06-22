import Image from "next/image";
'use client'
import S from "./page.module.css";
import { Form } from "./components/form/Form";
import { ToDo } from "./components/todos/ToDosComponent";
import { Provider } from "react-redux";
import { store } from '../store/store'
import storage from '../../localStorage'; 
import { useEffect } from "react";

 const  Home: React.FC= () => {


  // console.log(dataTodos)
  // const removeLS: any = storage.remove('todos')
  // removeLS()
  return (
    <Provider store={store}>
      <main className={S.main}>
          <section className={S.sectionForm}>
              <h1 className={S.sectionFormHeader}>Create todos</h1>
            <Form/>
          </section>
          <section className={S.sectionTodos}>
            <h2 className={S.sectionTodosHeader}>My todo list</h2>
              <ToDo/>
          </section>
      </main>
    </Provider>
  );
}

export default Home