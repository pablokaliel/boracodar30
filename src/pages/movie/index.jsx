import { Container, Swapper, DivBtn, ButtonShare, ButtonTrailer, DivImage, Poster, DivInfo, DivMovie, Top, Logo, DivTitle, Title, Launch, Stars, DivNotion, DivSinopse, Sinopse, PlayerTrailer } from "./styles";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ArrowLeft, Clock, FilmSlate, ShareNetwork, Star, Wallet } from "@phosphor-icons/react";
import btn from "./../../assets/btn.svg";
import logo from "./../../assets/logo.svg";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);

  const formatCurrency = (number) => {
    const million = 1000000;
    const adjustedValue = number / million;
    return adjustedValue.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  async function fetchMovieDetail() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
      );
      const data = await response.json();
      setMovie(data);
      setGenres(data.genres); // Define o array de gêneros
    } catch (err) {
      console.error("Erro ao buscar filme:", err);
      setMovie(null);
    }
  }

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  return (
    <Container>
      {movie ? (
        <>
          <Swapper
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >

            <Top>
              <Logo>
                <img src={logo} alt="" />
              </Logo>
              <PlayerTrailer to={`/`}>
                <ArrowLeft size={18} color="#ffffff" />
                Voltar a Home
              </PlayerTrailer>
            </Top>

            <DivMovie>
              <DivImage>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  loading="lazy"
                  alt={movie.title}
                />
                <DivBtn>
                  <ButtonTrailer>
                    <img src={btn} />
                    Assistir trailer
                  </ButtonTrailer>
                  <ButtonShare>
                    <div>
                      <ShareNetwork size={28} color="#a754fa" />
                    </div>
                  </ButtonShare>
                </DivBtn>
              </DivImage>

              <DivInfo>
                <DivTitle>
                  <Title>{movie.title}</Title>
                  <Launch>
                    <span>({movie.release_date.slice(0, 4)})</span>
                  </Launch>
                  <Stars>
                    <Star size={16} color="#FEEA35" weight="fill" />
                    <span>{movie.vote_average}</span>
                  </Stars>
                </DivTitle>

                <DivNotion>
                  <div>
                    <Clock size={24} color="#8b8d9b" />
                    <span>{movie.runtime}min</span>
                  </div>
                  <div>
                    <Wallet size={24} color="#8b8d9b" />
                    <span>{formatCurrency(movie.budget)}mi</span>
                  </div>
                  {genres.map((genre) => (
                    <div key={genre.id}>
                      <FilmSlate size={24} color="#8b8d9b" />
                      <span>{genre.name}</span>
                    </div>
                  ))}
                </DivNotion>

                <DivSinopse>
                  <p>{movie.tagline}</p>
                  <Sinopse>
                    <h3>Sinopse</h3>
                    <span>{movie.overview}</span>
                  </Sinopse>
                </DivSinopse>
              </DivInfo>
            </DivMovie>
          </Swapper>
        </>
      ) : (
        <p>Carregando detalhes do filme...</p>
      )}
    </Container>
  );
}
