import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { calculateAspectRatioFit, getImage } from "../utils";

export function ImageView({ id }: { id: string }) {
  const data = getImage(id);

  const { height, width } = calculateAspectRatioFit(
    data.width,
    data.height,
    window.screen.width,
    window.screen.height + 200
  );

  return (
    <FullScreenImageContainer initial={{ backgroundColor: 'transparent' }} exit={{ backgroundColor: 'transparent' }} animate={{ backgroundColor: 'black' }}>
      <FullScreenImage height={height} width={width} animate layoutId={data.url} src={data.url} />
    </FullScreenImageContainer>
  );
}

const FullScreenImageContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const FullScreenImage = styled(motion.img)<{ width: number; height: number }>`
  flex: 1;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;
`;
