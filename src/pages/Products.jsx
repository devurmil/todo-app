import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../features/productSlice";
import ProductTable from "../components/ProductTable";

export default function Products() {
  const dispatch = useDispatch();
  const { list } = useSelector(s => s.products);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {dispatch(fetchProducts()); }, []);

  useEffect(() => {
    if (editingProduct) {
      setTitle(editingProduct.title);
      setPrice(editingProduct.price);
    }
  }, [editingProduct]);
  
  const handleUpdate = () => {
    dispatch(updateProduct({
      id: editingProduct.id,
      title,
      price
    }));

    setEditingProduct(null);
    setTitle("");
    setPrice("");
  };

  const handleAdd = () => {
    dispatch(addProduct({ id: Date.now(), title, price }));
    setTitle(""); setPrice("");
  };

  return (
    <div>
      <h2>Total Products: {list.length}</h2>

      <input placeholder="title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="price" value={price} onChange={e=>setPrice(e.target.value)} />
      {editingProduct ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add Product</button>
      )}

      <ProductTable
        products={list}
        onDelete={(id)=>dispatch(deleteProduct(id))}
        onEdit={(product)=>setEditingProduct(product)}
      />
    </div>
  );
}