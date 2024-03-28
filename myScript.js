

let map;

async function initMap() {
  // The location of Bloomington, IL
  const position = { lat: 40.478821, lng: -88.992706 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at the initial position
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "ed716943a4d2d8a1",
  });

// Define an array of markers data with content formatting for alignment
const markersData = [
  {
    position: { lat: 38.627003, lng: -90.199402 },
    author: "T.S. Eliot",
    work: "The Wasteland",
    poem: `April is the cruellest month, breeding
Lilacs out of the dead land, mixing
Memory and desire, stirring
Dull roots with spring rain.`,
  },
  {
    position: { lat: 42.361145, lng: -71.000000 },
    author: "Edgar Allan Poe",
    work: "The Raven",
    poem: `Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—
While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.`,
  },
  {
    author: "Walt Whitman",
    work: "Song of Myself",
    poem: `I celebrate myself, and sing myself,
And what I assume you shall assume,
For every atom belonging to me as good belongs to you.
I loafe and invite my soul,
I lean and loafe at my ease observing a spear of summer grass.`,
    position: { lat: 40.6782, lng: -73.9442 },
  },
  // Add more markers data here
];

// Function to convert newlines in a string to HTML <br> tags
function convertNewlinesToBr(str) {
  return str.replace(/\n/g, '<br>');
}

// Use the function to process content strings
markersData.forEach(data => {
  const marker = new AdvancedMarkerElement({
    map: map,
    position: data.position,
    title: data.author,
  });

  const infowindow = new google.maps.InfoWindow({
    content: `<div style="text-align: center;"><strong>${data.author}</strong><br></div>` +
             `<div style="text-align: left;"><b>${data.work}</b></div>` +
             `<div style="text-align: left;">${convertNewlinesToBr(data.poem)}</div>`,
  });

  google.maps.event.addListener(marker, 'click', () => {
    infowindow.open(map, marker);
  });
});

}

initMap();
