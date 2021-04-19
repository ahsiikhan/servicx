/*-------------toggle style switcher-----------*/

	const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
	styleSwitcherToggler.addEventListener("click", ()=>{
	document.querySelector(".style-switcher").classList.toggle("open");
	})

	//hide style - seitcher on scroll
	window.addEventListener("scroll", ()=>{
		if(document.querySelector(".style-switcher").classList.contains("open")){
			document.querySelector(".style-switcher").classList.remove("open")
		}
})

	/*--------theme colors---------*/
	const alternateStyles = document.querySelectorAll(".alternate-style");
	
	function setActiveStyle(color) {
		alternateStyles.forEach((style)=>{
			if(color=== style.getAttribute("title")){
				style.removeAttribute("disabled");
			}
			else{
				style.setAttribute("disabled","true");
			}
		})
	}

/*-------------theme light and dark mode-------------
	const dayNignt = document.querySelector(".day-night");

	dayNignt.addEventListener("click", ()=>{
		dayNignt.querySelector("i").classList.toggle("fa-sun");
		dayNignt.querySelector("i").classList.toggle("fa-moon");
		document.body.classList.toggle("dark");
	})


window.addEventListener("load", ()=>{
	if(document.body.classList.contains("dark")){
		dayNignt.querySelector("i").classList.add("fa-sun");
	}else{
		dayNignt.querySelector("i").classList.add("fa-moon");
	}
})
*/
