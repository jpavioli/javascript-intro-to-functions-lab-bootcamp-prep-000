function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function sayHiToGrandma(string) {
  if (string === string.toUpperCase() ){
    return console.log("YES INDEED!")
  }
  else {
    return console.log("I can't hear you!")
  }
  
}