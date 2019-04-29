import React from "react";
import content from "../../content.json";
import Toolbar from "../../components/Toolbar/Toolbar";
import Intro from "../../components/Intro/Intro";

export default function Landing() {
  console.log(content.intro);
  return (
    <div>
      <Toolbar />
      <Intro image={content.intro.header[0]} />
      <h1>blah blah blah</h1>
    </div>
  );
}
