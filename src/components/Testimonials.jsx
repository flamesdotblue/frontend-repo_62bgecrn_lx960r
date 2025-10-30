import React from 'react';

const testimonials = [
  {
    name: 'Sofia A.',
    role: 'Founder, Atelier SO',
    quote:
      'Finally a store that feels calm and intentional. Checkout was seamless and the pieces elevate my daily routine.',
  },
  {
    name: 'Maya L.',
    role: 'Product Designer',
    quote:
      'The palette is gorgeous and everything mixes so well. Shipping was fast and customer support was lovely.',
  },
  {
    name: 'Erin C.',
    role: 'Art Director',
    quote:
      'Minimal, feminine, and comfortable. It feels like the app knows how I want to shop. New favorite.',
  },
];

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 p-8 ring-1 ring-pink-100 sm:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl">Loved by modern minimalists</h2>
          <p className="mt-2 text-gray-600">Real customers, real reviews.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-pink-100 bg-white/70 p-5 backdrop-blur">
              <blockquote className="text-sm text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-gray-900">
                {t.name}
                <span className="ml-2 font-normal text-gray-500">• {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
