"use client"
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const Question = ({ handleIndex }) => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0); // Index to track current question
  const [selectedOption, setSelectedOption] = useState(null); // State to store selected option
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // State to control showing correct answer
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // State to count correct answers
  const totalQuestions = 10; // Total number of questions
  const [confettiActive, setConfettiActive] = useState(false);

  const router = useRouter();
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const randomCountries = getRandomElements(data, totalQuestions);
        createQuiz(randomCountries);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []); // Fetch data only once when component mounts

  function getRandomElements(array, numberOfElements) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfElements);
  }

  function createQuiz(countries) {
    if (!countries || countries.length === 0) {
      console.error('No countries data available.');
      return;
    }
  
    let quizQuestions = [];
  
    // Obtener conjuntos aleatorios de países para cada tipo de pregunta
    const capitalCountries = getRandomElements(countries, totalQuestions);
    const flagCountries = getRandomElements(countries, totalQuestions);
    const countryCapitalCountries = getRandomElements(countries, totalQuestions);
    const populationCountries = getRandomElements(countries, totalQuestions);
  
    // Generar preguntas para cada tipo de pregunta
    for (let i = 0; i < totalQuestions; i++) {
      const capitalCountry = capitalCountries[i];
      const flagCountry = flagCountries[i];
      const countryCapitalCountry = countryCapitalCountries[i];
      const populationCountry = populationCountries[i];
  
      const capitalOptions = generateOptions(capitalCountry, countries);
      const flagOptions = generateOptions(flagCountry, countries);
      const countryCapitalOptions = generateOptions(countryCapitalCountry, countries);
      const populationOptions = generateOptions(populationCountry, countries);
  
      quizQuestions.push(
        {
          question: `Which country is ${capitalCountry.capital} the capital?`,
          options: capitalOptions.capitalOptions,
          correctAnswer: capitalCountry.name.common
        },
        {
          question: `Which country does this flag ${flagCountry.flag} belong to?`,
          options: flagOptions.flagOptions,
          correctAnswer: flagCountry.name.common
        },
        {
          question: `What is the capital of ${countryCapitalCountry.name.common}?`,
          options: countryCapitalOptions.countryCapitalOptions,
          correctAnswer: countryCapitalCountry.capital
        },
        {
          question: `What is the population of ${populationCountry.name.common}?`,
          options: populationOptions.populationOptions,
          correctAnswer: populationCountry.population.toLocaleString('de-DE')
        }
      );
    }
  
    setQuestions(quizQuestions);
  }
  
  
  function generateOptions(country, countries) {
    const uniqueOptions = new Set();
    const options = {
      capitalOptions: [],
      flagOptions: [],
      currencyOptions: [],
      countryCapitalOptions: [],
      populationOptions: []
    };
  
    uniqueOptions.add(country.name.common);
  
    // Generate unique options for each question type
    while (uniqueOptions.size < 4) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      if (randomCountry.name.common !== country.name.common) {
        uniqueOptions.add(randomCountry.name.common);
      }
    }
  
    options.capitalOptions = Array.from(uniqueOptions);
  
    // Generate flag options
    uniqueOptions.clear();
    uniqueOptions.add(country.name.common);
    while (uniqueOptions.size < 4) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      if (randomCountry.name.common !== country.name.common) {
        uniqueOptions.add(randomCountry.name.common);
      }
    }
    options.flagOptions = Array.from(uniqueOptions);
  
    // Generate currency options
    uniqueOptions.clear();
    uniqueOptions.add(country.name.common);
    while (uniqueOptions.size < 4) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      if (randomCountry.name.common !== country.name.common) {
        uniqueOptions.add(randomCountry.name.common);
      }
    }
    options.currencyOptions = Array.from(uniqueOptions);
  
    // Generate country capital options
    uniqueOptions.clear();
    uniqueOptions.add(country.capital);
    while (uniqueOptions.size < 4) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      if (randomCountry.capital !== country.capital) {
        uniqueOptions.add(randomCountry.capital);
      }
    }
    options.countryCapitalOptions = Array.from(uniqueOptions);
  
    // Generate population options
    uniqueOptions.clear();
    uniqueOptions.add(country.population.toLocaleString('de-DE'));
    while (uniqueOptions.size < 4) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      if (randomCountry.population !== country.population) {
        uniqueOptions.add(randomCountry.population.toLocaleString('de-DE'));
      }
    }
    options.populationOptions = Array.from(uniqueOptions).sort(() => Math.random() - 0.5);
  
    return options;
  }
  

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowCorrectAnswer(true); // Always show the correct answer when an option is selected
    handleIndex(prevIndex => prevIndex + 1);
    // Increment correctAnswersCount if the selected option is correct
    if (option === questions[index].correctAnswer) {
      setCorrectAnswersCount(prevCount => prevCount + 1);
      setConfettiActive(true);
    }

    // Move to the next question after a delay
    setTimeout(() => {
      // Reset states for the next question
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setTimeout(() => {
        setConfettiActive(false);
      }, 5000)
      // Move to the next question if not the last question
      if (index < totalQuestions - 1) {
        setIndex(prevIndex => prevIndex + 1);
      } else {
        // If it's the last question, redirect to the results page
        
        router.push(`/results/${correctAnswersCount}`);
        // Show the result in an alert
        // alert(`You answered ${correctAnswersCount} out of ${totalQuestions} questions correctly.`);
        // You can replace the alert with any UI component to display the result nicely
      }
    }, 1500) // Delay in milliseconds before moving to the next question
  };

  return (
    <>
      {confettiActive && <Confetti recycle={false} numberOfPieces={200} />}
      <div className="mt-5">
        <p className="text-xl">{questions.length > 0 ? questions[index].question : "Loading..."}</p>
        <div className="grid grid-cols-2 gap-6 text-base mt-10">
          {questions.length > 0 && questions[index] && questions[index].options && questions[index].options.map((option, optionIndex) => (
            <button 
              key={optionIndex} 
              className={`bg-[#393F6E] w-60 h-[60px] flex flex-row gap-3 items-center justify-center rounded-xl hover:bg-gradient-to-br from-[#E65895] to-[#BC6BE8] ${
                (selectedOption === option && option === questions[index].correctAnswer) ? 'correct' :
                (selectedOption === option && option !== questions[index].correctAnswer) ? 'incorrect' : ''
              } ${selectedOption === option ? 'selected' + ' ' + 'bg-gradient-to-br from-[#E65895] to-[#BC6BE8]' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
              {/* Render the check icon if the option is correct */}
              {(showCorrectAnswer && option === questions[index].correctAnswer) && (
                <img src="/Check_round_fill.svg" alt="Correct" className="w-6 h-6" />
              )}
              {/* Render the close icon if the option is incorrect */}
              {(selectedOption === option && option !== questions[index].correctAnswer && showCorrectAnswer) && (
                <img src="/Close_round_fill.svg" alt="Incorrect" className="w-6 h-6" />
              )}
            </button>
          ))}
       </div>
      </div>
    </>
  );
};

export default Question;
