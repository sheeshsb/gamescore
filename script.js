	
		homescore = document.getElementById("homescore");
		awayscore = document.getElementById("awayscore");
		let hscore=0;
		let ascore = 0;

		document.getElementById("h1").addEventListener("click",function(){
			hscore++;
			homescore.textContent=hscore;
		})


		document.getElementById("h2").addEventListener("click",function(){
			hscore=hscore+2;
			homescore.textContent = hscore;
		})

		document.getElementById("h3").addEventListener("click",function(){
			hscore+=3;
			homescore.textContent = hscore;
		})



		document.getElementById("a1").addEventListener("click",function(){
			ascore++;
			awayscore.textContent=ascore;
		})


		document.getElementById("a2").addEventListener("click",function(){
			ascore+=2;
			awayscore.textContent = ascore;
		})

		document.getElementById("a3").addEventListener("click",function(){
			ascore+=3;
			awayscore.textContent = ascore;
		})


		document.getElementById("reset").addEventListener("click", function(){
			hscore = 0;
			ascore = 0;
			homescore.textContent = hscore;
			awayscore.textContent = ascore;
		})

















