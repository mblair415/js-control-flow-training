console.log("sing.js loaded");

// var beerBottles = prompt("How many bottles of beer?");

function beerSong(beerBottles) {
  for (var i = beerBottles; i > 0; i--) {
    if (i === 1) {
      console.log("1 bottle of beer on the wall,");
      console.log("1 bottle of beer!");
      console.log("Take one down, pass it around,");
      console.log("No more bottles of beer on the wall!");
    } else if (i === 2) {
      console.log("2 bottles of beer on the wall,");
      console.log("2 bottles of beer!");
      console.log("Take one down, pass it around,");
      console.log("1 bottle of beer on the wall!");
    } else {
      console.log(i + " bottles of beer on the wall,");
      console.log(i + " bottles of beer!");
      console.log("Take one down, pass it around,");
      console.log(i - 1 + " bottles of beer on the wall!");
    }
  }
  return;
}

beerSong();
