const game = {
  suspects: [
    {
      name: "Alvin",
      color: "blue",
    },
    {
      name: "Patrick",
      color: "red",
    },
  ],
};

function letsLoop() {
  for (let i = 1; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
  }
}

letsLoop();
