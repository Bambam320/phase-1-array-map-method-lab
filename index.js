const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let newArr = []
    for(let ele of tutorials) {
    newArr.push(ele.split(' '))
  }
  let arry = []
  for(let word of newArr) {
   arry.push(word.map(letter => letter[0].toUpperCase() + letter.slice(1)))
    }
  let array = []
  for (let sent of arry) {
    array.push(sent.join(' '))
  }
  return array
  }


