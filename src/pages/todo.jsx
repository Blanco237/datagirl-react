import React, { useEffect, useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...listAdd, { InputValue: inputValue, check: false }]);
    setInputValue('');
  };
  const handleCheckBox = (index) => {
    let newList = [...listAdd];
    newList[value].check = !newList[value].check;

    setList(newList);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add the task"
          value={inputValue}
          onChange={handleInput}
        />
        <button type="submit" style={{marginLeft: '0.5rem'}}>Add Task</button>
      </form>

      <ul style={{ listStyle: "none" }}>
        {list.map((item, index) => (
          <li>
            <input
              type="checkbox"
              name="checkbox"
              value={item.check}
              onChange={() => handleCheckBox(index)}
            />
            <label style={{marginLeft: '1rem', marginTop: '0.5rem'}}>{item.InputValue}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
2;
