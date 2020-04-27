function isPrime(m){
	for(let i = 2; i < m; i++){
	if(m % i ==0){
	return false
	}
	return true
	}
}


function getPrime(n){
	for(let i = 2; i <= n; i++){
	   if(isPrime(i)){
	  console.log(i)
	}
  } 
}