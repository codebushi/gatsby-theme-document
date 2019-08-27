import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { ThemeProvider, useColorMode } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui";
import colors from "../gatsby-plugin-theme-ui/colors";
import { globalStyles } from "../styles";
import mediaqueries from "../styles/media";

const Layout = ({ children }) => {
  const [colorMode] = useColorMode();
  let finalTheme = theme;

  console.log(colorMode);

  if (colorMode === "dark") {
    finalTheme = Object.assign({}, theme, { colors: colors.modes[colorMode] });
  }

  return (
    <ThemeProvider theme={finalTheme}>
      <Global styles={globalStyles} />
      <FooterContainer>{children}</FooterContainer>
    </ThemeProvider>
  );
};

export default Layout;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;
