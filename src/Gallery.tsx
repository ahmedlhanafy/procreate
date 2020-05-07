import * as React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useParams } from "react-router-dom";
import { ImageView } from "./components/ImageViewer";
import { RenameView } from "./components/RenameView";
import { TopBar } from "./components/TopBar";
import { IoIosOptions, IoIosFolderOpen, IoIosBrush } from "react-icons/io";
import { MenuTitle, Menu, MenuRow } from "./components/Menu";
import { IconType } from "react-icons/lib/cjs";
import { CirclePicker } from "react-color";
import { getImages } from "./utils";
import { ImageCell } from "./components/ImageCell";

export function Gallery() {
  const images = getImages().slice(0, 24);
  const { id, renameId } = useParams<{ id: string; renameId: string }>();
  const [selectionColor, setSelectionColor] = React.useState("#147EFB");
  const [displayedMenuIndex, setDisplayedMenuIndex] = React.useState(-1);
  const [{ x, y }, setXY] = React.useState({ x: 0, y: 0 });
  const menu1Items = ["Framer", "Sketch", "Figma", "Upload file"];
  const menu2Items = [
    "Change dimensions",
    "Contrast",
    "Brightness",
    "Saturation",
    "Font",
    "Image effects",
    "Zoom level"
  ];
  const icons: IconType[] = [IoIosFolderOpen, IoIosOptions, IoIosBrush];

  const handleMenuClose = () => {
    setDisplayedMenuIndex(-1);
  };

  const handleMenuOpen = (target: HTMLElement, menu: number) => {
    const { x, y, width } = target.getBoundingClientRect();
    setXY({ x: x + width / 2, y: y + 30 });
    setDisplayedMenuIndex(menu);
  };

  return (
    <AnimateSharedLayout>
      <Container>
        <TopBar>
          <AnimatePresence>
            {id &&
              icons.map((Icon, index) => (
                <IconButton
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  key={index}
                  onClick={(event) => {
                    handleMenuOpen(event.target as HTMLElement, index);
                  }}
                >
                  <Icon color={displayedMenuIndex === index ? selectionColor : "white"} size={24} />
                </IconButton>
              ))}
          </AnimatePresence>
        </TopBar>

        <ImagesWrapper>
          {images.map((image) => (
            <ImageCell id={image.id} key={image.id} />
          ))}
        </ImagesWrapper>
        <AnimatePresence>{renameId && <RenameView key="rename-view" id={renameId} />}</AnimatePresence>
        <AnimatePresence>{id && <ImageView key="rename-view" id={id} />}</AnimatePresence>

        <Menu open={displayedMenuIndex === 0} x={x} y={y} onClose={handleMenuClose}>
          <MenuTitle animate>Import</MenuTitle>

          {menu1Items.map((item) => (
            <MenuRow>{item}</MenuRow>
          ))}
        </Menu>

        <Menu open={displayedMenuIndex === 1} x={x} y={y} onClose={handleMenuClose}>
          <MenuTitle animate>Settings</MenuTitle>

          {menu2Items.map((item) => (
            <MenuRow>{item}</MenuRow>
          ))}
        </Menu>

        <Menu open={displayedMenuIndex === 2} x={x} y={y} onClose={handleMenuClose}>
          <MenuTitle animate>Color</MenuTitle>

          <ColorsWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <CirclePicker onChange={(color) => setSelectionColor(color.hex)} />
          </ColorsWrapper>
        </Menu>
      </Container>
    </AnimateSharedLayout>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ImagesWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 56px;
`;

const IconButton = styled(motion.button)`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0px 32px;
`;

const ColorsWrapper = styled(motion.div)`
  padding: 16px;
  padding-bottom: 32px;
`;
