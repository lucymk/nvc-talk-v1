export default {
  colors: {
    text: "#231f20",
    background: "#f8f8f8",
    secondary: "#80c",
    muted: "#f6f6ff",
    green: "#50cfcf",
    gray: "#777",
    silver: "#999",
    red: "#ff725c",
  },
  gradients: {
    blue: "linear-gradient(to right, rgb(0, 156, 243), rgb(22, 214, 217))",
    pink: "linear-gradient(30deg,#6114cc,#fa7d78)",
    green: "linear-gradient(to right, rgb(22, 214, 217), rgb(150, 204, 41))",
  },
  fonts: {
    body: "Work Sans, sans-serif",
    heading: "Reglo, inherit",
    monospace: '"Roboto Mono", Menlo, monospace',
    ui: "system-ui, sans-serif",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    body: 500,
    heading: 700,
    bold: 700,
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  spacing: {
    none: "0",
    extraSmall: "0.5rem",
    small: "1rem",
    medium: "1.5rem",
    large: "3rem",
    extraLarge: "4rem",
    extraExtraLarge: "5rem",
    extraExtraExtraLarge: "6rem",
    fullHeight: "100%",
    fullWidth: "100%",
  },
  styles: {
    Slide: {
      fontFamily: "body",
      fontSize: [3, 4, 5, 6],
    },
    h1: {
      variant: "text.heading",
    },
    h2: {
      variant: "text.heading",
      margin: "0",
      padding: "spacing.small",
    },
    h3: {
      variant: "text.heading",
    },
    h4: {
      variant: "text.heading",
    },
    h5: {
      variant: "text.heading",
    },
    h6: {
      variant: "text.heading",
    },
    a: {
      color: "green",
      margin: "3rem 0",
      fontSize: "32px",
    },
    ul: {
      m: 0,
      margin: "3rem 0",
      fontSize: "32px",
    },
    ol: {
      m: 0,
    },
    inlineCode: {
      fontFamily: "monospace",
    },
    code: {
      fontFamily: "monospace",
    },
    pre: {
      fontFamily: "monospace",
      p: 3,
    },
    img: {
      maxWidth: "100%",
      height: "auto",
      objectFit: "cover",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      paddingRight: ".5em",
      paddingTop: ".25em",
      paddingBottom: ".25em",
      borderBottom: "1px solid",
      verticalAlign: "top",
    },
    td: {
      textAlign: "left",
      paddingRight: ".5em",
      paddingTop: ".25em",
      paddingBottom: ".25em",
      borderBottom: "1px solid",
      verticalAlign: "top",
    },
    blockquote: {
      fontWeight: "bold",
    },
  },
};
