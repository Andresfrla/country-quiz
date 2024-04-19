import Image from "next/image";

export default function Home() {
  

  return (
    <main className="flex justify-center bg-[url('/bg.jpg')] w-full h-screen bg-cover">
      <div className="bg-[#343964] flex flex-col items-center text-center self-center w-[825px] h-[440px]">
        <div className="">
          <h2>Country Quiz</h2>
          <div className="flex flex-row items-center text-center place-content-evenly">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </div>
          <p>Which country is Kuala Lumpur teh capital?</p>
        </div>

        <div className="grid grid-cols-2">
          <p>Sweden</p>
          <p>Vietnam</p>
          <p>Malaysia</p>
          <p>Austria</p>
        </div>
      </div>
    </main>
  );
}
