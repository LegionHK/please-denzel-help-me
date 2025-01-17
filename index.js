// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = 'please denzel, help me';
// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';

const inspirational = `Is ${actor} an inspirational actor?`;

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family = {
	'married': 1983,
	'presidentOfTheUnitedStates': false,
	'haschildren': ["John David", "Katia", "Olivia", "Malcolm"];

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences';
  'year': '2010';
};

stage.name = 'A Raisin in the Sun';
stage.year = '2014';

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};

awards["movie"] = "Training Day";

// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)

const earlywork = {
	"Carbon Copy": 1981
	"A Soldier Story": 1984
	"Power": 1986
	"Cry Freedom": 1987
	"For Queen and Countryy": 1988
};

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];

const debaters2 = debaters.map(x => x.toUpperCase());
// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push("tonyscott");

// 2. remove "spikelee" value and store it in a variable called firstDirector
const director1 = directors.shift();

// 3. add "himself" value to the start of `directors` array
directors.unshift("himself");

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
const director2 = directors.splice(1,1);

// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
const director3 = directors[1];

// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']
const duplicate = x => {
	x.map(y => x.push(y));
	return x;
}


// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = function names => {
  const results = [];

  for (const name of names) {
    results.push(name + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(quotes));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?
"there is 40 http requests that are performed to render the page"

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?
"The request send a json with the description of an actor named Zach Shirey"

// Q14. Refactor the following codebase with a promise notation
const promise = new Promise((filePath) => {

})
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// Q15. Refactor the following codebase with async/await notation
fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const {person} = data[0];
    const {id} = person;

    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  })
  .then(response => {
    return response.json();
  })
  .then(console.log);

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)
"https://www.dataswati.com/"


// Q17. Describe an ESILV project that you worked on that you’re proud of?
"This year i did a project for ESILV where we created a mathematical model from a video that we used to create a 3D model and animate it."

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?
"Last year we did a puissance 4 project it was not very interesting but it was all right."

// Q19. What are some things you like about the developer tools you use?
"It's pretty easy to use, sublime text is very versatile"

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?
"There is an (s) because we saw throught the whole semester multiple web application architectures."