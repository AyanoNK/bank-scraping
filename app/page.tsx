"use client";

import { MockBoxItem } from "@/mock";
import { TResponse } from "@/types/results";
import { useEffect, useMemo, useState } from "react";
import Bar from "./graph";

const questions = [
  "What variables will be returned from the API?",
  "Will you give me totals for each item or do I calculate it in the front end?",
];

export default function Home() {
  const [extracts, setExtract] = useState<TResponse | undefined>();

  const fetchData = async () => {
    const response = await MockBoxItem;
    console.log(response);
    setExtract(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1 className="font-sans text-5xl">Bank Statement Scrapper</h1>
      <div className="flex flex-col gap-1 align-center justify-center">
        <span>
          This is where we would put the file upload to send to the backend and
          get the data back
        </span>
        <input type="file" className="box-border" />
      </div>
      <div className="flex flex-row justify-between gap-3.5">
        <span>Date picker does not work yet</span>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
        <input
          type="date"
          id="end"
          name="trip-end"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl">Check the data</h2>
        <div className="flex flex-col gap-3 w-[64rem] h-96">
          {extracts && <Bar extracts={extracts} />}
        </div>
      </div>
      <span className="text-xl">Questions</span>
      <div className="flex flex-col gap-2">
        {questions.map((question) => (
          <span key={question}>{question}</span>
        ))}
        <span>
          Any thoughts on deploying? Vercel has serverless functions now. Check
          them out{" "}
          <a
            href="https://youtu.be/WALOgcZICI8"
            className="underline text-blue-500"
            target="_blank"
          >
            here
          </a>
          .
        </span>
      </div>
    </main>
  );
}
