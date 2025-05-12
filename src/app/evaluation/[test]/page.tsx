"use client";

import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import EvaluationTest, { evaluationTest } from "@/components/evaluation/Test";

function Test({ params }: { params: { test: string } }) {
  const [response, setResponse] = useState<null | evaluationTest>(null);
  const [error, setError] = useState<string | null>(null);

  const testName = params.test
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  useEffect(() => {
    async function fetchTestByName() {
      try {
        const response = await fetch(
          `/api/test?name=${encodeURIComponent(testName)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResponse(data);
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      }
    }

    fetchTestByName();
  }, [testName]);

  if (error) return <div>Error: {error}</div>;
  if (!response) return <Loading />;

  return (
    <section className="relative page-section w-full h-auto min-h-screen bg-antiflash flex flex-col items-center gap-5 lg:gap-16">
      <article className="w-full flex flex-col gap-3 items-start">
        <h1 className="text-2xl md:text-3xl font-semibold">
          {response?.title} test
        </h1>
        <p className="text-sm text-black text-opacity-75 -mt-1">
          {response?.introduction}
        </p>
        <h1 className="text-lg md:text-xl font-medium text-black">
          Study article:{" "}
          <a
            href={response?.article}
            className="text-base md:text-lg text-secondary text-opacity-75 text-wrap underline"
          >
            here
          </a>
        </h1>
      </article>
      {/* @ts-ignore */}
      {!response?.scoring?.includes(1) && !response?.scoring?.includes("1") ? (
        <div className="flex items-center gap-2 lg:self-start lg:-mt-8">
          <h2 className="text-black font-medium text-lg md:text-xl">
            Scoring system:
          </h2>
          <h1 className="text-black font-bold md:text-lg xl:text-xl">Low</h1>
          <form className=" flex gap-1 items-center">
            {response.scoring?.map((e: number | string, i): JSX.Element => {
              return (
                <input
                  key={i}
                  type="radio"
                  name="scoring_system"
                  value={e.toString() || e}
                  className="md:w-7 md:h-7"
                />
              );
            })}
          </form>
          <h1 className="text-black font-bold md:text-lg xl:text-xl">High</h1>
        </div>
      ) : (
        <div className="flex items-center gap-2 lg:self-start lg:-mt-8">
          <h2 className="text-black font-medium text-lg md:text-xl">
            Scoring system:
          </h2>
          <h1 className="text-black font-bold md:text-lg xl:text-xl">
            {/* @ts-ignore */}
            {parseInt(response.scoring?.[0])}
          </h1>
          <form className=" flex gap-1 items-center">
            {response.scoring?.map((e: number | string, i): JSX.Element => {
              return (
                <input
                  key={i}
                  type="radio"
                  name="scoring_system"
                  value={e.toString() || e}
                  className="md:w-7 md:h-7"
                />
              );
            })}
          </form>
          <h1 className="text-black font-bold md:text-lg xl:text-xl">
            {/* @ts-ignore */}
            {parseInt(response.scoring?.[response?.scoring?.length - 1])}
          </h1>
        </div>
      )}
      <EvaluationTest
        questions={response.questions}
        results={response.results}
        scoring={response.scoring}
      />
    </section>
  );
}

export default Test;
