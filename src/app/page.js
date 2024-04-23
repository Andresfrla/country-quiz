"use client"
import { useState } from "react";
import Numbers from "./components/Numbers";
import Question from "./components/Question";

export default function Home() {
  const [index, setIndex] = useState(1); // Define y inicializa currentIndex aquí

  const handleIndex = (index) => {
    setIndex(index);
  }

  return (
    <main className="flex justify-center bg-[url('/bg.jpg')] w-full h-screen bg-cover">
      <div className="bg-[#343964] flex flex-col items-center text-center self-center rounded-xl md:w-[825px] md:h-[440px] text-2xl sm:w-[577px] sm:h-[494px] shadow-md">
        <div className="">
          <h2 className="text-sm text-[#8B8EAB] font-bold mt-9">Country Quiz</h2>
          <Numbers currentIndex={index}/>
        </div>
          <Question handleIndex={handleIndex}/>
      </div>
    </main>
  );
}
