import { useState } from 'react';
import './App.css';
import Nav from './Component/Nav'; 
import Faq from './Component/Faq';
import Footer from './Component/Footer';

function App() {
  const [todoList, setTodoList] = useState([]);

  let saveTolist = (e) => {
    e.preventDefault();

    let toName = e.target.toName.value;

    if (!todoList.includes(toName)) {
      let Finaltodo = [...todoList, toName];
      setTodoList(Finaltodo);
    } else {
      alert("Alert: To-do already exists");
    }
  };

  let list = todoList.map((value, i) => {
    let alllist = { value, i, todoList, setTodoList };
    return (
      <Updatetodo all={alllist} key={i}/>
    );
  });

  return (
    <>
      <Nav />

      <h1 className="Heading">My Task</h1>

      <form onSubmit={saveTolist}>
        <input placeholder="Add task..." type="text" name="toName" />
        <button type="submit">Save</button>
      </form>

      <div className="outerDiv">
        <ul>
          {list}
        </ul>
      </div>

      <Faq/>

      <Footer />

    </>
  );
}

export default App;

function Updatetodo({ all }) {
  let [status, Setstatus] = useState(false);

  let deleteRow = () => {
    let finaldata = all.todoList.filter((v, i) => i !== all.i);
    all.setTodoList(finaldata);
  };

  let Checkstatus = () => {
    Setstatus(!status);
  };

  return (
    <>
      <li
        className={status ? 'complete' : ''}
        onClick={Checkstatus}
      >
        {all.i + 1} {all.value} <span onClick={deleteRow}>&times;</span>
      </li>
    </>
  );
}
