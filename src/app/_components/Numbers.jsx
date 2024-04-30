const Numbers = ({ currentIndex }) => {

  return (
    <div className="flex justify-center mt-5 gap-3 md:mr-36 md:ml-36 sm:ml-[110px] sm:mr-[110px] sm:flex-wrap">
      {Array.from({ length: 10 }, (_, i) => (
        <div 
          key={i} 
          className={`text-white rounded-full w-10 h-10 text-base flex items-center justify-center ${
            i < currentIndex ? 'bg-gradient-to-br from-[#E65895] to-[#BC6BE8]' : 'bg-[#393F6E]'
          }`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Numbers;
