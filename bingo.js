var size = 5
var table = document.querySelector('table')

// ==============================
// !!! !!! CANCER WARNING !!! !!!
// ==============================
//      Proceed with caution

var consoleArguments = [ // this sounds a lot better in code
  'Uncharted',
  'The Last of Us',
  'Forza',
  'Halo',
  'Destiny',
  'Red Dead Redemption',
  'Exclusives', // in general
  'PC elitists',
  'PC is expensive',
  'I had a PC, but it was worse',
  'Mouse and keyboard is hard',
  'Mouse and keyboard is for noobs',
  'Controller is superior',
  'Mods ruin games',
  'PC gamers are hackers',
  'PC gamers are pirates',
  "You can't see past 30fps",
  '24 fps is more cinematic',
  'No one cares about graphics',
  'PC is hard to use',
  'Only nerds can build a PC',
  'PC gets viruses',
  'PC gamers are nerds',
  'PC gamers are virgins',
  'You need to buy a monitor',
  'You have to upgrade all the time',
  'Consoles get better over time',
  "Consoles last 5-6 years, PCs don't",
  'I want to play on the couch',
  'I just insert the game and play',
  'Consoles just work',
  'Games are developed for consoles',
  'Consoles are optimized',
  'Consoles lead the innovation',
  'PC ports are shitty',
  'Games get delayed on PC',
  'Publishers get no money from PC',
  'No exclusives on PC',
  '"PC exclusives" are just bad indie games',
  'Indie games suck',
  'Free games if you pay Gold/Plus',
  'Multiplayer is free since I buy Plus/Gold anyway',
  'VR is cheaper on PS4',
  'The PS4 Pro or XBox scorpio can do 4K',
  'I have a 4K TV that upscales my console',
] // I want to believe no one wins the game

// Init table
Array(5).fill().map(function () {
  var row = document.createElement('tr')
  Array(5).fill().map(function () {
    var tile = document.createElement('td')
    var text = document.createElement('div')
    text.setAttribute('contenteditable', 'true')
    activate(tile)
    tile.appendChild(text)
    row.appendChild(tile)
  })
  table.appendChild(row)
})

// Turn things red and back again
function activate (element) {
  element.addEventListener('dblclick', function () {
    element.classList.toggle('checked')
  })
}

// Fisher-Yates algorithm
function shuffle (array) {
  var result = array.slice(0)
  var length = result.length
  var current, temp
  for (var i = 0; i < length - 2; i++) {
    current = Math.floor(Math.random() * (length - i - 1)) + i + 1
    temp = result[current]
    result[current] = result[i]
    result[i] = temp
  }
  return result
}

// Fill table with random peasantry
function fill () {
  var peasantry = shuffle(consoleArguments).slice(0, 25)
  ;[].slice.call(document.querySelectorAll('td div')).map(function (element, index) {
    element.textContent = peasantry[index]
  })
}

// Add event listener and also do it manually
document.querySelector('th span').addEventListener('click', fill)
fill()
