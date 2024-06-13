export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>Start adding items to your list ✈️</p>
      </footer>
    );

  const len = items.filter((item) => item.packed === true).length;
  const totalItems = items.length;
  const packedItems = Math.round((len / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItems !== 100
          ? `You have ${totalItems} items on your list, and you are already packed
        ${len}(${packedItems}%)`
          : `You are ready to go ✈️`}
      </em>
    </footer>
  );
}
