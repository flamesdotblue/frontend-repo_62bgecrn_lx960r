import React from 'react';
import { ShoppingBag, Shield, Truck, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Pastel-first aesthetic',
    desc: 'Soft, minimalist tones crafted for a calm, elegant shopping experience.',
  },
  {
    icon: ShoppingBag,
    title: 'Curated collections',
    desc: 'Weekly drops with limited pieces designed to mix and match effortlessly.',
  },
  {
    icon: Truck,
    title: 'Free express shipping',
    desc: 'Complimentary 48h delivery on orders over $75 across the US & EU.',
  },
  {
    icon: Shield,
    title: 'Secure checkout',
    desc: 'PCI compliant payments and multi-layer fraud protection for peace of mind.',
  },
];

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-gray-900 sm:text-4xl">Designed for everyday elegance</h2>
        <p className="mt-3 text-gray-600">
          Thoughtful details and a smooth shopping flow tailored to women-led lifestyles.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-pink-100 bg-white/70 p-5 backdrop-blur transition hover:shadow-lg">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600 ring-1 ring-pink-100">
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
