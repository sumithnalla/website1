export interface Venue {
  id: number;
  name: string;
  image: string;
  price: string;
  baseMembers: number;
  extraPersonCharge: string;
  decorationFee: string;
  screenSize: string;
  refundPolicy: string;
  slots: string[];
  features: string[];
}

export const venuesData: Venue[] = [
  {
    id: 1,
    name: 'Luna',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    price: '₹1999/-',
    baseMembers: 6,
    extraPersonCharge: '₹249/-',
    decorationFee: '₹499/-',
    screenSize: '120" screen with Dolby sound',
    refundPolicy: 'Refund if canceled 72 hours in advance',
    slots: [
      '9:30am - 12:30pm',
      '1:00pm - 4:00pm',
      '4:30pm - 7:30pm',
      '8:00pm - 9:30pm',
      '10:00pm - 1:00am'
    ],
    features: [
      'Premium sound system',
      'Comfortable seating',
      'Climate control',
      'Ambient lighting',
      'Refreshment service'
    ]
  },
  {
    id: 2,
    name: 'Rosa',
    image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg',
    price: '₹999/-',
    baseMembers: 2,
    extraPersonCharge: '₹249/-',
    decorationFee: '₹499/-',
    screenSize: '120" screen with Dolby sound',
    refundPolicy: 'Refund if canceled 72 hours in advance',
    slots: [
      '9:00am - 12:00pm',
      '12:30pm - 3:30pm',
      '4:00pm - 5:30pm',
      '6:00pm - 9:00pm',
      '9:30pm - 12:30am'
    ],
    features: [
      'Intimate setting',
      'Premium acoustics',
      'Mood lighting',
      'Private atmosphere',
      'Refreshment service'
    ]
  },
  {
    id: 3,
    name: 'Aura',
    image: 'https://images.pexels.com/photos/1597778/pexels-photo-1597778.jpeg',
    price: '₹1499/-',
    baseMembers: 4,
    extraPersonCharge: '₹249/-',
    decorationFee: '₹499/-',
    screenSize: '133" screen with Dolby sound',
    refundPolicy: 'Refund if canceled 72 hours in advance',
    slots: [
      '9:30am - 12:30pm',
      '1:00pm - 4:00pm',
      '4:30pm - 6:00pm',
      '6:30pm - 9:30pm',
      '10:00pm - 1:00am'
    ],
    features: [
      'Spacious layout',
      'Premium sound',
      'Ambient lighting',
      'Lounge area',
      'Refreshment service'
    ]
  },
  {
    id: 4,
    name: 'Mini Max',
    image: 'https://images.pexels.com/photos/2449095/pexels-photo-2449095.jpeg',
    price: '₹2499/-',
    baseMembers: 8,
    extraPersonCharge: '₹249/-',
    decorationFee: '₹499/-',
    screenSize: '165" screen with Dolby sound',
    refundPolicy: 'Refund if canceled 72 hours in advance',
    slots: [
      '10:00am - 1:00pm',
      '1:30pm - 4:30pm',
      '5:00pm - 6:30pm',
      '7:00pm - 10:00pm',
      '10:30pm - 1:00am'
    ],
    features: [
      'Largest screen size',
      'Premium sound system',
      'Party lighting',
      'Extended seating',
      'Full service options'
    ]
  }
];