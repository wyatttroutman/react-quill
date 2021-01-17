import React from "react";

import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

import { Controlled as CodeMirror } from "react-codemirror2";
import ReactHtmlParser from "react-html-parser";

export default function Editor() {
  const sample =
    "<html>\n\t<header></header>\n\t<body style='margin: 30px; margin-top: 15px !important; margin-bottom: 0px;'>\n\t\t<h1>Sample</h1>\n\t\t<p>This is a sample.</p>\n\t</body>\n</html>";
  const { height, width } = useWindowDimensions();
  var [code, setCode] = useState(sample);

  var options = {
    lineNumbers: true,
    autoFocus: true,
    mode: "xml",
    theme: "xq-light",
  };

  function getHeight() {
    return height - 65;
  }

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box height={getHeight()}>
            <CodeMirror
              value={code}
              options={options}
              onBeforeChange={(editor, data, value) => {
                setCode(value);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <div height={getHeight()}>{ReactHtmlParser(code)}</div>
        </Grid>
      </Grid>
    </>
  );
}
