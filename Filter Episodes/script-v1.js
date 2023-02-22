const episodes = [
{
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",

    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z"
},
{
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",

    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.916Z"
},
{
    id: 3,
    name: "Anatomy Park",
    air_date: "December 16, 2013",
    episode: "S01E03",

    url: "https://rickandmortyapi.com/api/episode/3",
    created: "2017-11-10T12:56:34.022Z"
},
{
    id: 4,
    name: "M. Night Shaym-Aliens!",
    air_date: "January 13, 2014",
    episode: "S01E04",

    url: "https://rickandmortyapi.com/api/episode/4",
    created: "2017-11-10T12:56:34.129Z"
},
{
    id: 5,
    name: "Meeseeks and Destroy",
    air_date: "January 20, 2014",
    episode: "S01E05",

    url: "https://rickandmortyapi.com/api/episode/5",
    created: "2017-11-10T12:56:34.236Z"
},
{
    id: 6,
    name: "Rick Potion #9",
    air_date: "January 27, 2014",
    episode: "S01E06",

    url: "https://rickandmortyapi.com/api/episode/6",
    created: "2017-11-10T12:56:34.339Z"
},
{
    id: 7,
    name: "Raising Gazorpazorp",
    air_date: "March 10, 2014",
    episode: "S01E07",

    url: "https://rickandmortyapi.com/api/episode/7",
    created: "2017-11-10T12:56:34.441Z"
},
{
    id: 8,
    name: "Rixty Minutes",
    air_date: "March 17, 2014",
    episode: "S01E08",

    url: "https://rickandmortyapi.com/api/episode/8",
    created: "2017-11-10T12:56:34.543Z"
},
{
    id: 9,
    name: "Something Ricked This Way Comes",
    air_date: "March 24, 2014",
    episode: "S01E09",

    url: "https://rickandmortyapi.com/api/episode/9",
    created: "2017-11-10T12:56:34.645Z"
},
{
    id: 10,
    name: "Close Rick-counters of the Rick Kind",
    air_date: "April 7, 2014",
    episode: "S01E10",

    url: "https://rickandmortyapi.com/api/episode/10",
    created: "2017-11-10T12:56:34.747Z"
},
{
    id: 11,
    name: "Ricksy Business",
    air_date: "April 14, 2014",
    episode: "S01E11",

    url: "https://rickandmortyapi.com/api/episode/11",
    created: "2017-11-10T12:56:34.850Z"
},
{
    id: 12,
    name: "A Rickle in Time",
    air_date: "July 26, 2015",
    episode: "S02E01",

    url: "https://rickandmortyapi.com/api/episode/12",
    created: "2017-11-10T12:56:34.953Z"
},
{
    id: 13,
    name: "Mortynight Run",
    air_date: "August 2, 2015",
    episode: "S02E02",

    url: "https://rickandmortyapi.com/api/episode/13",
    created: "2017-11-10T12:56:35.055Z"
},
{
    id: 14,
    name: "Auto Erotic Assimilation",
    air_date: "August 9, 2015",
    episode: "S02E03",

    url: "https://rickandmortyapi.com/api/episode/14",
    created: "2017-11-10T12:56:35.158Z"
},
{
    id: 15,
    name: "Total Rickall",
    air_date: "August 16, 2015",
    episode: "S02E04",

    url: "https://rickandmortyapi.com/api/episode/15",
    created: "2017-11-10T12:56:35.261Z"
},
{
    id: 16,
    name: "Get Schwifty",
    air_date: "August 23, 2015",
    episode: "S02E05",

    url: "https://rickandmortyapi.com/api/episode/16",
    created: "2017-11-10T12:56:35.364Z"
},
{
    id: 17,
    name: "The Ricks Must Be Crazy",
    air_date: "August 30, 2015",
    episode: "S02E06",

    url: "https://rickandmortyapi.com/api/episode/17",
    created: "2017-11-10T12:56:35.467Z"
},
{
    id: 18,
    name: "Big Trouble in Little Sanchez",
    air_date: "September 13, 2015",
    episode: "S02E07",

    url: "https://rickandmortyapi.com/api/episode/18",
    created: "2017-11-10T12:56:35.569Z"
},
{
    id: 19,
    name: "Interdimensional Cable 2: Tempting Fate",
    air_date: "September 20, 2015",
    episode: "S02E08",

    url: "https://rickandmortyapi.com/api/episode/19",
    created: "2017-11-10T12:56:35.669Z"
},
{
    id: 20,
    name: "Look Who's Purging Now",
    air_date: "September 27, 2015",
    episode: "S02E09",

    url: "https://rickandmortyapi.com/api/episode/20",
    created: "2017-11-10T12:56:35.772Z"
}
];

// create a filtered array that contains 
// only episodes that are only part of season 1
const season1Episodes = episodes.filter((x) => {
    return x.episode.includes('S01');
}); // use .filter
console.log(season1Episodes);

// create a filtered array that contains
// only episodes shot after 2013;
const lateEpisodes = episodes.filter((x) => {
    return Date.parse(x.air_date) > Date.parse('1.1.2014');
}); // use.filter
console.log(lateEpisodes);

// create a filtered array that contains
// only episodes that contain the letter 'o' in the `name` key
// eg: {name: "Look Who's Purging Now"} will pass
const oEpisodes = episodes.filter((x) => {
    return x.name.includes('o');
}); // use.filter 
console.log(oEpisodes);