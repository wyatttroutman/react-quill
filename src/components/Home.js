import React from "react";
import { Container, Link } from "@material-ui/core";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <h1>Quill</h1>
      <h3>In-browser HTML editor and renderer.</h3>
      <p>Use the Editor to write HTML code and render it in real time.</p>
      <Link href="https://github.com/wyatttroutman/react-quill">
        Refer to GitHub repository for more information.
      </Link>
    </Container>
  );
}
