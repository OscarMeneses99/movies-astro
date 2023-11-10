export const searchByTitle = async (title) => {
  if (title === undefined) {
    const url = "https://movies-backend.3.us-1.fl0.io/api/movies";
    const movies = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return movies;
  } else if (title !== undefined) {
    const url = `https://movies-backend.3.us-1.fl0.io/api/movies?title=${title}`;
    const movies = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return movies;
  }
};
