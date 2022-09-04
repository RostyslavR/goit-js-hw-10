export default function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(url).then(responce => responce.json());

  ////  if you want to handle the error here, you should do as below

  // return fetch(url).then(responce => {
  //   if (responce.ok) {
  //     return responce.json();
  //   }
  //   // throw new Error(responce.statusText);
  //   throw responce.status;
  // });
}
