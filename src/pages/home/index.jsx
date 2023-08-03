import {
  Container,
  Swapper,
  Card,
  Top,
  Film,
  Logo,
  Recomendation,
  Movie,
  Section,
  Stars,
  Image,
  Poster,
  DivInfo,
  Time,
  Launch,
  PlayerTrailer,
} from "./styles";
import logo from "./../../assets/logo.svg";
import btn from "./../../assets/btn.svg";

import { CalendarBlank, Star, Globe, Lightning } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [movies, setMovies] = useState([]);
  console.log("Chave de API:", apiKey);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function fetchMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "Accept-Language": "pt-BR",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      if (response.ok) {
        const data = await response.json();
        return data.results;
      } else {
        console.error(
          "Erro ao buscar filmes:",
          response.status,
          response.statusText
        );
        return [];
      }
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      return [];
    }
  }

  async function fetchAndShuffleMovies() {
    try {
      const initialMovies = await fetchMovies();
      const shuffledMovies = shuffleArray([...initialMovies]);
      setMovies(shuffledMovies);
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
    }
  }

  useEffect(() => {
    fetchAndShuffleMovies();
  }, []);

  return (
    <Container>
      <Swapper
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Top>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <button onClick={fetchAndShuffleMovies}>
            Nova Recomendação
            <div>
              <Lightning size={18} color="#ffffff" />
            </div>
          </button>
        </Top>
        <Card>
          {movies.length > 0 ? (
            movies.slice(0, 3).map((movie) => (
              <Film
                key={movie.id}
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Recomendation>
                  <Movie>
                    <Section>
                      <div className="title">
                        <h1>{movie.title}</h1>
                      </div>
                      <Stars>
                        <Star size={16} color="#FEEA35" weight="fill" />
                        <span>{movie.vote_average}</span>
                      </Stars>
                    </Section>
                    <Image>
                      <Poster
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        loading="lazy"
                        alt={movie.title}
                      />
                      <DivInfo>
                        <Time>
                          <Globe size={20} color="#8b8d9d" />
                          <span>{movie.original_language}/pt-BR</span>
                        </Time>
                        <Launch>
                          <CalendarBlank size={20} color="#8b8d9d" />
                          <span>{movie.release_date.slice(0, 4)}</span>
                        </Launch>
                      </DivInfo>
                      <a
                        href={`https://www.youtube.com/watch?v=${movie.videos[0]?.key}`}
                      >
                        <PlayerTrailer>
                          <img src={btn} alt="Assistir trailer" />
                          assistir trailer
                        </PlayerTrailer>
                      </a>
                    </Image>
                  </Movie>
                </Recomendation>
              </Film>
            ))
          ) : (
            <p>Carregando filmes...</p>
          )}
        </Card>
      </Swapper>
    </Container>
  );
}

export default Home;
