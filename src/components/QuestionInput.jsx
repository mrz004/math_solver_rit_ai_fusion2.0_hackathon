import { useEffect, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const apikey = YOUR_API_KEY;

function QuestionInput({ setSolutionText }) {
  const [latex, setLatex] = useState("");
  const loaded = useRef(false);

  async function handleSubmit() {
    setSolutionText("Loading...");

    if (!latex || latex === "") {
      setSolutionText("Please enter a question");
      return;
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: `You are an expert mathematician like Ramanujan. You are proficient at solving complex problems like calculus, algebra, statistics etc.

INPUT: You will be prompted a LaTeX code representing the question to be solved.

TASK: Solve the question with appropriate approach and techniques and then return a step by step solution for the question which can be understood by everyone.

OUTPUT: return a valid HTML code only, don't use any code block give me pure parsable HTML, don't use LaTeX code try to render everything from HTML,  don't use markdown syntax like ** or other which will not be parsed in html
LaTeX Code: ${latex}`,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    setSolutionText(data.choices[0].message.content);
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl">Enter your question</h3>
      <textarea
        onChange={(e) => setLatex(e.target.value)}
        id="question"
        placeholder="Enter LaTeX code"
        className="border outline-gray-400 w-full p-4 h-40"
      ></textarea>
      <p>Rendered Output:</p>
      <BlockMath style={{ fontFamily: '"Noto Sans Math", sans-serif;' }}>
        {latex}
      </BlockMath>
      <button
        onClick={handleSubmit}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Find Solution
      </button>
    </div>
  );
}

export default QuestionInput;
