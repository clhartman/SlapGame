let health = 100
let multiplier = 1
let name = 'Jack'
let hits = 0

function melee() {
  health -= 2 * multiplier
  hits++
  update()
}

function shoot() {
  health -= 5 * multiplier
  hits++
  update()
}

function slag() {
  health -= 1
  multiplier += .5
  if (multiplier > 2.5) {
    multiplier = 2.5
  }
  hits++
  update()
}

function update() {
  document.getElementById("health").innerText = health
  document.getElementById("hit-status").innerText = hits
}

update()
