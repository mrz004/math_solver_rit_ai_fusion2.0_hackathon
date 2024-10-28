import React from "react";
import { BlockMath, InlineMath } from "react-katex";

function OutputBox({ solutionText }) {
  const renderSolutionText = (text) => {
    const inlineMathRegex = /\$(.*?)\$/g;
    const blockMathRegex = /\$\$(.*?)\$\$/g;

    const parts = text.split(blockMathRegex).map((part, index) => {
      if (index % 2 === 1) {
        return <BlockMath key={index}>{part}</BlockMath>;
      }
      return part.split(inlineMathRegex).map((subPart, subIndex) => {
        if (subIndex % 2 === 1) {
          return <InlineMath key={subIndex}>{subPart}</InlineMath>;
        }
        return subPart;
      });
    });

    return parts;
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl">Solution for given question</h3>
      <div
        dangerouslySetInnerHTML={{ __html: solutionText }}
        className="border border-gray-600 h-full rounded p-4"
      >
        {/* {renderSolutionText(solutionText)} */}
      </div>
    </div>
  );
}

export default OutputBox;
