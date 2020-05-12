import Vue from 'vue';

// https://restcountries.eu/rest/v2/all

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
            countries: [],
            filterCountry: ""
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
            return this.countries.filter(country => country.name === this.filterCountry)
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