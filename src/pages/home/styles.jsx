import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(90deg, #9f55ff 0%, #ff46b9 100%)

`;

export const Swapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  padding: 64px 96px;
  gap: 36px;
  
  background: #fff;
  border-radius: 16px;
  background: #1e1f28;
  box-shadow: 0px -3px 22px 0px rgba(0, 0, 0, 0.35);
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

export const Film = styled(motion.div)`
  width: 194px;
  padding: 6px;

  border-radius: 8px;

  transition: all 0.3s;

  &:hover {
    scale: 1.07;
    background-color: #30323d;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 654px;

  button {
    display: flex;
    align-items: center;

    padding: 8px 16px;
    gap: 8px;

    border-radius: 4px;
    border: 0;

    background: linear-gradient(90deg, #8323ff 0%, #ff2daf 100%
    );
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
`;

export const Logo = styled.div``;

export const Recomendation = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 36px;
`;

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 12px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  .center {
    display: flex;
    align-items: center;

    height: 40px;
  }

  .title {
    display: -webkit-box;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }

  span {
    color: #feea35;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const Poster = styled.img`
  width: 194px;
  height: 288px;

  border-radius: 8px;
`;

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;

  span {
    color: #8b8d9b;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const Launch = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;

  span {
    color: #8b8d9b;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const PlayerTrailer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 194px;

  padding: 8px 16px;
  gap: 8px;

  border-radius: 4px;
  background: #2b2b37;
  border: 0;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  transition: all 0.3s;

  &:hover {
    background: #373745;
  }
`;
