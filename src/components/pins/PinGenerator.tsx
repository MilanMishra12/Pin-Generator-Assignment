const PinGenerator = () => {
  var length: number = 4;

  let characterList = "123456789";

  var PinGenerate1: string = "";
  var PinGenerate2: string = "";
  var PinGenerate3: string = "";
  var PinGenerate4: string = "";
  var PinGenerate5: string = "";
  var PinGenerate: string = "";

  for (let i = 0; i < length; ++i) {
    PinGenerate1 =
      PinGenerate1 + characterList[getRandomInt(0, characterList.length - 1)];
    PinGenerate2 =
      PinGenerate2 + characterList[getRandomInt(0, characterList.length - 1)];
    PinGenerate3 =
      PinGenerate3 + characterList[getRandomInt(0, characterList.length - 1)];
    PinGenerate4 =
      PinGenerate4 + characterList[getRandomInt(0, characterList.length - 1)];
    PinGenerate5 =
      PinGenerate5 + characterList[getRandomInt(0, characterList.length - 1)];
  }
  //storing all 5 different pins into one.
  PinGenerate =
    " " +
    PinGenerate1 +
    "     " +
    PinGenerate2 +
    "      " +
    PinGenerate3 +
    "       " +
    PinGenerate4 +
    "     " +
    PinGenerate5;

  return PinGenerate;

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

export default PinGenerator;
