import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { useColorMode } from "theme-ui";
import { globalStyles } from "../styles";

const modes = ["light", "black", "dark", "deep", "hack", "pink"];

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();

  const cycleColorMode = e => {
    const i = modes.indexOf(colorMode);
    const n = (i + 1) % modes.length;
    setColorMode(modes[n]);
  };

  return (
    <Container>
      <Global styles={globalStyles} />
      <button onClick={cycleColorMode}>Toggle Color</button>
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: background 0.25s var(--ease-in-out-quad);
  min-height: 100vh;
`;

export default Layout;
