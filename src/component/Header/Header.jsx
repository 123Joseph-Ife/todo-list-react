const Header = ({ background, setBackground }) => {
  return (
    <header>
      <h1>Todo</h1>
      <img 
        id="images"
        src={background === "sun" ? "src/assets/images/icon-sun.svg" : "src/assets/images/icon-moon.svg"} 
        onClick={() => {
          background === "sun" ? setBackground("moon") : setBackground("sun");
        }}
        className={background === "sun" ? "moon" : "sun"}
      />
    </header>
  )
}

export default Header
