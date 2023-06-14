let log = new Log(document.querySelector(".log"));

// Criando o guerreiro:
let char = new Knight("Kelviny");
let monster = new BigMonster();

const stage = new Stage(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster"),
  log
);

stage.start();
