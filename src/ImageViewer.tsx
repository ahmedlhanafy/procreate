import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { calculateAspectRatioFit, getRandomImages } from "./utils";
import { useParams } from "react-router";

export function ImageView({ id }: { id: string }) {
  const data = getRandomImages().find((image) => image.id === id);

  const { height, width } = calculateAspectRatioFit(
    data.width,
    data.height,
    window.screen.width,
    window.screen.height - 100
  );

  return (
    <FullScreenImageContainer>
      <FullScreenImage height={height} width={width} animate layoutId={data.download_url} src={data.download_url} />
    </FullScreenImageContainer>
  );
}

const FullScreenImageContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FullScreenImage = styled(motion.img)<{ width: number; height: number }>`
  flex: 1;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;
`;
