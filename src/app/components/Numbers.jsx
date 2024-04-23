const Numbers = ({ currentIndex }) => {

  return (
    <div className="flex justify-between mt-5 md:mr-56 md:ml-56 sm:ml-[100px] sm:mr-[100px]">
      {Array.from({ length: 10 }, (_, i) => (
        <div 
          key={i} 
          className={`text-white font-bold rounded-full w-10 h-10 flex items-center justify-center ${
            i < currentIndex ? 'bg-gradient-to-br from-[#E65895] to-[#BC6BE8]' : 'bg-gray-300'
          }`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Numbers;
