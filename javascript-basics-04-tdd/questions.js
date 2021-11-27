
const stringSize = (text) => {
    const size = text.length;
    return size;
}
const replaceCharacterE = (text) => {
    return text.replace("e"," ");
}
const concatString = (text1, text2) => {
return text1.concat(text2);
}
const showChar5 = (text) => {
return text.charAt(4);
}
const showChar9 = (text) => {
    return text.slice(0, 9);
}
const toCapitals = (text) => {
  return  text.toUpperCase();
}
const toLowerCase = (text) => {
return text.toLowerCase();
}
const removeSpaces = (text) => {
return text.trim();
}
const IsString = (text) => {
return typeof text === 'string' ;
}
const getExtension = (text) => {
   return text.substr(-3);
}
const countSpaces = (text) => {
    return  text.split(" ").length -1;
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
return Math.pow(x,y);
}
const absoluteValue = (num) => {
return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
   
}
const circleSurface = (radius) => {
   return  Math.round(Math.pow(radius, 2) * Math.PI);
    
}
const hypothenuse = (ab, ac) => {
return Math.hypot(ab,ac);
}
const BMI = (weight, height) => {
  return Number((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {
var arr = ["Html", "CSS", "Java", "PHP"];
return arr;
}

const createNumbersArray = () => {
const arr = [0,1,2,3,4,5];
return arr;
}

const replaceElement = (languages) => {
    languages.splice(2,1,'Javascript');
    return languages;
}

const addElement = (languages) => {
    languages.splice(4, 2,'Ruby', 'Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1);
    return numbers;
}

const removeFirst = (languages) => {
languages.splice(0, 1);
return languages;
}

const removeLast = (languages) => {
    languages.splice(4, 1);
    return languages;
}

const convertStrToArr = (social_arr) => {
return social_arr.split(',');
}

const convertArrToStr = (languages) => {
return languages.toString();
}

const sortArr = (social_arr) => {
return social_arr.sort();
}

const invertArr = (social_arr) => {
return social_arr.reverse();
}