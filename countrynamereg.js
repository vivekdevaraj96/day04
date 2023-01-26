// xml http request

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    for(var i in result)
    {console.log(`The country name is ${result[i].name.common} and the region is ${result[i].region}, The sub region is ${result[i].subregion} and the population is ${result[i].population}.`);}
}


// The country name is United Kingdom and the region is Europe, The sub region is Northern Europe and the population is 67215293. countrynamereg.js:12:14
// The country name is Cameroon and the region is Africa, The sub region is Middle Africa and the population is 26545864. countrynamereg.js:12:14
// The country name is Cuba and the region is Americas, The sub region is Caribbean and the population is 11326616. countrynamereg.js:12:14
// The country name is Namibia and the region is Africa, The sub region is Southern Africa and the population is 2540916. countrynamereg.js:12:14
// The country name is Georgia and the region is Asia, The sub region is Western Asia and the population is 3714000. countrynamereg.js:12:14
// The country name is Serbia and the region is Europe, The sub region is Southeast Europe and the population is 6908224. countrynamereg.js:12:14
// The country name is Guatemala and the region is Americas, The sub region is Central America and the population is 16858333. countrynamereg.js:12:14
// The country name is Northern Mariana Islands and the region is Oceania, The sub region is Micronesia and the population is 57557. countrynamereg.js:12:14
// The country name is Turkmenistan and the region is Asia, The sub region is Central Asia and the population is 6031187. countrynamereg.js:12:14
// The country name is Sweden and the region is Europe, The sub region is Northern Europe and the population is 10353442. countrynamereg.js:12:14
// The country name is Gabon and the region is Africa, The sub region is Middle Africa and the population is 2225728. countrynamereg.js:12:14
// The country name is Austria and the region is Europe, The sub region is Central Europe and the population is 8917205. countrynamereg.js:12:14
// The country name is South Africa and the region is Africa, The sub region is Southern Africa and the population is 59308690. countrynamereg.js:12:14
// The country name is Vanuatu and the region is Oceania, The sub region is Melanesia and the population is 307150. countrynamereg.js:12:14
// The country name is Benin and the region is Africa, The sub region is Western Africa and the population is 12123198. countrynamereg.js:12:14
// The country name is Republic of the Congo and the region is Africa, The sub region is Middle Africa and the population is 5657000. countrynamereg.js:12:14
// The country name is Ireland and the region is Europe, The sub region is Northern Europe and the population is 4994724. countrynamereg.js:12:14
// The country name is Papua New Guinea and the region is Oceania, The sub region is Melanesia and the population is 8947027. countrynamereg.js:12:14
// The country name is Saint Barthélemy and the region is Americas, The sub region is Caribbean and the population is 4255. countrynamereg.js:12:14
// The country name is Niue and the region is Oceania, The sub region is Polynesia and the population is 1470. countrynamereg.js:12:14
// The country name is North Macedonia and the region is Europe, The sub region is Southeast Europe and the population is 2077132. countrynamereg.js:12:14
// The country name is Denmark and the region is Europe, The sub region is Northern Europe and the population is 5831404. countrynamereg.js:12:14
// The country name is Zimbabwe and the region is Africa, The sub region is Southern Africa and the population is 14862927. countrynamereg.js:12:14
// The country name is Honduras and the region is Americas, The sub region is Central America and the population is 9904608. countrynamereg.js:12:14
// The country name is Hong Kong and the region is Asia, The sub region is Eastern Asia and the population is 7500700. countrynamereg.js:12:14
// The country name is Saint Martin and the region is Americas, The sub region is Caribbean and the population is 38659. countrynamereg.js:12:14
// The country name is Trinidad and Tobago and the region is Americas, The sub region is Caribbean and the population is 1399491. countrynamereg.js:12:14
// The country name is Sint Maarten and the region is Americas, The sub region is Caribbean and the population is 40812. countrynamereg.js:12:14
// The country name is Laos and the region is Asia, The sub region is South-Eastern Asia and the population is 7275556. countrynamereg.js:12:14
// The country name is Mozambique and the region is Africa, The sub region is Eastern Africa and the population is 31255435. countrynamereg.js:12:14
// The country name is Uzbekistan and the region is Asia, The sub region is Central Asia and the population is 34232050. countrynamereg.js:12:14
// The country name is Haiti and the region is Americas, The sub region is Caribbean and the population is 11402533. countrynamereg.js:12:14
// The country name is British Virgin Islands and the region is Americas, The sub region is Caribbean and the population is 30237. countrynamereg.js:12:14
// The country name is Croatia and the region is Europe, The sub region is Southeast Europe and the population is 4047200. countrynamereg.js:12:14
// The country name is Eswatini and the region is Africa, The sub region is Southern Africa and the population is 1160164. countrynamereg.js:12:14
// The country name is Albania and the region is Europe, The sub region is Southeast Europe and the population is 2837743. countrynamereg.js:12:14
// The country name is Indonesia and the region is Asia, The sub region is South-Eastern Asia and the population is 273523621. countrynamereg.js:12:14
// The country name is Bangladesh and the region is Asia, The sub region is Southern Asia and the population is 164689383. countrynamereg.js:12:14
// The country name is Russia and the region is Europe, The sub region is Eastern Europe and the population is 144104080. countrynamereg.js:12:14
// The country name is Tunisia and the region is Africa, The sub region is Northern Africa and the population is 11818618. countrynamereg.js:12:14
// The country name is Saint Vincent and the Grenadines and the region is Americas, The sub region is Caribbean and the population is 110947. countrynamereg.js:12:14
// The country name is Kosovo and the region is Europe, The sub region is Southeast Europe and the population is 1775378. countrynamereg.js:12:14
// The country name is Belarus and the region is Europe, The sub region is Eastern Europe and the population is 9398861. countrynamereg.js:12:14
// The country name is Saint Lucia and the region is Americas, The sub region is Caribbean and the population is 183629. countrynamereg.js:12:14
// The country name is North Korea and the region is Asia, The sub region is Eastern Asia and the population is 25778815. countrynamereg.js:12:14
// The country name is Luxembourg and the region is Europe, The sub region is Western Europe and the population is 632275. countrynamereg.js:12:14
// The country name is Turks and Caicos Islands and the region is Americas, The sub region is Caribbean and the population is 38718. countrynamereg.js:12:14
// The country name is Hungary and the region is Europe, The sub region is Central Europe and the population is 9749763. countrynamereg.js:12:14
// The country name is Australia and the region is Oceania, The sub region is Australia and New Zealand and the population is 25687041. countrynamereg.js:12:14
// The country name is Curaçao and the region is Americas, The sub region is Caribbean and the population is 155014. countrynamereg.js:12:14
// The country name is Svalbard and Jan Mayen and the region is Europe, The sub region is Northern Europe and the population is 2562. countrynamereg.js:12:14
// The country name is Fiji and the region is Oceania, The sub region is Melanesia and the population is 896444. countrynamereg.js:12:14
// The country name is Qatar and the region is Asia, The sub region is Western Asia and the population is 2881060. countrynamereg.js:12:14
// The country name is Monaco and the region is Europe, The sub region is Western Europe and the population is 39244. countrynamereg.js:12:14
// The country name is Solomon Islands and the region is Oceania, The sub region is Melanesia and the population is 686878. countrynamereg.js:12:14
// The country name is Caribbean Netherlands and the region is Americas, The sub region is Caribbean and the population is 25987. countrynamereg.js:12:14
// The country name is Dominica and the region is Americas, The sub region is Caribbean and the population is 71991. countrynamereg.js:12:14
// The country name is Peru and the region is Americas, The sub region is South America and the population is 32971846. countrynamereg.js:12:14
// The country name is Brunei and the region is Asia, The sub region is South-Eastern Asia and the population is 437483. countrynamereg.js:12:14

// ​

