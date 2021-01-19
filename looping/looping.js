const game = {
  suspects: [
    {
      name: "Alvin",
      color: "Blue",
    },
    {
      name: "Patrick",
      color: "Red",
    },
  ],
};

function loopme() {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
  }
}

loopme();
