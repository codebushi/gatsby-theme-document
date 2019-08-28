const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading"
};

export default {
  initialColorMode: `light`,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "hsl(240, 100%, 57%)",
    secondary: "hsl(260, 100%, 57%)",
    accent: "hsl(280, 100%, 57%)",
    muted: "#f9f9fc",
    gray: "#555",
    modes: {
      black: {
        text: "#fff",
        background: "#000",
        primary: "#0ff",
        secondary: "#0fc",
        accent: "#f0f",
        muted: "#111",
        gray: "#888"
      },
      dark: {
        text: "#fff",
        background: "hsl(180, 5%, 15%)",
        primary: "hsl(180, 100%, 57%)",
        secondary: "hsl(50, 100%, 57%)",
        accent: "hsl(310, 100%, 57%)",
        muted: "hsl(180, 5%, 5%)",
        gray: "hsl(180, 0%, 70%)"
      },
      deep: {
        text: "#fff",
        background: "hsl(230,25%,18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "hsl(260, 20%, 40%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "hsl(210, 50%, 60%)"
      },
      hack: {
        text: "hsl(120, 100%, 75%)",
        background: "hsl(120, 20%, 10%)",
        primary: "hsl(120, 100%, 40%)",
        secondary: "hsl(120, 50%, 40%)",
        accent: "hsl(120, 100%, 90%)",
        muted: "hsl(120, 20%, 7%)",
        gray: "hsl(120, 20%, 40%)"
      },
      pink: {
        text: "hsl(350, 80%, 10%)",
        background: "hsl(350, 100%, 90%)",
        primary: "hsl(350, 100%, 50%)",
        secondary: "hsl(280, 100%, 50%)",
        accent: "hsl(280, 100%, 20%)",
        muted: "hsl(350, 100%, 88%)",
        gray: "hsl(350, 40%, 50%)"
      }
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em"
  },
  breakpoints: [
    ["phone_small", 320],
    ["phone", 376],
    ["phablet", 540],
    ["tablet", 735],
    ["desktop", 1070],
    ["desktop_medium", 1280],
    ["desktop_large", 1440]
  ],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      ...heading,
      fontSize: 5
    },
    h2: {
      ...heading,
      fontSize: 4
    },
    h3: {
      ...heading,
      fontSize: 3
    },
    h4: {
      ...heading,
      fontSize: 2
    },
    h5: {
      ...heading,
      fontSize: 1
    },
    h6: {
      ...heading,
      fontSize: 0
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    }
  }
};
