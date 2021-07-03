import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Fab from "@material-ui/core/Fab";
import className from "classnames";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  btn: {
    position: "relative",
    right: "115px",
    backgroundColor: "orange",
    color: "white",
    width: "36px",
    height: "36px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "darkorange"
    }
  },
  actionBtn: {
    width: "300px",
    height: "30px",
    borderRadius: "5px",
    background: "orange",
    color: "white",
    borderColor: "white",
    "&:hover": {
      backgroundColor: "darkorange"
    }
  }
});
const MovieDetail = ({
  movie: {
    id,
    originalTitle: name,
    year,
    genres,
    duration,
    imdbRating,
    posterUrl,
    storyline,
    directors,
    actors,
    writers
  }
}) => {
  const [active, setActive] = useState(true);
  const [add, setAdd] = useState(true);
  const imageClass = classNames("hero-image", {
    "hero-image_afterButton": active === false
  });

  const outerWrapper = className("outer-wrapper", {
    "outer-wrapper_afterButton": active === false
  });

  const score = className("score", { score_afterButton: active === false });
  const movieName = className("movie-name", {
    "movie-name_afterButton": active === false
  });
  const header = className("header", {
    header_afterButton: active === false
  });
  const classes = useStyles();
  return (
    <div>
      <div className="front-page">
        <div className={outerWrapper}>
          <img className={imageClass} src={posterUrl} alt="poster" />
          {active ? null : (
            <Fab
              onClick={() => setAdd(!add)}
              size="small"
              className={classes.btn}
            >
              {add ? <AddIcon /> : <RemoveIcon />}
            </Fab>
          )}
          <div className={header}>
            <h1 className={movieName}>{name}</h1>

            <div className="score-bar">
              <div className={score}>
                <strong>{imdbRating.toFixed(1)}</strong>
                {active && <span>/10</span>}
              </div>
              {active && (
                <h5 className="movie-years">
                  {year} - {genres.join("/")} -
                  {parseInt(duration.slice(2, 5) / 60, 10)}h{" "}
                  {duration.slice(2, 5) % 60}min
                </h5>
              )}

              <div className="progressBar_afterButton">
                <progress
                  id={!active ? "second" : null}
                  value={imdbRating * 10}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <div className="details">
            {!active && (
              <div className="movie-content">
                <h5 className="movie-years">
                  {year} - {genres.join("/")} -
                  {parseInt(duration.slice(2, 5) / 60, 10)}h{" "}
                  {duration.slice(2, 5) % 60}min
                </h5>
                <p>{storyline}</p>
                <hr />
                <p>
                  <span className="director-title">Director: </span>
                  {directors.join(", ")}
                </p>
                <p>
                  <span className="director-title">Writers: </span>
                  {writers.join(", ")}
                </p>
                <p>
                  <span className="director-title">Actors: </span>
                  {actors.join(", ")}
                </p>
                <div className="break">
                  <Button
                    className={classes.actionBtn}
                    onClick={() => setAdd(!add)}
                    variant="contained"
                  >
                    {add ? " + ADD TO WATCHLİST" : " - REMOVE TO WATCHLİST"}
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="break">
            {active && (
              <Button
                onClick={() => setActive(!active)}
                className={classes.actionBtn}
              >
                MOVIE DETAILS
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
