let jack = {
  name: 'Handsome Jack',
  health: 100,
  hits: 0,
  multiplier: 1,
  defense: []
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

function goGuardian() {
  let guardBuff = (jack.health + 50)
  if (guardBuff >= 100) {
    let bonusBuff = (guardBuff - 100)
    let cappedBuff = (guardBuff - bonusBuff)
    jack.health = cappedBuff
  }
  else jack.health += 50
  update()
  byeGuardian()
}

//Guardian button only works one time per round, and is then disabled. 
function byeGuardian() {
  document.getElementById("endGuardian").disabled = true
}

function goShield() {
  //jack.defense.push(items.shield)
  let shieldMod = items.shield.modifier
  if melee() {
    jack.health +=
  }
  else if shoot() {
    jack.health += 2
  }
  jackMods()
}
/*
function goDoppelganger() {
  let gangMod = jack.defense.push(items.doppelganger)
  jackMods()
}

function jackMods() {
  jack.health -= jack.defense.modifier
}
*/

/*
function giveGuardian() {
  jack.defense.push(defense.guardian)
  addMods();
}

function giveShield() {
  jack.defense.push(defense.shield)
  addMods()
}
 
function giveDoppelganger() {
  jack.defense.push(defense.doppelganger)
  addMods()
}

function groupBy(defense, modifier) {
  return defense.reduce(function (acc, obj) {
    var key = obj[modifier];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }) { });
}

function addMods() {
  //determine which items are in the defense array, and then pull the value of each item's modifier and sum
  let modsTotal = jack.defense.map(d => ({
    
  }))
 
  /*determine which modifiers are currently active and then total them and return the total so Jack's character can be aided
  let modsTotal = jack.defense[].modifier
  for (let i = 0; i < modsTotal; i + jack.defense[].modifier)
  return (modsTotal)
}*/

function update() {
  document.getElementById("health").innerText = jack.health
  document.getElementById("hit-status").innerText = jack.hits
}

function respawn() {
  jack.health = 100
  document.getElementById("health").innerText = jack.health
  jack.hits = 0
  document.getElementById("hit-status").innerText = jack.hits
  document.getElementById("endGuardian").disabled = false
}

update()