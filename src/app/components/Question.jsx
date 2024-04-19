import React from 'react'

const Question = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const randomCountries = getRandomElements(data, 10);
    createQuiz(randomCountries)
  })
  .catch(error => console.error('Error fetching countries:', error));

  function getRandomElements(array, numberOfElements) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfElements)
  }

  function createQuiz(countries) {
    if (!countries || countries.length === 0) {
      console.error('No countries data available.');
      return;
    }
  
    countries.forEach(country => {
      console.log(country.name.common);
    });
  }

  return (
    <div className="mt-5 md:mr-56 md:ml-56 sm:ml-[100px] sm:mr-[100px]">
        <p className="text-xl">Which country is Kuala Lumpur the capital?</p>
    </div>
  )
}

export default Question