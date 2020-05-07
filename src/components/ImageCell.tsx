import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getImage, calculateAspectRatioFit } from "../utils";
import { Link, useHistory } from "react-router-dom";

export function ImageCell({ id }: { id: string }) {
  const history = useHistory();
  const data = getImage(id);
  const { author, url, height, width, id: imageId } = data;
  const size = calculateAspectRatioFit(width, height, 200, 200);

  return (
    <ImageCellWrapper to={`/${imageId}`}>
      <Image animate layoutId={url} height={size.height} width={size.width} src={url} />
      <TextContainer
        onClick={(e) => {
          e.preventDefault();
          history.push(`/rename/${imageId}`);
        }}
      >
        <ImageName>{author}</ImageName>
        <ImageSize>
          {width}x{height}px
        </ImageSize>
      </TextContainer>
    </ImageCellWrapper>
  );
}

export function ImageContainer({ id, onClick }: { onClick?: () => void; id: string }) {
  const data = getImage(id);
  const { url, height, width } = data;
  const size = calculateAspectRatioFit(width, height, 200, 200);

  return (
    <ImageCellWrapper2 onClick={onClick} width={width}>
      <Image animate layoutId={url} height={size.height} width={size.width} src={url} />
    </ImageCellWrapper2>
  );
}

const ImageCellWrapper2 = styled.div<{ width: number }>`
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const ImageName = styled.h2`
  font-weight: bold;
  font-size: 16px;
  color: white;
  text-decoration: none;
  margin: 0;
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
