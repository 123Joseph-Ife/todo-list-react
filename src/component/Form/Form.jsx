const Form = ({ handleSubmit, newItem, setNewItem }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="circle-container">
        <div
          className="circle"
        >
          <div className="text"></div>
        </div>
      </div>
      <input 
        required
        type="text" className="input" 
        placeholder="Create new todo..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </form>
  );
};

export default Form;
