// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
//
//     Find the errors in the code to get the celsius converter working properly.
//
//     To convert fahrenheit to celsius:
//celsius = (fahrenheit - 32) * (5/9)

const weatherInfo = temperature => temperatureMesage(convertToCelsius(temperature));

const convertToCelsius = temperature => (temperature - 32) * (5 / 9);

const temperatureMesage = temperature => temperature + ((temperature <= 0) ? " is freezing temperature" : " is above freezing temperature")

console.log(weatherInfo(5));



