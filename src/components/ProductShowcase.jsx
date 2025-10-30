import React from 'react';
import { Heart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Cloud Knit Set',
    price: '$68',
    color: 'Rose Milk',
    bg: 'bg-rose-50',
    ring: 'ring-rose-100',
  },
  {
    id: 2,
    name: 'Minimal Sling Bag',
    price: '$54',
    color: 'Vanilla',
    bg: 'bg-amber-50',
    ring: 'ring-amber-100',
  },
  {
    id: 3,
    name: 'Everyday Loafers',
    price: '$92',
    color: 'Dust',
    bg: 'bg-stone-50',
    ring: 'ring-stone-200',
  },
  {
    id: 4,
    name: 'Serene Hoodie',
    price: '$74',
    color: 'Lavender',
    bg: 'bg-violet-50',
    ring: 'ring-violet-100',
  },
];

const ProductCard = ({ item }) => {
  return (
    <div className={`group relative flex flex-col rounded-2xl border ${item.ring} ${item.bg} p-4 transition hover:shadow-lg`}>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/60">
        <div className="flex h-full items-center justify-center">
          <div className="relative h-24 w-24 rounded-xl bg-white shadow-inner ring-1 ring-black/5" />
        </div>
      </div>
      <button className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-pink-500 shadow ring-1 ring-pink-100 transition hover:bg-pink-50">
        <Heart size={18} />
      </button>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
          <span className="text-sm font-medium text-gray-700">{item.price}</span>
        </div>
        <p className="text-sm text-gray-500">{item.color}</p>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
        <button className="mt-3 w-full rounded-xl bg-gray-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
          Add to bag
        </button>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl">New arrivals</h2>
          <p className="mt-1 text-gray-600">Fresh pastel tones and elevated basics for your everyday wardrobe.</p>
        </div>
        <a href="#" className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-pink-700 ring-1 ring-pink-200 transition hover:bg-pink-50">
          View all
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
