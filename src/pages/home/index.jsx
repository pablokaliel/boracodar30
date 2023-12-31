import { Container, Swapper, Card, Top, Film, Logo, Recommendations, SecondCardBg, ThirdCardBg, Movie, Section, Stars, Image, Poster, DivInfo, Time, Launch, PlayerTrailer } from "./styles";
import { useState, useEffect } from "react";

import logo from "./../../assets/logo.svg";
import { CalendarBlank, Star, Globe, Lightning, Note } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [background, setBackground] = useState( "linear-gradient(45deg, #181920, #323242)" );
  const [loading, setLoading] = useState(false);
  const [showRetry, setShowRetry] = useState(false);

  const isDesktop = window.innerWidth >= 768;

  const handleButtonClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowRetry(true);

      setTimeout(() => {
        setShowRetry(false);
      }, 3000);
    }, 2000);
  };

  const handleMouseEnter = (index) => {
    switch (index) {
      case 0:
        setBackground("linear-gradient(45deg,#1a6d5d, #031d1c)");
        break;
      case 1:
        setBackground(SecondCardBg);
        break;
      case 2:
        setBackground(ThirdCardBg);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = () => {
    setBackground("linear-gradient(45deg, #1e1f28, #2b2b37)");
  };

  async function fetchMovies() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`
      );

      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      return [];
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container style={{ background: background, transition: "background 10s" }}>
      <Swapper
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Top>
          <Logo>
             <img src={logo} alt="" />
          </Logo>
          <button onClick={handleButtonClick}>
            {loading
              ? "Carregando..."
              : showRetry
              ? "Tente novamente"
              : "Nova Recomendação"}
            <div>
              <Lightning size={18} color="#ffffff" />
            </div>
          </button>
        </Top>

        <Card>
          {movies.length >= 3 ? (
            <>
              {movies.slice(0, 3).map((movie, index) => (
                <Film 
                as={Link} to={`/movie/${movie.id}`}
                  key={movie.id}
                  initial={isDesktop ? { y: "120%" } : {}}
                  animate={isDesktop ? { y: 0 } : {}}
                  transition={isDesktop ? { duration: 0.5, delay: 1.1 } : {}}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Recommendations>
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

                        <PlayerTrailer to={`/movie/${movie.id}`}>
                          <Note size={24} color="#8b8d9b" />
                          Ver Sinopse
                        </PlayerTrailer>
                      </Image>
                    </Movie>
                  </Recommendations>
                </Film>
              ))}
            </>
          ) : (
            <p>Carregando filmes...</p>
          )}
        </Card>
      </Swapper>
    </Container>
  );
}
