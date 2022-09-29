import React, { useEffect, useState } from "react";
import "./Home.css";
import anime from "../../Assets/anime.jpg";
import NewRealeaseCard from "../../Components/NewRealeaseCard/NewRealeaseCard";
import axios from "axios";
// import anime2 from "../../Assets/anime2.jpg";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [visible, setVisible] = useState(4);

  function loadMoreHandler() {
    setVisible((prev) => prev + 4);
  }
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=c7e468afc519494bebc9385a5a602ddc&language=en-US&page=1"
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="home__container">
      <section className="section__container1">
        <div className="container1_div">
          <div className="heading__container">
            <h2 className="heading">Explore</h2>
            <p className="question">What are you gonna watch today ?</p>
            <div className="bg_image">
              <img src={anime} alt="" />
            </div>
            <div className="image_overlay">
              <h2>Weather with you</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                impedit laborum id quibusdam in, omnis repellendus accusantium
                corrupti vitae nobis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section__container2">
        <div className="new_realease">
          <h2>Trending Movies</h2>
        </div>
        <div className="cardsContainer">
          {movies?.slice(0, visible).map((movie, index) => {
            return <NewRealeaseCard key={index} movie={movie} />;
          })}
        </div>
        {visible !== 20 ? (
          <div className="loadMore">
            <button onClick={loadMoreHandler}>Load more</button>
          </div>
        ) : (
          ""
        )}
      </section>
    </main>
  );
};

export default Home;
