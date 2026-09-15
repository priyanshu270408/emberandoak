const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const galleryImages = [
  {
    src: img('photo-1447933601403-0c6688de566e'),
    alt: 'Latte art in a warm ceramic cup',
    span: 'tall',
  },
  {
    src: img('photo-1414235077428-338989a2e8c0', 1400),
    alt: 'The dining room at dusk',
    span: 'wide',
  },
  {
    src: img('photo-1495474472287-4d71bcdd2085'),
    alt: 'A plate leaving the pass',
    span: 'small',
  },
  {
    src: img('photo-1552566626-52f8b828add9'),
    alt: 'Dessert, plated with care',
    span: 'small',
  },
  {
    src: img('photo-1504674900247-0877df9cc836', 1400),
    alt: 'Table set for two',
    span: 'wide',
  },
  {
    src: img('photo-1442512595331-e89e73853f31'),
    alt: 'The bar at golden hour',
    span: 'tall',
  },
]
