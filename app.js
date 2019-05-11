let jack = {
  name: 'Handsome Jack',
  health: 100,
  hits: 0,
  multiplier: 1
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

function update() {
  document.getElementById("health").innerText = jack.health
  document.getElementById("hit-status").innerText = jack.hits
}

update()
