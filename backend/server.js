const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products');
const brandRoutes = require('./routes/brands');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/brands', brandRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('Mobile Magic API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
