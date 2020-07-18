import React from "react";

function Selector({ handleChange, options }) {
  return (
    <div>
      <select
        className="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        defaultValue={"default"}
        onChange={handleChange}
      >
        <option value="default">Choose...</option>
        {options}
      </select>
    </div>
  );
}

export default Selector;
