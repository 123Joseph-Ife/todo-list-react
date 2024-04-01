import sunLogo from "src/assets/images/icon-sun.svg"
import DarkLogo from "src/assets/images/icon-moon.svg"


const Header = ({ background, setBackground }) => {
  return (
    <header>
      <h1>Todo</h1>
      <img 
        id="images"
        src="src/assets/images/icon-sun.svg" 
        onClick={() => {
          background === "sun" ? setBackground("moon") : setBackground("sun");
        }}
        className={background === "sun" ? "moon" : "sun"}
      />
    </header>
  )
}

export default Header
