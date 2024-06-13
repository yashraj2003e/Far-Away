import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import { Stats } from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure to delete everything on the list ?"
    );

    if (confirmed) {
      setItems((i) => []);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleToggleItem={handleToggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
