"use client";

import { useState } from "react";

export type evaluationTest = {
  questions: string[];
  scoring: string[] | number[];
  results: { min: number; max: number; label: string }[];
  title: string;
  introduction: string;
  article: string;
};

function EvaluationTest(props: {
  questions: string[];
  scoring: string[] | number[];
  results: { min: number; max: number; label: string }[];
}) {
  const { questions, scoring, results } = props;
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>(
    new Array(questions.length).fill(null)
  );
  const [score, setScore] = useState<number>(0);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleRadioClick = (questionIndex: number, value: string | number) => {
    const newSelectedValues = [...selectedValues];
    const previousValue = newSelectedValues[questionIndex];

    // Convert values to numbers
    const parsedValue = parseInt(value.toString().charAt(0));
    const parsedPreviousValue =
      previousValue !== null ? parseInt(previousValue.toString().charAt(0)) : 0;

    newSelectedValues[questionIndex] = value;
    setSelectedValues(newSelectedValues);

    // Update the score
    const newScore = score - parsedPreviousValue + parsedValue;
    setScore(newScore);
  };

  const submitTest = (): string => {
    // Check if all questions are answered
    const allAnswered = selectedValues.every((value) => value !== null);
    if (!allAnswered) {
      return "Please answer all questions before submitting";
    } else {
      // Calculate the total score
      let newScore = 0;
      selectedValues.forEach((v) => {
        let answer = v?.toString()?.charAt(0);
        newScore += parseInt(answer);
      });
      setScore(newScore);

      // Determine the result label based on the score
      for (let r of results) {
        if (r.min <= newScore && r.max >= newScore) {
          return r.label;
        }
      }
    }
    // Default return if no label is found
    return "No result found for the calculated score";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = submitTest();
    setResultMessage(result);
  };

  return (
    <section className="w-full h-auto min-h-screen">
      <form
        className="w-full flex flex-col items-start gap-8 lg:gap-16 mt-10 lg:mt-20"
        onSubmit={handleSubmit}
      >
        {questions.map((q: string, i): JSX.Element => {
          return (
            <div className="flex flex-col" key={i}>
              <h4 className="text-xs md:text-base xl:text-lg text-black text-opacity-80">
                {/* <span className="text-primary text-sm">*</span> */}
                {q}
              </h4>
              <div className="w-full flex justify-center gap-1 items-center mt-2 ">
                {scoring?.map((e: number | string, j): JSX.Element => {
                  return (
                    <input
                      key={j}
                      type="radio"
                      name={`question${i}`}
                      className="w-5 h-5 md:w-7 md:h-7 xl:w-10 xl:h-10"
                      value={e.toString() || e}
                      checked={selectedValues[i] === e}
                      onChange={() => handleRadioClick(i, e)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <button
          type="submit"
          className="w-fit mx-auto mt-8 px-5 py-1 bg-primary rounded-full text-xl text-white"
        >
          Submit
        </button>
      </form>
      {resultMessage && (
        <div className="w-full h-auto min-h-32 pt-5 pb-10 px-2 flex items-center justify-center bg-primary mt-10 rounded-lg bg-opacity-50">
          <p className="text-secondary md:text-lg xl:text-xl">
            {resultMessage}
          </p>
        </div>
      )}
    </section>
  );
}

export default EvaluationTest;
