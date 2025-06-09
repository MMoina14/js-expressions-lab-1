

const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

function fToC(f) {
  return (f - 32) * 5 / 9;
}

function cToF(c) {
  return (c * 9 / 5) + 32;
}

const fTemps = [
  day1TempF, day3TempF, day5TempF, day7TempF, day9TempF, day11TempF,
  day13TempF, day15TempF, day17TempF, day19TempF, day21TempF,
  day23TempF, day25TempF, day27TempF, day29TempF
];

const cTemps = [
  day2TempC, day4TempC, day6TempC, day8TempC, day10TempC, day12TempC,
  day14TempC, day16TempC, day18TempC, day20TempC, day22TempC,
  day24TempC, day26TempC, day28TempC, day30TempC
];

const tot_temperature_in_fahrenheit =
  fTemps.reduce((sum, val) => sum + val, 0) +
  cTemps.reduce((sum, c) => sum + cToF(c), 0);

const tot_temperature_in_celsius =
  cTemps.reduce((sum, val) => sum + val, 0) +
  fTemps.reduce((sum, f) => sum + fToC(f), 0);

const totalDays = 30;

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / totalDays;
const avg_temperature_in_celsius = tot_temperature_in_celsius / totalDays;

// Export variables so tests can access them
module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};


