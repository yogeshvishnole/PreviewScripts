import React from "react";

const Form = ({ onFormValueUpdated }) => {
  return (
    <div>
      <form>
        <select onChange={e => onFormValueUpdated(e.target.value)}>
          <option>left</option>
          <option>right</option>
          <option>up</option>
          <option>down</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
