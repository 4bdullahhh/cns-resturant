import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Soups
  {
    id: 's1',
    name: 'Chicken Corn Soup',
    description: 'Classic creamy soup with shredded chicken and sweet corn.',
    price: 850,
    category: 'Soups',
    image: 'https://picsum.photos/seed/soup1/800/600',
    popular: true
  },
  {
    id: 's2',
    name: 'Hot & Sour Soup',
    description: 'Spicy and tangy soup with chicken, mushrooms, and vegetables.',
    price: 900,
    category: 'Soups',
    image: 'https://picsum.photos/seed/soup2/800/600'
  },
  // Starters
  {
    id: 'st1',
    name: 'Gyoza',
    description: 'Pan-fried dumplings filled with seasoned chicken and vegetables.',
    price: 1200,
    category: 'Starters',
    image: 'https://picsum.photos/seed/gyoza/800/600'
  },
  {
    id: 'st2',
    name: 'Drumsticks',
    description: 'Crispy fried chicken drumsticks with a spicy Chinese glaze.',
    price: 1100,
    category: 'Starters',
    image: 'https://picsum.photos/seed/drumsticks/800/600'
  },
  {
    id: 'st3',
    name: 'Prawn Balls',
    description: 'Golden fried minced prawn balls served with sweet chili sauce.',
    price: 1400,
    category: 'Starters',
    image: 'https://picsum.photos/seed/prawnballs/800/600'
  },
  {
    id: 'st4',
    name: 'Butterfly Prawns',
    description: 'Jumbo prawns breaded and fried to perfection.',
    price: 1600,
    category: 'Starters',
    image: 'https://picsum.photos/seed/prawns/800/600',
    popular: true
  },
  // Main Course
  {
    id: 'm1',
    name: 'Dragon Chicken',
    description: 'Spicy stir-fried chicken with cashews and dried red chilies.',
    price: 1550,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/dragonchicken/800/600',
    popular: true
  },
  {
    id: 'm2',
    name: 'Chilli Chicken',
    description: 'Classic Indo-Chinese style chicken with green chilies and bell peppers.',
    price: 1450,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/chillichicken/800/600'
  },
  {
    id: 'm3',
    name: 'Kung Pao Chicken',
    description: 'Authentic Szechuan style chicken with peanuts and vegetables.',
    price: 1600,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/kungpao/800/600'
  },
  {
    id: 'm4',
    name: 'Beijing Beef',
    description: 'Crispy beef strips tossed in a tangy and sweet sauce.',
    price: 1750,
    category: 'Main Course',
    image: 'https://picsum.photos/seed/beijingbeef/800/600'
  },
  // Rice & Noodles
  {
    id: 'rn1',
    name: 'Chicken Chowmein',
    description: 'Stir-fried noodles with chicken and fresh seasonal vegetables.',
    price: 1100,
    category: 'Rice & Noodles',
    image: 'https://picsum.photos/seed/chowmein/800/600',
    popular: true
  },
  {
    id: 'rn2',
    name: 'Vegetable Fried Rice',
    description: 'Fragrant jasmine rice stir-fried with mixed vegetables.',
    price: 950,
    category: 'Rice & Noodles',
    image: 'https://picsum.photos/seed/friedrice/800/600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Ahmed Khan',
    rating: 5,
    comment: 'Best Chinese food in Karachi! The Dragon Chicken is a must-try.',
    date: '2024-03-15'
  },
  {
    id: 'r2',
    author: 'Sara Malik',
    rating: 5,
    comment: 'Amazing soups and the ambiance is very premium. Highly recommended for family dinners.',
    date: '2024-03-10'
  },
  {
    id: 'r3',
    author: 'Zainab Ali',
    rating: 4,
    comment: 'Great service and authentic flavors. The Butterfly Prawns were delicious.',
    date: '2024-03-05'
  }
];
