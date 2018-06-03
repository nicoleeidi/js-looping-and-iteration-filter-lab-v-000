// Code your solution in this file
function findMatching(drivers,string){
  return drivers.filter(function (driver) {
    return driver == string.charAt(0).toUpperCase() + string.slice(1) || driver == string.toLowerCase()
  })
}

function fuzzyMatch(drivers,string){
<<<<<<< HEAD

  return drivers.filter(function (driver){return driver.substring(0,string.length) == string})

=======
  return drivers.filter(function (driver){return driver.substring(0,string.length) == string}) 
>>>>>>> 8971b65c50520ee0e3bc7b06809659b92c3e8e06
  //  return driver.charAt(0) == string.charAt(0) && driver.charAt(1) == string.charAt(1) })
}

//[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
function matchName(drivers,string){
  return drivers.filter(function (driver){return driver.name == string})
}
