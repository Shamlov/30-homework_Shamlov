const rectangle  = {   // передача массива только в таком формате (2 диагональные точки прямоугольника)
    a: {
        x : 2,
        y : 1,
    },
    c: {
        x : 6,
        y : 12,
    }
}

const rectangle2  = {   // передача массива только в таком формате (2 диагональные точки прямоугольника)
    a: {
        x : -2,
        y : 6,
    },
    c: {
        x : 8,
        y : 4,
    }
}


// Функция принимает объект прямоугольник и выводит  информацию о нем (где какая точка расположена)    сохраняем в копию
const calculatedRectangle = {}
function rectanglePoints (points) {   
    let PointA = `Точка A(x= ${points.a.x} y=${points.a.y}); `
    let PointB = `Точка B(x= ${points.c.x} y=${points.a.y}); `
    let PointC = `Точка C(x= ${points.c.x} y=${points.c.y}); `
    let PointD = `Точка D(x= ${points.a.x} y=${points.c.y}).`

    calculatedRectangle.a = {
        x : points.a.x,
        y : points.a.y,
    }

    calculatedRectangle.b = {
        x : points.c.x,
        y : points.a.y,
    }

    calculatedRectangle.c = {
        x : points.c.x,
        y : points.c.y,
    }

    calculatedRectangle.d = {
        x : points.a.x,
        y : points.c.y,
    }
    return PointA + PointB + PointC + PointD
}
// rectanglePoints (rectangle)
// console.log(calculatedRectangle)



// Функция принимает объект прямоугольник и выводит  информацию о нем (где какая точка расположена)    мутируем передаваемый объект

function rectanglePoint222222(points) {   
    let PointA = `Точка A(x= ${points.a.x} y=${points.a.y}); `  // тут соответственно можно переделать все .
    let PointB = `Точка B(x= ${points.c.x} y=${points.a.y}); `
    let PointC = `Точка C(x= ${points.c.x} y=${points.c.y}); `
    let PointD = `Точка D(x= ${points.a.x} y=${points.c.y}).`

    points.a = {
        x : points.a.x,
        y : points.a.y,
    }

    points.b = {
        x : points.c.x,
        y : points.a.y,
    }

    points.c = {
        x : points.c.x,
        y : points.c.y,
    }

    points.d = {
        x : points.a.x,
        y : points.c.y,
    }
    return PointA + PointB + PointC + PointD
}
// console.log(rectanglePoint222222(rectangle))
// console.log(rectangle)





// Функция принимает объект прямоугольник и возвращает его ширину.
function rectangleWidth (points) {
    return Math.abs(points.c.x - points.a.x)
}
// console.log(rectangleWidth (rectangle))



// Функция принимает объект-прямоугольник и возвращает его высоту
function rectangleHeight(points) {
    return Math.abs(points.c.y - points.a.y)
}
// console.log(rectangleHeight(rectangle2))



// Функция принимает объект-прямоугольник и возвращает его площадь.
function areaRectangle(points) {
    return rectangleWidth (points) * rectangleHeight(points)
}
// console.log(areaRectangle(rectangle))



// Функция принимает объект-прямоугольник и возвращает его периметр
function perimeterRectangle(points) {
    return 2 * (rectangleWidth (points) + rectangleHeight(points))
}
// console.log(perimeterRectangle(rectangle))



// Функция изменения ширины прямоугольника. Она принамает объект-прямоугольник и на сколько единиц изменить ширину.
function changeWidthRectangle(points, changeWidth) {
    points.a.x += changeWidth
    points.c.x += changeWidth
}
// changeWidthRectangle(rectangle, 100)
// console.log(rectangle)


// Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить  высоту.
function changeHeightRectangle(points, changeHeight) {
    points.a.y += changeHeight
    points.c.y += changeHeight
}
// changeHeightRectangle(rectangle, 200)
// console.log(rectangle)


// Функция изменения ширины и высоты прямоугольника.  Она принимает объект-прямоугольник и два значения для изменения ширины и высоты.
function changeWidthHeight(points, changeWidth, changeHeight) {
    changeWidthRectangle(points, changeWidth)
    changeHeightRectangle(points, changeHeight)
}
// changeWidthHeight(rectangle, 55, 75)
// console.log(rectangle)


// Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.  сохраним в новый объект
function offsetX1(points, xoffsetX) {
    rectanglePoints (points)
    calculatedRectangle.a.x += xoffsetX    // в данном случае перезапишем скопированный объект. исходный сохранит свои значения
    calculatedRectangle.b.x += xoffsetX
    calculatedRectangle.c.x += xoffsetX
    calculatedRectangle.d.x += xoffsetX
    console.log('данные записаны в новый объект!!!!!!')
}
// offsetX1(rectangle, 100) 
// console.log(rectangle)
// console.log(calculatedRectangle)



// Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.  ниже я буду уже мутировать передаваемый объект
function offsetX1(points, xoffsetX) {
    rectanglePoint222222(points)
    points.a.x += xoffsetX    // в данном случае перезапишем скопированный объект. исходный сохранит свои значения
    points.b.x += xoffsetX
    points.c.x += xoffsetX
    points.d.x += xoffsetX
    console.log('мутируем передаваемый объект')
}
offsetX1(rectangle, 100)
console.log(rectangle)    // dblbv xnj j,]trn venbhjdfk

