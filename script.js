const net = new brain.NeuralNetwork()
const data = [
    { input: {r: 0, g: 0, b: 0}, output: [1] },
    { input: {r: 1, g: 1, b: 1}, output: [0] },
];

net.train(data)

const colorEl = document.getElementById('color')
const guessEl = document.getElementById('guess')
let color;

setRandomColor()

function setRandomColor() {
    color = {r: Math.random(), g: Math.random(), b: Math.random()}
    console.log(color)
    console.log(color)
    const guessResult = net.run(color)[0]
    console.log(guessResult)
    guessEl.style.color = guessResult > 0.5 ? '#FFF' : '#000'

    colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}