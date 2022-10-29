const price = new Map();
price.set('056', 10);
price.set('044', 15);
price.set('046', 12);
price.set('048', 14);
price.set('0512', 9);

const cities =  new Map();
	cities.set('056', 'Dnipro');
	cities.set('044', 'Kiev');
	cities.set('046', 'Kharkiv');
	cities.set('048', 'Odessa');
	cities.set('0512', 'Mykolaiv');


function callprice(){
	let code =String(document.getElementById("code").value)
	let time =parseInt(document.getElementById("time").value)	
	let minutes = Math.round(time/60)

	let totalprise = minutes * price.get(code)	
		
	document.getElementById("answer").innerHTML = cities.get(code) + "  " + code+ "  " +  totalprise +"  "+ "\u{20B4}"
}

