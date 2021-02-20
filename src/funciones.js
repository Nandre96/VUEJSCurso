function sumar(num) {
  console.log(num);
}

sumar(10);

const sumarDos = (num) => {
  console.log(num);
};

sumarDos(20);

const mensaje = (nombre) => `Hola soy ${nombre}`;

const resultadoDos = mensaje("Nohelvis la mejor");
console.log(resultadoDos);

const numero = (num1, num2) => `El numero es : ${num1 + num2}`;

const resultado3 = numero(10, 30);
console.log(resultado3);

const numero3 = (num1, num2) => `El numero es: ${num1 + num2}`;

let numero1 = numero3(10, 30);
console.log(numero1);
