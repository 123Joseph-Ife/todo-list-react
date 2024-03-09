const Header = ({ background, setBackground }) => {
  return (
    <header>
      <h1>Todo</h1>
      <img 
        src={background === "sun" ? "src/assets/images/icon-sun.svg" : "src/assets/images/icon-moon.svg"} 
        onClick={() => {
          background === "sun" ? setBackground("moon") : setBackground("sun");
        }}
      />
    </header>
  )
}

export default Header