//@ts-check

let isTheSkyBlue = true;
let isTheSunUp = true;

if (isTheSkyBlue) {
    console.log("The sky is indeed blue");
} else if (!isTheSunUp) {
    console.log("It must be nighttime");
} else {
    console.log("It must be cloudy or a solar eclipse");
}

console.log(isTheSkyBlue, isTheSunUp);