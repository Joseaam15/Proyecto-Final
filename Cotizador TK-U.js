var edaddeAsegurado=0; // Variebles globales que 
var recargoEsposa=0;          // serviran para los datos
var recargoHijos=0;     // que no se tienen
var recargos=0;
var recargo_esposo=0;
const precioBase = 250;
var edad_conyuge=0;
var totalPagar = [precioBase + comision + recargo_esposo + recargoHijos + recargoEsposa];

// Asegurado Principal
var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
edaddeAsegurado= 2018-anioNacimiento;
alert("su edad es: " + edaddeAsegurado);
var conyuge = prompt("¿Tiene cónyuge?", "si/no");
if(conyuge == "si"){
var anioNacimientoConyuge = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
edad_conyuge=2018-anioNacimientoConyuge;
alert("La edad de su conyuge es: " + edad_conyuge);
}
if (edad_conyuge<=30){
	recargoEsposa=precioBase * 0.01;
  document.write("Su recargo por tener conyuge es:" + recargoEsposa);
}if (edad_conyuge >=31 && edad_conyuge <=39){
	recargoEsposa = precioBase * 0.02;
  document.write("Su recargo por tener conyuge es:" + recargoEsposa);
}if(edad_conyuge >=40 && edad_conyuge <=49){
	recargoEsposa = precioBase * 0.03;
  document.write("Su recargo por tener conyuge es:" + recargoEsposa);
}if(edad_conyuge >=50 && edad_conyuge <=70){
	recargoEsposa = precioBase * 0.05;
  document.write("Su recargo por tener conyuge es:" + recargoEsposa);
}


var hijos = prompt("¿Tiene hijos?", "si/no");
//if(hijos =="si"){
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");	
//}if(hijos == "no"){
	//cantidadHijos= 0;
//}
recargoHijos= precioBase * cantidadHijos * 0.01;
document.write("Su recargo por tener hijos es:" + recargoHijos);
var comision = precioBase * 0.30;

if(edaddeAsegurado >=18 && edaddeAsegurado<=21){
	recargo_esposo=0;
	totalPagar = precioBase + comision + recargo_esposo + recargoHijos + recargoEsposa;
	document.write("Estimado cliente"+nombreCompleto+"<br>Su Recargo por edad es: "+recargo_esposo+"<br>Su recargo por Conyuge es: "+recargoEsposa+"<br>Su recargo por hijos es: "+recargoHijos+"<br>Su Total a Pagar es: "+totalPagar);
}if (edaddeAsegurado >=21 && edaddeAsegurado <= 25){
	recargo_esposo=precioBase*0.01;
	totalPagar = precioBase + comision + recargo_esposo + recargoHijos + recargoEsposa;
	document.write("Estimado cliente"+nombreCompleto+"<br>Su Recargo por edad es: "+recargo_esposo+"<br>Su recargo por Conyuge es: "+recargoEsposa+"<br>Su recargo por hijos es: "+recargoHijos+"<br>Su Total a Pagar es: "+totalPagar);
}else if(edaddeAsegurado >=25 && edad_deAsegurado <= 30){
	recargo_esposo=precioBase*0.02;
	totalPagar = precioBase + comision + recargo_esposo + recargoHijos + recargoEsposa;
	document.write("Estimado cliente"+nombreCompleto+"<br>Su Recargo por edad es: "+recargo_esposo+"<br>Su recargo por Conyuge es: "+recargoEsposa+"<br>Su recargo por hijos es: "+recargoHijos+"<br>Su Total a Pagar es: "+totalPagar);
}else if(edaddeAsegurado >=30 && edaddeAsegurado <=40){
	recargo_esposos=precioBase*0.05;
	totalPagar = precioBase + comision + recargo_esposo + recargoHijos + recargoEsposa;
	document.write("Estimado cliente"+nombreCompleto+"<br>Su Recargo por edad es: "+recargo_esposo+"<br>Su recargo por Conyuge es: "+recargoEsposa+"<br>Su recargo por hijos es: "+recargoHijos+"<br>Su Total a Pagar es: "+totalPagar);
}if(edaddeAsegurado >=40 && edaddeAsegurado <=50){
	recargo_esposo=precioBase*0.08;
	comision = precioBase * 0.30;
	totalPagar = precioBase + comision + recargo_esposo + recargoHijos + recargoEsposa;
	document.write("Estimado cliente"+nombreCompleto+"<br>Su Recargo por edad es: "+recargo_esposo+"<br>Su recargo por Conyuge es: "+recargoEsposa+"<br>Su recargo por hijos es: "+recargoHijos+"<br>Su Total a Pagar es: "+totalPagar);
}if(edaddeAsegurado >=50 && edaddeAsegurado <=65){
	recargo_esposo=precioBase*0.12;
	comision = precioBase * 0.30;
	totalPagar = precioBase + comision + recargo_esposo + recargoHijos + recargoEsposa;
	document.write("Estimado cliente"+nombreCompleto+"<br>Su Recargo por edad es: "+recargo_esposo+"<br>Su recargo por Conyuge es: "+recargoEsposa+"<br>Su recargo por hijos es: "+recargoHijos+"<br>Su Total a Pagar es: "+totalPagar);
}else{
	alert("Lo sentimos No puede ser asegurado");
}
var totalPagar = precioBase + comision + recargo_esposo + recargoHijos + recargoEsposa;