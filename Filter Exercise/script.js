const episode = {
    id: 4,
    name: "M. Night Shaym-Aliens!",
    air_date: "January 13, 2014",
    episode: "S01E04",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/87",
      "https://rickandmortyapi.com/api/character/175",
      "https://rickandmortyapi.com/api/character/179",
      "https://rickandmortyapi.com/api/character/181",
      "https://rickandmortyapi.com/api/character/191",
      "https://rickandmortyapi.com/api/character/239",
      "https://rickandmortyapi.com/api/character/241",
      "https://rickandmortyapi.com/api/character/270",
      "https://rickandmortyapi.com/api/character/337",
      "https://rickandmortyapi.com/api/character/338"
    ],
    url: "https://rickandmortyapi.com/api/episode/4",
    created: "2017-11-10T12:56:34.129Z"
  };
  
  /**
  * Requirements:
  * Given the object episode, I would like to receive back an object that contains in
  * the character array only characters that have the id above 100 but bellow 300
  * You need to use the filter method to create a new array and assign it to the person object
  * "https://rickandmortyapi.com/api/character/1" will not pass because 1 is smaller than 100
  * "https://rickandmortyapi.com/api/character/175" will pass because 
  * the id is bigger than 100 and smaller than 300
  * "https://rickandmortyapi.com/api/character/338" will not pass because the id si bigger than 300
  */



  // get only between 100 and 300
  const arr = episode.characters.map(element => {
    const splitLink = element.split('/');


    console.log(splitLink)
  });

  //use filter to add in new array
  // episode.person = newArray