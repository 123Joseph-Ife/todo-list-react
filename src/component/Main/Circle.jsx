const Circle = ({ list, handleCheck }) => {
  return (
    <div className="circle-container" onClick={() => handleCheck(list.id)}>
      <div
        className="circle"
      >
        <div className="text"></div>
      </div>
      <div 
        className="img-container"
        style={
          list.checked === false ? { display: "none" } : { display: "flex" }
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
      </div>
    </div>
  );
};

export default Circle;
