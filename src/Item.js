export default function Item({ item, handleDeleteItems, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      ></input>
      <span
        style={
          item.packed
            ? { textDecoration: "line-through", marginLeft: "1rem" }
            : { marginLeft: "1rem" }
        }
      >
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => handleDeleteItems(item.id)}
        style={{ fontSize: "20px" }}
      >
        ❌
      </button>
    </li>
  );
}
