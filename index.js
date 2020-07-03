
// function findMatching(drivers, name) {
//     drivers.filter(driver => {
//         name.toLowerCase() === driver.name.toLowerCase()
//     })
// }

function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }

  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}

