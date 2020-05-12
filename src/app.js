import Vue from 'vue';

// https://restcountries.eu/rest/v2/all

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
            countries: [],
            filterCountry: "",
            favCountry: [],
            flagImgURL: null
    },
    mounted(){
        this.fetchCountries();
         this.filteredCountries();
      },
    methods: {
        fetchCountries: function(){
            fetch("https://restcountries.eu/rest/v2/all")
              .then(response =>  response.json())
              .then(countries => this.countries = countries)
          },
        filteredCountries: function(){
            return this.countries.filter((country) => {
                //this.flagImgURL = country.flag;
                return country.name === this.filterCountry;
                
            })   
          },
          addFavCountry: function(favCountry){
              this.favCountry.push(favCountry);
          }
    }
  });
});



// fetchDog: function(){
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then(response => response.json())
//       .then(data => this.dogImgURL = data.message);
//   }

// filteredAccounts: function(){
//     return this.accounts.filter(account => account.balance >= this.filterAmount);
//   }

// const hardCodedFlag = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png";

// flagMaker: function(){
//     return `<img src ="${hardCodedFlag}" />`
// }

// const createListItem = function(animal) {
//     const li = document.createElement('li');
//     li.textContent = animal.name;
  
//     const speciesSpan = document.createElement('span');
//     speciesSpan.classList.add('species');
//     speciesSpan.textContent = animal.species;
//     li.appendChild(speciesSpan);
  
//     const continentSpan = document.createElement('span');
//     continentSpan.textContent = animal.continent;
//     continentSpan.classList.add('continent');
//     li.appendChild(continentSpan);
  
//     return li;
//   };
  
//   const addListItem = function(listItem) {
//     const listContainer = document.querySelector('#list');
//     listContainer.appendChild(listItem);
//   };