import colors from './colors';

const headingBase = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
};

const headings = {
  h1: {
    ...headingBase,
    fontSize: 5
  },
  h2: {
    ...headingBase,
    fontSize: 4
  },
  h3: {
    ...headingBase,
    fontSize: 3
  },
  h4: {
    ...headingBase,
    fontSize: 2
  },
  h5: {
    ...headingBase,
    fontSize: 1
  },
  h6: {
    ...headingBase,
    fontSize: 0
  }
};

export default {
  initialColorMode: `light`,
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace'
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
    body: 'normal',
    caps: '0.2em'
  },
  breakpoints: [
    ['phone_small', 320],
    ['phone', 376],
    ['phablet', 540],
    ['tablet', 735],
    ['desktop', 1070],
    ['desktop_medium', 1280],
    ['desktop_large', 1440]
  ],
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
      // ...headings
    },
    ...headings,
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  }
};
