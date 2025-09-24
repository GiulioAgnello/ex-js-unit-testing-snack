function averageNumber(number) {
  const somma = number.reduce(
    (accumulatore, valoreCorrente) => accumulatore + valoreCorrente,
    0
  );
  const media = somma / number.length;
  return media;
}

module.exports = { averageNumber };
