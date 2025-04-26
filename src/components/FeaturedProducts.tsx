'use client';

import ProductCard from './ProductCard';

// Dummy data for featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    price: 40,
    originalPrice: 60,
    image: '/products/tomatoes.jpg',
    unit: '500g',
    discount: 33
  },
  {
    id: '2',
    name: 'Organic Bananas',
    price: 35,
    image: '/products/bananas.jpg',
    unit: '6 pcs',
  },
  {
    id: '3',
    name: 'Fresh Milk',
    price: 60,
    image: '/products/milk.jpg',
    unit: '1L',
  },
  {
    id: '4',
    name: 'Brown Bread',
    price: 45,
    originalPrice: 55,
    image: '/products/bread.jpg',
    unit: '400g',
    discount: 18
  },
  {
    id: '5',
    name: 'Fresh Eggs',
    price: 80,
    image: '/products/eggs.jpg',
    unit: '12 pcs',
  },
  {
    id: '6',
    name: 'Orange Juice',
    price: 120,
    originalPrice: 150,
    image: '/products/juice.jpg',
    unit: '1L',
    discount: 20
  },
  {
    id: '7',
    name: 'Potato Chips',
    price: 30,
    image: '/products/chips.jpg',
    unit: '150g',
  },
  {
    id: '8',
    name: 'Yogurt',
    price: 50,
    image: '/products/yogurt.jpg',
    unit: '500g',
  }
];

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <button className="text-green-600 hover:text-green-700 font-medium">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts; 