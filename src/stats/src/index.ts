import {CSVFileReader} from "./CSVFileReader";

const csvFileReader = new CSVFileReader("football.csv")
csvFileReader.read()
const matches = csvFileReader.data
const vss = matches[0][0];
// let manUnitedWinds = 0;
//

//
// for (let match of matches) {
//     if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWinds++;
//     } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//         manUnitedWinds++;
//     }
// }
//
// console.log(`Man united wons ${manUnitedWinds} times`)