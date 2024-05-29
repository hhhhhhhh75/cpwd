function scramble(v, word){
	
	const scrableTextId = v.id;
	let scrambleText = word;
	let scrambleLen = scrambleText.length;
	let randomChars = ['0', '1'];
	let newText = [];
	
	function scrambleX(num) {
		for (let i = 0; i < scrambleLen; i+num){

		newText.splice(scrambleLen-1, 1, scrambleText[i+1])
		alert(newText.join(''));
		}
	}
	
	for (let i = 0; i < scrambleLen; i++){
		newText.push(Math.floor(Math.random() * 2));
		
	}
	
	/*for (let i = 0; i < scrambleLen; i++){
		
		alert(scrambleText[i]);
		newText.splice(scrambleLen-1, 1, scrambleText[i+1])
		alert(newText.join(''));
	}
	*/
	for (let i = 0; i < scrambleLen; i++){
	setTimeout(function(){ scrambleX(1); }, 1000)
	
	}
}

function scrambleA(v, message) {
	const scrableTextId = v;
	let scrambleText = message;
	var count = document.getElementById("counter").innerHTML;
	const textt = [];
	const texttt = [];
	
	for (let i = 0; i < scrambleText.length; i++){
		textt.push(scrambleText[i]);
		texttt.push(Math.floor(Math.random() * 2));
	}
	
	document.getElementById(v).innerHTML = texttt.join('');

	for (let i = 0; i < Math.floor(Math.random() * 5); i++){
		texttt[count.length] = textt[Math.floor(Math.random() * textt.length)];
		document.getElementById(v).innerHTML = textt.join('');
	}
	
	count = count + 1;
	document.getElementById("counter").innerHTML = count;
	
	
}

function scrambleB(v, message) {
	let scrambleText = document.getElementById(v).innerHTML;
	let textt = [];
	let texttt = [];
	let nums = [];
	
	for (let i = 0; i < message.length; i++){
		nums.push(i);
		texttt.push(message[i]);
		textt.push(Math.floor(Math.random() * 2));
		
	}
	
	let ranNumOne = nums[Math.floor(Math.random() * nums.length)];
	let ranNumTwo = nums[Math.floor(Math.random() * nums.length)];
	let ranNumThree = nums[Math.floor(Math.random() * nums.length)];
	
	for (let i = 0; i < nums.length; i++){
		if(scrambleText[ranNumOne] === "0" || "1"){
			nums.splice(ranNumOne, 1);
		}
		if(scrambleText[ranNumTwo] === "0" || "1"){
			nums.splice(ranNumTwo, 1);
		}
		if(scrambleText[ranNumThree] === "0" || "1"){
			nums.splice(ranNumThree, 1);
		}
	} 

	
	
	
	textt[ranNumOne] = texttt[Math.floor(Math.random() * nums.length)];
	textt[ranNumTwo] = texttt[Math.floor(Math.random() * nums.length)];
	textt[ranNumThree] = texttt[Math.floor(Math.random() * nums.length)];
	
	document.getElementById(v).innerHTML = message;
	document.getElementById(v).innerHTML = textt.join('');
	

	
	
}

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

function slide(v, val){
	const whichPort = document.getElementById(v);
	const allImages = whichPort.querySelectorAll("img");;
	
	const allImagesArray = [];
	
	
	var counter = parseInt(document.getElementById("count").innerHTML);

	if (document.getElementById("count").innerHTML === 2){
		alert("dd");
	}
	else {
		if (counter === -1){
		counter = allImages.length;
		}
	}
	
	for (let i = 0; i < allImages.length; i++){
		if (allImages[i].style.display === "flex"){
		 var counter = i;
		}
	}
	
	

	

	for (let i = 0; i < allImages.length; i++){
		if (i === counter){
			allImages[counter+val].style.display="flex";
		}
		else {allImages[counter].style.display="none"}
	}

	counter = counter + val;
	
	whichPort.getElementById("count").innerHTML = counter;
}

function toggleMenu() {
	if (document.getElementById("side-menu").style.visibility === "visible"){
		document.getElementById("side-menu").style.opacity="0";
		document.getElementById("side-menu").style.visibility="hidden";
		document.getElementById("main-menu").style.display="none";
	}
	else{
		document.getElementById("side-menu").style.visibility="visible";
		document.getElementById("side-menu").style.opacity="1";
		document.getElementById("main-menu").style.display="none";
	}
}

function xAnimation() {
	if (document.getElementById("side-menu").style.opacity === "1"){
		document.getElementById("bar3").style.marginTop = "0px";
		document.getElementById("bar1").style.transform = "rotate(0deg)";
		document.getElementById("bar2").style.backgroundColor = "green";
		document.getElementById("bar3").style.transform = "rotate(0deg)";
	}
	
	else{
		document.getElementById("bar3").style.marginTop = "-16px";
		document.getElementById("bar1").style.transform = "rotate(45deg)";
		document.getElementById("bar2").style.backgroundColor = "transparent";
		document.getElementById("bar3").style.transform = "rotate(-45deg)";
	}
}