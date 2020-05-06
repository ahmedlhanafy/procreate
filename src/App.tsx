import React from "react";
import styled, { css } from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Menu, MenuRow, MenuTitle } from "./Menu";

export default function App() {
  const [menuShown, setMenuShown] = React.useState(-1);
  const [hamada, setHamada] = React.useState(true);
  const [{ x, y }, setXY] = React.useState({ x: 0, y: 0 });
  const menu1Items = ["Info", "About", "Contact us"];
  const menu2Items = ["Labeling", "Interactions", "Trellis", "Extractor", "Classifier"];

  const closeMenu = () => {
    setMenuShown(-1);
  };

  const openMenu = (target: HTMLElement, menu: number) => {
    const { x, y, width } = target.getBoundingClientRect();
    setXY({ x: x + width / 2, y: y + 30 });
    setMenuShown(menu);
  };

  return (
    <AnimateSharedLayout>
      <a
        style={{ marginRight: 80 }}
        href="#"
        onClick={(event) => {
          openMenu(event.target as HTMLElement, 0);
        }}
      >
        Home
      </a>
      <a
        style={{ marginRight: 80 }}
        href="#"
        onClick={(event) => {
          openMenu(event.target as HTMLElement, 1);
        }}
      >
        Labeling
      </a>

      <Menu open={menuShown === 0} x={x} y={y} onClose={closeMenu}>
        <MenuTitle animate>Canvas</MenuTitle>

        {menu1Items.map((item) => (
          <MenuRow>{item}</MenuRow>
        ))}
      </Menu>

      <Menu open={menuShown === 1} x={x} y={y} onClose={closeMenu}>
        <MenuTitle animate>Labeling</MenuTitle>

        {menu2Items.map((item) => (
          <MenuRow onClick={() => setHamada((s) => !s)}>{item}</MenuRow>
        ))}
      </Menu>
      <img src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </AnimateSharedLayout>
  );
}
