import React from "react";
import content from "../../content.json";
import Toolbar from "../../components/Toolbar/Toolbar";
import Intro from "../../components/Intro/Intro";

export default function Landing() {
  console.log(content);
  return (
    <div>
      <Intro image={content.intro} />
      <Toolbar />
    </div>
  );
}
