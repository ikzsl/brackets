module.exports = function check(str, bracketsConfig) {
  const pairsSubsrts = bracketsConfig.map(([left, right]) => left + right);
  let tempString = str;
  while (pairsSubsrts.some((pair) => tempString.includes(pair))) {
    pairsSubsrts.forEach((substr) => {
      tempString = tempString.replaceAll(substr, "")
    })
  }
  return !tempString.length;
}
