import 'notiflix/dist/notiflix-3.2.5.min.css';
import './css/styles.css';
import _debounce from 'debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ********************************300
const DEBOUNCE_DELAY = 1000;

const refSearchBox = document.querySelector('#search-box');
const refCountryList = document.querySelector('.country-list');
const refCountryInfo = document.querySelector('.country-info');

Notify.init({
  // useFontAwesome: true,
  // useIcon: false,
  position: 'center-top',
});

refSearchBox.addEventListener('input', _debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(event) {
  const name = event.target.value.trim();
  fetchCountries(name);
}

function showFoundCoutries(countries) {
  if (!countries.length) {
    Notify.failure('no countries');
    // console.log('no countries');
    return;
  }
  if (countries.length > 10) {
    Notify.info('so many countries');
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
  <img src = ${flags.svg} width = 60 />
  <span>  ${name.official}</span>
  <p>Capital: <span>${capital[0]}</span></p>
  <p>Population: ${population}</p>
  <p>Languages: ${languages}</p>
  `);
}

function makeListMarkup(countries) {
  console.log(countries);
  markUp = '';
  countries.forEach(({ name, flags }) => {
    markUp += `
    <li style="list-style-type: none" >
    <img src = ${flags.svg} width = 60 />
    <span style="font-weight: 700; font-size: 30px;" >   ${name.official}<span>
    </li>
    `;
  });
  return markUp;
}

function fetchCountries(name) {
  //********* */
  name = 'c';
  //  const url = `https://restcountries.com/v3.1/name/${name}?fields=name.official,capital[0],population,flags.svg,languages`;
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      showFoundCoutries(data);
      console.log(data);
    });
}
