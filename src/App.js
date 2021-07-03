import React from "react";
import MovieDetail from "./components/MovieDetail";
import "./styles1.scss";
function App() {
  const Movies = [
    {
      id: "0001",
      year: "1994",
      genres: ["Crime", "Drama"],
      duration: "PT142M",
      originalTitle: "The Shawshank Redemption",
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      writers: ["Stephen King"],
      directors: ["Frank Darabont"],
      storyline:
        "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
      posterUrl: "https://source.unsplash.com/random/300x600"
    },
    {
      id: "0002",
      year: "1972",
      genres: ["Crime", "Drama"],
      duration: "PT175M",
      originalTitle: "The Godfather",
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino", "James Caan"],
      writers: ["Mario Puzo", "Francis Ford Coppola"],
      directors: ["Francis Ford Coppola"],
      storyline:
        "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\nJ. S. Golden",
      posterUrl: "https://source.unsplash.com/random/300x600"
    },
    {
      id: "0003",
      year: "2008",
      genres: ["Action", "Crime", "Drama"],
      duration: "PT152M",
      originalTitle: "The Dark Knight",
      imdbRating: 5.0,
      directors: ["Christopher Nolan"],
      writers: ["Jonathan Nolan", "Christopher Nolan"],
      storyline:
        'Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman\'s struggle against the Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.                Written by\nLeon Lombardi',
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      posterUrl: "https://source.unsplash.com/random/300x600"
    }
  ];

  return (
    <div>
      {Movies.map((movie) => (
        <MovieDetail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
export default App;
