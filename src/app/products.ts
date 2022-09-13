export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  numberBought: number;
}

export const products = [
  {
    id: 1,
    name: 'Coffee Latte',
    price: 17,
    description: 'Rich Blended Coffee',
    numberBought: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 2,
    name: 'Caramel Frappuccino',
    price: 69,
    numberBought: 0,
    description: 'Rich Blended Frappuccino',
    imageUrl:
      'https://images.unsplash.com/photo-1612994503408-1749e15638b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 3,
    name: 'Caramel Ribbon',
    price: 29,
    numberBought: 0,
    description: 'Rich Blended Ribbon',
    imageUrl:
      'https://images.unsplash.com/photo-1565600444102-063f8a7a1e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=431&q=80',
  },
];
