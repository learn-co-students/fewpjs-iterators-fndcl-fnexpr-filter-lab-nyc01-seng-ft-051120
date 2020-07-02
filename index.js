// Code your solution here
function findMatching(drivers, name){
  let names = []
  names = drivers.filter(n => { return n.toUpperCase() === name.toUpperCase()})
  return names
}

function fuzzyMatch(drivers, string){
  let names = drivers.filter(n => {return n.toLowerCase().indexOf(string.toLowerCase()) === 0})
  return names
}

function matchName(drivers, name){
    let names = []
    names = drivers.filter(n => { return n.name === name})
    return names
  }