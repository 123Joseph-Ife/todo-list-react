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
        <img
          src="src\assets\images\icon-check.svg"
        />
      </div>
    </div>
  );
};

export default Circle;
