// Задача 1

let out1 = document.getElementById('out1')
let out2 = document.getElementById('out2')
let out3 = document.getElementById('out3')
let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')

but1.onclick = f1
function f1() {
    for (i = 0; i < 20; i++) { a.push(Math.floor(Math.random() * 20) + 1) }
    out1.innerHTML = a
}
let a = [];
const copyArr = a;
let p = 0;
but2.onclick = f2
function f2() {
    for (var i = 0; i < copyArr.length; i++) {
        if (copyArr[i] == 5) { copyArr.splice(i, 1, '0'); p++ }
    }

    out2.innerHTML = copyArr
}
but3.onclick = f3
function f3() { out3.innerHTML = p }

// Задача 2
let out4 = document.getElementById('out4')
let out5 = document.getElementById('out5')
let out6 = document.getElementById('out6')
let out7 = document.getElementById('out7')
let but4 = document.getElementById('but4')
let but5 = document.getElementById('but5')
let but6 = document.getElementById('but6')
let but7 = document.getElementById('but7')
let b = [];
let res = []
let d = []
let g = []
let mas3 = []
let str = ''




//массив
but4.onclick = f4
function f4() {
    for (i = 0; i < 100; i++) { b.push(Math.floor(Math.random() * 91) + 10) }
    out4.innerHTML = b

}

//удаляем числа кратные пяти
but5.onclick = f5
function f5() {
    res = b.filter(elem => elem % 5 != 0);
    out5.innerHTML = res

}


//удаляем повторяющиеся числа
but6.onclick = f6
function f6() {
    d = Array.from(new Set(res));
    out6.innerHTML = d;
}
but7.onclick = f7
function f7() {
    d.forEach((item) => {
        result = String(item);
        g.push(result)
    })///каждый элемент преобразовываю в строку
    console.log(g)//вывожу в консоль массив со строками, выводится
    for (let i of g) {//прохожусь по каждому элементу массива
        let isIt = true
        for (let j = 1; j < i.length; ++j) { if (i[j - 1] == i[j]) { isIt = false } break }//прохожусь по каждому знаку внутри строки
        if (isIt == true) { mas3.push(i) }


    } console.log(mas3)
    for (let i = 0; i < mas3.length; i += 3) {
        str += '<tr><td>' + mas3[i] + '</td><td>' + mas3[i + 1] + '</td><td>' + mas3[i + 2] + '</td></tr>';

    } out8.innerHTML = str




}




