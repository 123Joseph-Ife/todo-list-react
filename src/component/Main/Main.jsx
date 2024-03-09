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
            <div className="text">{list.item}</div>
            <button className="delete" onClick={() => handleDelete(list.id)}>
              <img src="src\assets\images\icon-cross.svg" />
            </button>
          </li>
        ))
      }
    </main>
  )
}

export default Main