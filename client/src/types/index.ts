export interface IMovie {
  name: string;
  image: string;
  genre: Array<string>;
  aggregateRating: {
    ratingValue: string;
  };
  duration: string;
  trailer: {
    description: string;
  };
}
