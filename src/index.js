import './css/styles.css';
import _debounce from 'debounce';

// ********************************300
const DEBOUNCE_DELAY = 1000;

const refSearchBox = document.querySelector('#search-box');
const refCountryList = document.querySelector('.country-list');
const refCountryInfo = document.querySelector('.country-info');

refSearchBox.addEventListener('input', _debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(event) {
  const name = event.target.value.trim();
  fetchCountries(name);
}

function showFoundCoutries(countries) {
  if (!countries.length) {
    console.log('no countries');
    return;
  }
  if (countries.length > 10) {
    console.log('so many countries');
    return;
  }

  if (countries.length === 1) {
    refCountryList.innerHTML = '';
    refCountryInfo.innerHTML = makeInformationMarkup(countries[0]);
    console.log('one country');
    return;
  }
  if (countries.length < 11) {
    refCountryInfo.innerHTML = '';
    refCountryList.innerHTML = makeListMarkup(countries);
    console.log('list', countries);
    return;
  }
}

function makeInformationMarkup(country) {
  const { name, capital, population, flags, languages } = country;
  return (markUp = `
  <svg width="40" height="40">
  <use href='https://flagcdn.com/ca.svg'>${name.official}<use>
  </svg>
  <p>Capital: ${capital[0]}</p>
  <p>Population: ${population}</p>
  <p>Languages: ${languages}</p>
  `);
}
function makeListMarkup(countries) {
  //   markUp = '';
  //   countries.map(markUp, ({ name, flags }) => {
  //     markUp += `
  //   <use href='https://flagcdn.com/ca.svg'>${name.official}<use>
  //   `;
  //   });
  //   return markUp;
}

function fetchCountries(name) {
  //********* */
  name = 'can';
  //  const url = `https://restcountries.com/v3.1/name/${name}?fields=name.official,capital[0],population,flags.svg,languages`;
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      showFoundCoutries(data);
      console.log(data);
    });
}
