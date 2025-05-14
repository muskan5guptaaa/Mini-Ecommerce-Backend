import { createProduct, getAllProducts } from '../models/productModel.js';

export const submitProduct = async (req, res) => {
  try {
    const { name, price, description, image_url } = req.body;
    if (!name || !price || !description) {
      return res.status(400).json({ message: 'All fields except image are required.' });
    }

    const newProduct = await createProduct({ name, price, description, image_url });
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error submitting product:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
