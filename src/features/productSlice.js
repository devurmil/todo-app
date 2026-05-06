import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { list: [], loading: false },
  reducers: {
    addProduct: (s, a) => { s.list.push(a.payload); },
    updateProduct: (s, a) => {
      const i = s.list.findIndex(p => p.id === a.payload.id);
      if (i !== -1) {
        s.list[i] = a.payload;
      }
    },
    deleteProduct: (s, a) => {
      s.list = s.list.filter(p => p.id !== a.payload);
    },
  },
  extraReducers: (b) => {
    b.addCase(fetchProducts.pending, (s) => { s.loading = true; })
      .addCase(fetchProducts.fulfilled, (s, a) => {
        s.loading = false;
        s.list = a.payload;
      });
  },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;