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