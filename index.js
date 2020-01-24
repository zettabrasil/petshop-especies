const canino = require('./lib/canino');
const coelho = require('./lib/coelho');
const felino = require('./lib/felino');
const outros = require('./lib/outros');
const passaro = require('./lib/passaro');
const peixe = require('./lib/peixe');
const reptil = require('./lib/reptil');
const roedor = require('./lib/roedor');

const pelagens = require('./lib/pelagens');
const portes = require('./lib/portes');

const especies = {
  'Canino': canino,
  'Coelho': coelho,
  'Felino': felino,
  'Outros': outros,
  'Pássaro': passaro,
  'Peixe': peixe,
  'Réptil': reptil,
  'Roedor': roedor,
};

module.exports = {
  'especies': especies,
  'pelagens': pelagens,
  'portes': portes,
};
