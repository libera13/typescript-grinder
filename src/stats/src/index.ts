import { CSVFileReader } from "./CSVFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CSVFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWinds = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWinds++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWinds++;
  }
}

console.log(`Man united wons ${manUnitedWinds} times`);
