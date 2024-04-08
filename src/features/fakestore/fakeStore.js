import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk function
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        rate: product.rating.rate,
        image: product.image,
        count: product.rating.count,
      }));
    } catch (error) {
      throw error; // Let Redux Toolkit handle the error
    }
  }
);

// Define your slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    entities: [],
    loading: 'idle',
  },
  reducers: {
    // Add other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

// Export actions and reducer
// export const { /* other actions */, fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
