import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(45deg, #181920, #323242);

  @media (max-width: 770px) {
    height: initial;
  }
`;

export const Swapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 654px;

  padding: 64px 96px;
  gap: 36px;

  background: #fff;
  border-radius: 16px;
  background: #1e1f28;
  box-shadow: 0px -3px 22px 0px rgba(0, 0, 0, 0.35);

  @media (max-width: 770px) {
    width: 100%;
    height: 100%;

    padding: 12px 16px;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 770px) {
    align-items: center;
  }
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DivMovie = styled.div`
  display: flex;
  gap: 36px;

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    padding: 14px 16px;
    border-radius: 0px;
  }
`;

export const Poster = styled.img`
  width: 300px;
  height: 450px;

  border-radius: 8px;
`;

export const PlayerTrailer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  padding: 8px 16px;
  gap: 8px;

  border-radius: 4px;
  border: 0;

  background: linear-gradient(90deg, #8323ff 0%, #ff2daf 100%);
  color: #fff;

  transition: all 0.3s;

  &:hover {
    background: linear-gradient(90deg, #9f55ff 0%, #ff46b9 100%);
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  button {
    display: flex;
    align-items: center;

    padding: 8px 16px;
    gap: 8px;

    border-radius: 4px;
    border: 0;

    background: linear-gradient(90deg, #8323ff 0%, #ff2daf 100%);
    color: #fff;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;

      background: #e955cd;
      border-radius: 100%;
    }

    transition: all 0.3s;

    &:hover {
      background: linear-gradient(90deg, #9f55ff 0%, #ff46b9 100%);
    }
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const Logo = styled.div``;

export const DivBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonShare = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 12px;

  height: 3rem;

  background: rgb(43, 43, 55);
  color: rgb(255, 255, 255);

  border: none;
  border-radius: 4px;

  font-weight: 400;
  line-height: 140%;
  font-size: 1rem;

  transition: all 0.3s;

  &:hover {
    background: #373745;
  }

  div {
    width: 34px;
    height: 34px;

    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    background-color: #1e1f28;
  }
`;

export const ButtonTrailer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 194px;

  padding: 8px 16px;
  gap: 8px;

  border-radius: 4px;
  background: #2b2b37;
  border: 0;

  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  transition: all 0.3s;

  &:hover {
    background: #373745;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 44px;
  color: #fff;
`;

export const Launch = styled.div`
  span {
    font-size: 32px;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  span {
    font-size: 16px;
    color: #8b8d9b;
  }
`;

export const DivNotion = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  div {
    display: flex;
    align-items: center;

    gap: 5px;

    font-size: 16px;
    color: #8b8d9b;

    @media (max-width: 770px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 770px) {
    align-items: flex-start;
  }
`;

export const DivSinopse = styled.div`
  p {
    padding: 12px 0px;

    font-style: italic;
    font-size: 17px;
    color: #8b8d9b;
    font-weight: 100;
  }

  @media (max-width: 770px) {
    text-align: center;
  }
`;

export const Sinopse = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 650px;

  gap: 10px;
`;
