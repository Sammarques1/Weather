const clientId = '123';
const clientSecret = 'Rodrigo';
const url = 'https://www.google.pt/?hl=pt-PT';

// OpenWeather Info
const openWeatherKey = 'Porto';
const weatherUrl = 'https://www.tempo.pt/';


// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//  Functions here:
const getVenues = () => {
const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
try {
    const response = await fetch(urlToFetch);
if (response.ok) {
    const jsonResponse = await response.json();
const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
console.log(venues);
return venues;
}

}

}
 
const getForecast = () => {
    const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
   try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
  }
}

  catch (error) {
    console.log(error);
  }

}

// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
  const venue = venues[index];
  
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}
$venueDivs.forEach(($venue, index) => {
  const venue = venues[index];
  // ...
});
const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
const venueIcon = venue.categories[0].icon;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
$venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}
const executeSearch = () => {
  // ...
  getVenues().then(venues => renderVenues(venues));
  // ...
}

const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
};
	let weatherContent = createWeatherHTML(day);
$weatherDiv.append(weatherContent);


const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)