import * as React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ImageData } from "./types";
import { getRandomImages, calculateAspectRatioFit } from "./utils";
import { Link, useParams } from "react-router-dom";
import { ImageView } from "./ImageViewer";
import { ImageCell, ImageContainer } from "./ImageCell";
import { BlurView } from "./Menu";
import { RenameView } from "./RenameView";

export function Gallery() {
  const { id, renameId } = useParams<{ id: string; renameId: string }>();
  const [images] = React.useState<ImageData[]>(getRandomImages().slice(0, 10));

  return (
    <AnimateSharedLayout>
      {id ? (
        <ImageView id={id} />
      ) : (
        <>
          <ImagesWrapper>
            {images.map((image) => (
              <ImageCell id={image.id} key={image.id} />
            ))}
          </ImagesWrapper>
          <AnimatePresence>{renameId && <RenameView key={"rename-view"} id={renameId} />}</AnimatePresence>
        </>
      )}
    </AnimateSharedLayout>
  );
}

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
