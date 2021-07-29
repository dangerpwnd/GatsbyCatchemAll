import React from "react";
import { jsx } from "@emotion/react";
import Pokecard from "./Pokecard.js";

const Layout = () => {
  return (
    <div
      css={{
        border: "1px solid black",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      <Pokecard />
    </div>
  );
};

export default Layout;
