import { Container, Swapper, Info, Description, DivInfo, DivImage, Poster, PlayerTrailer, DivMovie } from "./styles";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ArrowLeft, BookOpen, Graph, Hourglass, Wallet } from "@phosphor-icons/react";

const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  async function fetchMovieDetail() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
      );
      const data = await response.json();
      setMovie(data);
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
            <DivMovie>
              <DivImage>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  loading="lazy"
                  alt={movie.title}
                />
              </DivImage>

              <DivInfo>
                <Info>
                  <Wallet size={32} color="#ffffff" />
                  <div className="desc">
                    <h1>Orçamento:</h1>
                    <span>{formatCurrency(movie.budget)}</span>
                  </div>
                </Info>
                <Info>
                  <Graph size={32} color="#ffffff" />
                  <div className="desc">
                    <h1>Receita:</h1>
                    <span>{formatCurrency(movie.revenue)}</span>
                  </div>
                </Info>
                <Info>
                  <Hourglass size={32} color="#ffffff" />
                  <div className="desc">
                    <h1>Duração:</h1>
                    <span>{movie.runtime} minutos</span>
                  </div>
                </Info>
                <Description>
                  <div className="desc">
                    <BookOpen size={32} color="#ffffff" />
                    <h1>Descrição:</h1>
                  </div>
                  <span>{movie.overview}</span>
                </Description>
              </DivInfo>

            </DivMovie>

            <PlayerTrailer to={`/`}>
              <ArrowLeft size={18} color="#ffffff" />
              Voltar a Home
            </PlayerTrailer>
          </Swapper>
        </>
      ) : (
        <p>Carregando detalhes do filme...</p>
      )}
    </Container>
  );
}

export default Movie;
