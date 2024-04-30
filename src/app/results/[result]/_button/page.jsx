import { useRouter } from 'next/navigation';

const PlayAgainButton = () => {
  const router = useRouter();

  const handlePlayAgain = () => {
    router.push('/');
  };

  return (
    <button className='bg-gradient-to-br from-[#E65895] to-[#BC6BE8] rounded-xl w-60 h-[60px]' onClick={handlePlayAgain}>Play again</button>
  );
};

export default PlayAgainButton;