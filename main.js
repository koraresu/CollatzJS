var mayor = 0;
var numero = 0;
var init = '';
function unoan(n){
	init = getDate();
	var x = 1;
	var busy = false;
	var processor = setInterval(function(){
		if(!busy){
			busy = true;

			var c = collatz(x);
			console.log(x+' | '+c);
			if(c>mayor){
				mayor = c;
				numero = x;

				setData(numero, mayor);
			}
			x++;
			if(x==n){
				console.log();
				$('#tiempo').html((getDate()-init)+" milisegundos");
				clearInterval(processor); 
			}
			busy = false;
		}
	});
	setData(numero, mayor);
}
function collatz(x){
	var z = 0;
	do{
		if(x%2 != 1){
			x=x/2;
		}else{
			x=(x*3)+1;
		}
		z++;
	}while(x>1);
	return z;
}
function setData(numero, mayor){
	$('#span').html("El mayor es "+numero+" con "+mayor+" numero de iteraciones");
}
function getDate(){
	var d = new Date();
	return d.getTime();
}
$(document).on('ready',function(){
	unoan(1000000);
});