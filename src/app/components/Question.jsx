"use client"
import React, { useEffect, useState } from 'react';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0); // Index to track current question
  const [selectedOption, setSelectedOption] = useState(null); // State to store selected option
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // State to control showing correct answer

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const randomCountries = getRandomElements(data, 10);
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
    const numberOfQuestions = Math.min(countries.length, 10); // Limit to 10 questions or total countries if less
  
    for (let i = 0; i < numberOfQuestions; i++) {
      const country = countries[i];
      const options = generateOptions(country, countries);
  
      quizQuestions.push(
        {
          question: `Which country is ${country.capital} the capital?`,
          options: options.capitalOptions,
          correctAnswer: country.name.common
        },
        {
          question: `Which country does this flag ${country.flag} belong to?`,
          options: options.flagOptions,
          correctAnswer: country.name.common
        },
        {
          question: `Which country is ${country.currencies} the currency?`,
          options: options.currencyOptions,
          correctAnswer: country.name.common
        },
        {
          question: `Which is the capital of ${country.name.common}?`,
          options: options.countryCapitalOptions,
          correctAnswer: country.capital
        },
        {
          question: `How many population ${country.name.common} have?`,
          options: options.populationOptions,
          correctAnswer: country.population
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
    options.flagOptions = Array.from(uniqueOptions);
    options.currencyOptions = Array.from(uniqueOptions);
    options.countryCapitalOptions = Array.from(uniqueOptions);
    options.populationOptions = Array.from(uniqueOptions);

    return options;
  }

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowCorrectAnswer(true); // Always show the correct answer when an option is selected
  };

  return (
    <>
      <div className="mt-5 md:mr-56 md:ml-56 sm:ml-[100px] sm:mr-[100px]">
        <p className="text-xl">{questions.length > 0 ? questions[index].question : "Loading..."}</p>
        <div className="grid grid-cols-2 text-base gap-6 mt-10 ">
          {questions.length > 0 && questions[index].options.map((option, optionIndex) => (
            <button 
              key={optionIndex} 
              className={`bg-[#393F6E] w-60 h-[60px] flex flex-col justify-center items-center rounded-xl hover:bg-gradient-to-br from-[#E65895] to-[#BC6BE8] ${
                (selectedOption === option && option === questions[index].correctAnswer) ? 'correct' :
                (selectedOption === option && option !== questions[index].correctAnswer) ? 'incorrect' : ''
              } ${selectedOption === option ? 'selected' + ' ' + 'bg-gradient-to-br from-[#E65895] to-[#BC6BE8]'  : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
              {/* Render the check icon if the option is correct */}
              {(showCorrectAnswer && option === questions[index].correctAnswer) && (
                <img src="/Check_round_fill.svg" alt="Correct" className="mt-2 w-6 h-6" />
              )}
              {/* Render the close icon if the option is incorrect */}
              {(selectedOption === option && option !== questions[index].correctAnswer && showCorrectAnswer) && (
                <img src="/Close_round_fill.svg" alt="Incorrect" className="mt-2 w-6 h-6" />
              )}
            </button>
          ))}
       </div>
      </div>
    </>
  );
};

export default Question;
