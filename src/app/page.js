import Image from "next/image";

export default function Home() {
  

  return (
    <main className="flex justify-center bg-[url('/bg.jpg')] w-full h-screen bg-cover">
      <div className="bg-[#343964] flex flex-col items-center text-center self-center rounded-xl w-[825px] h-[440px] text-2xl">
        <div className="">
          <h2 className="text-sm text-[#8B8EAB] font-bold mt-9">Country Quiz</h2>
          <div className="flex flex-row items-center text-center place-content-evenly text-sm mt-5">
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">1</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">2</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">3</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">4</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">5</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">6</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">7</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">8</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">9</p>
            <p className="bg-[#393F6E] rounded-full p-2 pr-4 pl-4 mr-3">10</p>
          </div> 
        </div>

          <div className="mt-8 pr-60 pl-60">
            <p className="text-xl">Which country is Kuala Lumpur the capital?</p>
          </div>

        <div className="grid grid-cols-2 text-base gap-6 mt-10">
          <p className="bg-[#393F6E] w-60 h-[60px] flex flex-col justify-center rounded-xl">Sweden</p>
          <p className="bg-[#393F6E] w-60 h-[60px] flex flex-col justify-center rounded-xl">Vietnam</p>
          <p className="bg-[#393F6E] w-60 h-[60px] flex flex-col justify-center rounded-xl">Malaysia</p>
          <p className="bg-[#393F6E] w-60 h-[60px] flex flex-col justify-center rounded-xl">Austria</p>
        </div>
      </div>
    </main>
  );
}
