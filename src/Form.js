import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setSelectVal] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const item = {
      description,
      quantity,
      packed: false,
      id: new Date(),
    };
    console.log(item);
    setDescription("");
    setSelectVal(1);
    onAddItems(item);
  }

  return (
    <form
      className="add-form"
      onSubmit={description.length > 0 ? handleSubmit : undefined}
    >
      <h3>What do you need for your trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setSelectVal(parseInt(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">ADD</button>
    </form>
  );
}
