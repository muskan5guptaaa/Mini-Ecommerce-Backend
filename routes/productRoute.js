import express from 'express';
import { submitProduct, getProducts } from '../controllers/productController.js';

const router = express.Router();

router.post('/', submitProduct);
router.get('/', getProducts);

export default router;
