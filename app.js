let jack = {
  name: 'Handsome Jack',
  health: 100,
  hits: 0,
  multiplier: 1,
  defense: []
}

let items = {
  //guardian: { name: 'The Guardian', modifier: 50, description: 'It\'s cute that you think you\'re the hero of this adventure, but you\'re not.' },
  shield: { name: 'Jack\'s Shield Surveyor', modifier: 3, description: 'Even his shield has an attitude.' },
  doppelganger: { name: 'Digi-Jacks', modifier: 1, description: 'Can\'t touch this' }
}

function melee() {
  let baseDamage = 2;
  jack.health -= (baseDamage - addMods()) * jack.multiplier
  jack.hits++
  updateStats()
}

function shoot() {
  let baseDamage = 5;
  jack.health -= (baseDamage - addMods()) * jack.multiplier
  jack.hits++
  updateStats()
}

function slag() {
  jack.health -= 1
  jack.multiplier += .5
  if (jack.multiplier > 2.5) {
    jack.multiplier = 2.5
  }
  jack.hits++
  updateStats()
}

function goGuardian() {
  let guardBuff = (jack.health + 50)
  if (guardBuff >= 100) {
    let bonusBuff = (guardBuff - 100)
    let cappedBuff = (guardBuff - bonusBuff)
    jack.health = cappedBuff
  }
  else jack.health += 50
  updateStats()
  byeGuardian()
}

//Guardian button only works one time per round, and is then disabled. 
function byeGuardian() {
  document.getElementById("guardianButton").disabled = true
}

function addItem(item) {
  jack.defense.push(item)
}

function addMods() {
  let buffs = 0
  for (let i = 0; i < jack.defense.length; i++) {
    buffs += jack.defense.pop().modifier
  }
  return buffs
}

function updateStats() {
  if (jack.health <= 0) {
    document.getElementById("shootButton").disabled = true
    document.getElementById("meleeButton").disabled = true
    document.getElementById("slagButton").disabled = true
    jack.health = 0
  }
  document.getElementById("health").innerText = jack.health
  document.getElementById("hit-status").innerText = jack.hits
}

function respawn() {
  jack.health = 100
  document.getElementById("health").innerText = jack.health
  jack.hits = 0
  document.getElementById("hit-status").innerText = jack.hits
  jack.multiplier = 1
  document.getElementById("guardianButton").disabled = false
  document.getElementById("shootButton").disabled = false
  document.getElementById("meleeButton").disabled = false
  document.getElementById("slagButton").disabled = false
}

updateStats()