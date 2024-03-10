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
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </button>
          </li>
        ))
      }
    </main>
  )
}

export default Main
