import { useEffect, useState } from "react";
import './component/components.css';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Form from "./component/Form/Form";

function App() {
  const [ lists, setList ] = useState(JSON.parse(localStorage.getItem("list")) || []);


  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(lists))
  }, [lists])

  const [ newItem, setNewItem ] = useState("");
  const [ background, setBackground ] = useState("sun")

  const handleCheck = (id) =>{
    const listItems = lists.map((list) => (
      list.id === id ? { ...list, checked: !list.checked } : list
    ));
    setList(listItems)
  }

  const handleDelete = (id) => {
    const listItems = lists.filter((list) => list.id !== id);
    setList(listItems)
  }

  const addItem = (item) => {
    const id = lists.length ? lists[lists.length - 1].id + 1 : 1;
    const listItems = [ ...lists, {
      id: id,
      checked: false,
      item: item
    }]
    setList(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem)
    setNewItem("")
  }

  return (
    <>
      <Header
        background={background}
        setBackground={setBackground}
      />
      <Form
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <Main
        lists={lists}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
