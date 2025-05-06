export interface Startup {
  _id: string;
  _createdAt: string;
  views: string;
  author: {
    _id: string;
    bio: string;
    image: string;
    name: string;
  };
  title: string;
  avatar: string;
  description: string;
  image: string;
  level: string;
}

export interface StartupCardProps {
  data: Startup;
}
