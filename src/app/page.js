import Numbers from "./components/numbers";
import Question from "./components/Question";
import Options from "./components/Options";

export default function Home() {
  

  return (
    <main className="flex justify-center bg-[url('/bg.jpg')] w-full h-screen bg-cover">
      <div className="bg-[#343964] flex flex-col items-center text-center self-center rounded-xl md:w-[825px] md:h-[440px] text-2xl sm:w-[577px] sm:h-[494px]">
        <div className="">
          <h2 className="text-sm text-[#8B8EAB] font-bold mt-9">Country Quiz</h2>
          <Numbers />
        </div>

          <Question />
          <Options/>
      </div>
    </main>
  );
}
