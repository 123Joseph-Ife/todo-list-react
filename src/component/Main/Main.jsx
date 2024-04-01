import Circle from "./Circle";

function Main({ lists, handleCheck, handleDelete }) {
  return (
    <main className="main">
      {
        lists.map((list) => (
          <li className="list" key={list.id}>
            <Circle
              list={list}
              handleCheck={handleCheck}
            />
            <p className="text">{list.item}</p>
            <button className="delete" onClick={() => handleDelete(list.id)}>
              X
            </button>
          </li>
        ))
      }
    </main>
  )
}

export default Main
