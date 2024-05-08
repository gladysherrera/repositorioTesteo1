//GLADYS HERRERA
//
// calculo de potencia (usando funciones), ingresando la base y el exponente
import * as rls from "readline-sync";

let base = rls.questionInt("ingrese la base: ");

let exp = rls.questionInt("Ingrese el exponente: ");
while (exp<0) {
    console.log("Error el exponente debe ser mayor o igual a 0");
    exp = rls.questionInt("Ingrese el exponente: ");
}

console.log(base, "elevado a ", exp, " = ", elevar(base, exp));

function elevar(base:number,exp:number): number {
    let multip : number = 1;
    for (let i:number =1; i<=exp; i++ ) {
        multip *= base;
    }
    return multip;
}

