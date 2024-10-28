import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import OutputBox from "./OutputBox";

function Home() {
  const [solutionText, setSolutionText] = useState("Solution comes here");
  return (
    <div className="flex flex-col gap-16 px-12 py-20">
      <h1 className="text-4xl">
        Ramanujan the All-in-One solution for any math problem
      </h1>
      <div
        className="grid gap-8"
        style={{ gridTemplateColumns: "repeat(2,1fr)" }}
      >
        <QuestionInput setSolutionText={setSolutionText} />
        <OutputBox solutionText={solutionText} />
      </div>
    </div>
  );
}

export default Home;
