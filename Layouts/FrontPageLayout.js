import React from "react";
import theme from "../styles/theme";
import infactLogo from "../assets/images/infact_logo_gradient.svg";

import { Container } from "../styles/components";

export default ({ children, client, date }) => (
  <Container style={{ justifyContent: "space-between" }}>
    <div style={{ marginTop: `${theme.spacing.huge}` }}>
      {client && <p>{client} kick off meeting</p>}
      {date && <p>{date}</p>}
      {children}
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <img alt="InFact Logo" src={infactLogo} style={{ width: "12rem" }} />
      <p
        style={{
          fontSize: "24px",
          background: `${theme.gradients.blue}`,
          margin: "0",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Building products in service of humans and nature
      </p>
    </div>
  </Container>
);
