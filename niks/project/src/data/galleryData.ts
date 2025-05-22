export interface GalleryItem {
  photos: {
    thumbnail: string;
    fullSize: string;
    alt: string;
    caption: string;
  }[];
  videos: {
    thumbnail: string;
    title: string;
    duration: string;
    embedUrl: string;
  }[];
}

export const galleryData: GalleryItem = {
  photos: [
    {
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullSize: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Concert crowd with hands in the air',
      caption: 'Electric atmosphere at the Main Stage'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullSize: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'DJ performing at night with colorful lights',
      caption: 'Late night set at the Tent Stage'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullSize: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Festival crowd enjoying concert',
      caption: 'Unforgettable moments with Violet Dreams'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullSize: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Aerial view of festival grounds',
      caption: 'Riverfront Park transformed for RHYTHM FEST'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullSize: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Band performing on stage',
      caption: 'Sonic Architects delivering an incredible performance'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullSize: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Festival attendees dancing',
      caption: 'Dancing into the sunset at River Stage'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullSize: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Light show at night concert',
      caption: 'Spectacular light show during Luna Wave'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullSize: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Festival food vendors',
      caption: 'Culinary delights from our food village'
    }
  ],
  videos: [
    {
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'RHYTHM FEST 2024 Highlights',
      duration: '3:45',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Electric Pulse Full Performance',
      duration: '8:12',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Behind the Scenes: Festival Setup',
      duration: '5:30',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Rhythm Collective Interview',
      duration: '4:15',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Sunset Sessions at River Stage',
      duration: '6:20',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'RHYTHM FEST 2025 Announcement',
      duration: '2:45',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ]
};