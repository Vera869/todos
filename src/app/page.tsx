import Image from "next/image";
import S from "./page.module.css";
import { Form } from "./components/form/Form";
import { ToDo } from "./components/todos/ToDosComponent";
// import storage from '../../localStorage'; 

 const  Home: React.FC= () => {
  return (
    <main className={S.main}>
         <section className={S.sectionForm}>
            <h1 className={S.sectionFormHeader}>Create todos</h1>
           <Form/>
         </section>
         <section className={S.sectionTodos}>
            <h2 className={S.sectionTodosHeader}>My todo list</h2>
            <div className={S.sectionTodosItems}>
              <ToDo/>
            </div>
         </section>
    </main>
  );
}

export default Home