function type(elem) {
    if(elem == null) {
        return elem + '' ;
    }
    return Object.prototype.toString.call(elem).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
}
console.log(type(null))
var isType = function (obj) {
    return toString.call(obj).slice(8,-1);
}
toString.call(elem).slice(8,-1);
console.log(isType(undefined))
console.log(typeof null)

function type(elem) {
    if(elem == null){
        return elem + ''
    }
    return toString.call(elem).replace(/[\[\]]/g,'').split('')[1].toLowerCase();
}

//判断是否为回文字符串

function fn(str){
    if(typeof str !== 'string'){
        throw new Error('must string type')
    }
    return str === str.split('').reverse().join('')
}
console.log('121121'.split('').reverse().join(''))
console.log(fn('121121')) 

// 类型判断

function type (elem) {
    return toString.call(elem)
}
console.log(type(null))
let elem =[]
console.log(toString.call(elem).replace(/[\[\]]/g,'').split(' ')[1].toLowerCase())

toString.call(elem).replace(/[\[\]]/g,'').split(' ').toLowerCase()

Object.prototype.toString(elem).replace(/[\[\]]/g,'').split('')[1].toLowerCase();