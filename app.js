let jack = {
  name: 'Handsome Jack',
  health: 100,
  hits: 0,
  multiplier: 1,
  items: []
}

/*let guardian = {
  name: 'The Guardian',
  modifier: 1,
  description: 'You thought you were almost done?'
}

let shield = {
  name: 'Jack\'s Shield Surveyor',
  modifier: 1,
  description: 'Even his shield has an attitude.'
}*/

let items = {
  guardian: { name: 'The Guardian', modifier: 5, description: 'It\'s cute that you think you\'re the hero of this adventure, but you\'re not.' },
  shield: { name: 'Jack\'s Shield Surveyor', modifier: 3, description: 'Even his shield has an attitude.' },
  doppelganger: { name: 'Digi-Jacks', modifier: 1, description: 'Can\'t touch this' }
}

function melee() {
  jack.health -= 2 * jack.multiplier
  jack.hits++
  update()
}

function shoot() {
  jack.health -= 5 * jack.multiplier
  jack.hits++
  update()
}

function slag() {
  jack.health -= 1
  jack.multiplier += .5
  if (jack.multiplier > 2.5) {
    jack.multiplier = 2.5
  }
  jack.hits++
  update()
}

function giveguardian() {
  jack.defense.push(guardian)
  addMods();
}

function addMods() {
  //determine which modifiers are currently active and then total them and return the total so Jack's character can be aided
  let modsTotal = jack.defense.length
  for (let i = 0; i < modsTotal; i + jack.defense().modifier)
    return (modsTotal)
}

function update() {
  document.getElementById("health").innerText = jack.health
  document.getElementById("hit-status").innerText = jack.hits
}

update()
