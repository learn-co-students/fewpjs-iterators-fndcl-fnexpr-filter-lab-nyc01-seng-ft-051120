// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( driver =>
      driver.toLowerCase() === string.toLowerCase()
    )
  }
  
  function fuzzyMatch(drivers, testString) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(drivers, soughtName) {
    return drivers.filter( record => record.name === soughtName)
  }