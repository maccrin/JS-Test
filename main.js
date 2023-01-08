// ex 1
const array = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon']
array.forEach(eachEle => console.log(eachEle));


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rndInt = randomIntFromInterval(0, array.length);
console.log(`Here is randomly chosen dish-${array[rndInt]}`)

//ex 2
const button = document.createElement('button');
button.innerHTML = 'Click Me';
const h1 = document.createElement('h1');
const body = document.querySelector('body');
body.appendChild(button);
body.appendChild(h1);

button.addEventListener('click', () => {
    h1.innerHTML = 'JavaScript Test';
    body.style.backgroundColor = 'beige';
})

//ex 3
const getName = async () => {

    try {
        const req = await fetch('https://reqres.in/api/users', {
            method: 'GET',
            headers: {
                'ACCPET': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        console.log(req)
        if (req.status !== 200) {
            throw new Error`something went wrong`
        }
        const resposne = await req.json();
        console.log(resposne);
        const nameArray = resposne.data.slice(0, 3).map(eachData => eachData.first_name)
        nameArray.forEach(element => {
            const div = document.createElement('div');
            div.innerHTML = element;
            body.appendChild(div)
            console.log(`First Name of first 3 users are ${nameArray}`)

        });



    }
    catch (error) {
        console.log(error)

    }
}
getName();

//ex 4
class Person {
    constructor(firstName) {
        this.firstName = firstName
    }
    sayHello() {
        console.log(`Hello my name is ${this.firstName}`)
    }
}

const maddy = new Person('Maddy');
maddy.sayHello();
