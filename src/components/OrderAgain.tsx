import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Butterfly',
    price: 36,
    oldPrice: 57.53,
    // discount: 37,
    image: '/products/moon-tattoo.png',
  },
  {
    id: 2,
    name: 'freshol! Chilli - Green Long, Medi..',
    price: 15,
    oldPrice: 42.47,
    discount: 65,
    image: '/products/love-rose-tattoo.png',
    desc: '',
    weight: '250 g',
  },
  {
    id: 3,
    name: 'freshol! Mint Leaves - Cleaned, without..',
    price: 24.11,
    oldPrice: 30.14,
    discount: 20,
    image: '/dummy-mint.png',
    desc: '',
    weight: '100 g',
  },
];

const OrderAgain = () => (
  <section className="w-full py-2">
    <div className="flex items-center justify-between px-2 mb-2">
      <h2 className="text-lg font-semibold">Order again</h2>
      <button className="p-1">
        <span className="inline-block border border-gray-300 rounded-full px-2">{'>'}</span>
      </button>
    </div>
    <div className="flex gap-3 overflow-x-auto scrollbar-hide px-2 pb-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[40%] min-w-[40%] max-w-[40%] bg-white rounded-xl border border-gray-200 shadow-sm p-2 flex-shrink-0 relative"
        >
          {/* Product image */}
          <div className="relative w-full h-30 flex items-center justify-center mb-2">
            <Image
              src={product.image}
              alt={product.name}
              width={280}
              height={280}
              className="object-contain rounded"
            />
            {/* Plus button */}
            <button className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-md w-7 h-7 flex items-center justify-center shadow">
              <span className="text-2xl text-green-600 leading-none">+</span>
            </button>
          </div>
          {/* Price and old price */}
          <div className="flex items-end gap-2">
            <span className="text-base font-semibold">₹{product.price}</span>
            <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
          </div>
          {/* Product name */}
          <div className="text-xs text-gray-700 truncate">{product.name}</div>
          
        </div>
      ))}
    </div>
  </section>
);

export default OrderAgain; 