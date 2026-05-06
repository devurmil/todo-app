export default function ProductTable({ products, onDelete, onEdit }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Title</th><th>Price</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.title}</td>
            <td>{p.price}</td>
            <td>
              <button onClick={()=>onEdit(p)}>Edit</button>
              <button onClick={() =>onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}