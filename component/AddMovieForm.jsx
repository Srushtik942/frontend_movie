import { useState } from "react";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    director: "",
    actors: "",
    language: "",
    country: "",
    rating: "",
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "releaseYear" || name === "rating"
          ? parseInt(value) || ""
          : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://backend-movie-aljr.vercel.app/movies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add movie");
      }

      const data = await response.json();
      console.log("Movie added:", data);

      // Reset form
      setFormData({
        title: "",
        releaseYear: "",
        genre: "",
        director: "",
        actors: "",
        language: "",
        country: "",
        rating: "",
        plot: "",
        awards: "",
        posterUrl: "",
        trailerUrl: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Movie</h1>

      <label htmlFor="titleId">Title</label><br />
      <input
        type="text"
        id="titleId"
        name="title"
        value={formData.title}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="yearId">Release year</label><br />
      <input
        type="text"
        id="yearId"
        name="releaseYear"
        value={formData.releaseYear}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="genreId">Genre</label><br />
      <input
        type="text"
        id="genreId"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="directorId">Director</label><br />
      <input
        type="text"
        id="directorId"
        name="director"
        value={formData.director}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="actorId">Actors</label><br />
      <input
        type="text"
        id="actorId"
        name="actors"
        value={formData.actors}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="langId">Language</label><br />
      <input
        type="text"
        id="langId"
        name="language"
        value={formData.language}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="countryId">Country</label><br />
      <input
        type="text"
        id="countryId"
        name="country"
        value={formData.country}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="ratingId">Rating</label><br />
      <input
        type="text"
        id="ratingId"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="plotId">Plot</label><br />
      <input
        type="text"
        id="plotId"
        name="plot"
        value={formData.plot}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="awardsId">Awards</label><br />
      <input
        type="text"
        id="awardsId"
        name="awards"
        value={formData.awards}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="posterId">Poster Url</label><br />
      <input
        type="text"
        id="posterId"
        name="posterUrl"
        value={formData.posterUrl}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="trailerId">Trailer Url</label><br />
      <input
        type="text"
        id="trailerId"
        name="trailerUrl"
        value={formData.trailerUrl}
        onChange={handleChange}
      /><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMovieForm;
