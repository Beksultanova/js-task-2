// 1. Дана строка  ** 'ddd@bbb@ccc' ** .Замените все  ** @ ** на  ** '!'
const replace = 'ddd@bbb@ccc';
console.log(replace.replace(/@/gi, '!'));