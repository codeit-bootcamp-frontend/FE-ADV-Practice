import React from "react";

function UpperInput() {
  const [upper, setUpper] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpper(e.currentTarget.value.toUpperCase());
  return (
    <div>
      <label htmlFor="upper">Upper</label>
      <input id="upper" value={upper} onChange={handleChange} />
    </div>
  );
}

export default UpperInput;
