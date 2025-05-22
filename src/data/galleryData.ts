export interface GalleryItem {
  photos: {
    thumbnail: string;
    fullSize: string;
    alt: string;
    caption: string;
    venue: string;
  }[];
}

export const galleryData: GalleryItem = {
  photos: [
    {
      thumbnail: '/src/assets/gallery/minimax/minmax1.jpg',
      fullSize: '/src/assets/gallery/minimax/minmax1.jpg',
      alt: 'Mini Max Venue - Main View',
      caption: 'Mini Max - Premium Celebration Space',
      venue: 'Mini Max'
    },
    {
      thumbnail: '/src/assets/gallery/minimax/minmax2.jpg',
      fullSize: '/src/assets/gallery/minimax/minmax2.jpg',
      alt: 'Mini Max Venue - Interior',
      caption: 'Mini Max - Interior Design',
      venue: 'Mini Max'
    },
    {
      thumbnail: '/src/assets/gallery/minimax/minmax3.jpg',
      fullSize: '/src/assets/gallery/minimax/minmax3.jpg',
      alt: 'Mini Max Venue - Seating Area',
      caption: 'Mini Max - Comfortable Seating',
      venue: 'Mini Max'
    },
    {
      thumbnail: '/src/assets/gallery/minimax/minmax4.jpg',
      fullSize: '/src/assets/gallery/minimax/minmax4.jpg',
      alt: 'Mini Max Venue - Entertainment Setup',
      caption: 'Mini Max - Entertainment System',
      venue: 'Mini Max'
    }
  ]
};