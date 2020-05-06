import * as React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ImageData } from "./types";
import { getRandomImages, calculateAspectRatioFit } from "./utils";
import { Link, useParams } from "react-router-dom";
import { ImageView } from "./ImageViewer";

export function ImageCell({ id, style }: { id: string; style?: React.CSSProperties }) {
  const data = getRandomImages().find((i) => i.id === id);
  const { author, download_url, height, width, id: imageId } = data;
  const size = calculateAspectRatioFit(width, height, 200, 200);

  return (
    <ImageCellWrapper to={`/${imageId}`} style={style}>
      <Image animate layoutId={download_url} height={size.height} width={size.width} src={download_url} />
      <ImageName to={`/rename/${imageId}`}>{author}</ImageName>
      <ImageSize>
        {width}x{height}px
      </ImageSize>
    </ImageCellWrapper>
  );
}

export function ImageContainer({
  id,
  style,
  onClick
}: {
  onClick?: () => void;
  id: string;
  style?: React.CSSProperties;
}) {
  const data = getRandomImages().find((i) => i.id === id);
  const { author, download_url, height, width, id: imageId } = data;
  const size = calculateAspectRatioFit(width, height, 200, 200);

  return (
    <ImageCellWrapper2 onClick={onClick} style={style}>
      <Image animate layoutId={download_url} height={size.height} width={size.width} src={download_url} />
    </ImageCellWrapper2>
  );
}

const ImageCellWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 24px;
  padding: 8px;
  color: white;
  text-decoration: none;
`;

const ImageCellWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 24px;
  padding: 8px;
  color: white;
  text-decoration: none;
  justify-content: flex-end;
`;

const ImageName = styled(Link)`
  margin-top: 12px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  text-decoration: none;
`;

const ImageSize = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
`;

export const Image = styled(motion.img)`
  display: flex;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 5px 5px #00000038;
`;
