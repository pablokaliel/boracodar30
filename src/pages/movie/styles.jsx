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
  max-width: 886px;

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

export const Info = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const Description = styled.div`
  .desc {
    display: flex;
    align-items: center;

    gap: 12px;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-size: 20px;
    font-style: normal;
    color: #fff;
    font-weight: 500;
  }

  h1 {
    color: #8b8d9b;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const DivImage = styled.div``;

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
  width: 320px;
  height: 470px;

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
