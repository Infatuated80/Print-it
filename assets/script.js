// Début declaration tableau, constante et variables 

	const slides = [
	{
		"image":"slide1.jpg",
		"alt":"Notre imprimante en action !",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"alt":"La haute-définition pour vos bureaux !",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"alt":"La colorimétrie pour tous supports !",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"alt":"Découpeuse laser pour autocollants",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	];

	const flecheGauche = document.querySelector(".arrow_left")
	const flecheDroite = document.querySelector(".arrow_right")
	const urlImage = "./assets/images/slideshow/"
	let dots = document.querySelector(".dots")
	let banniere = document.getElementById("banniere")
	let paragrapheDynamique = document.querySelector("#paragrapheDynamique")
	let codeDot = "<div class='dot'></div>"
	let codeDotAllume = "<div class='dot_selected'></div>"
	let positionImage = 1;


// Fin déclaration tableau, constante et variables


// Début événementiels

	flecheGauche.addEventListener("click", () => 
	{
		gauche()
	});

	flecheDroite.addEventListener("click", () => 
	{
		droite()
	});

	document.addEventListener('keydown', (event) => 
	{
			
		switch (event.code)
		{
			case 'ArrowLeft':
			{
                gauche()
				break
			}

			case 'ArrowRight':
			{
                droite()
				break
			}	
		}
	});

// Fin événementiels


// Début déclaration fonctions

	function lesDot(codeHtml, codeHtmlAllume, dotAllume, tailleTab) 
	{
		let elementAjout = ""

		for(let i=0; i<tailleTab; i++)
		{
			if(i === dotAllume - 1)
			{
				elementAjout += codeHtmlAllume
			}
			else
			{
			elementAjout += codeHtml
			}
		}

		return elementAjout
	}

	function imagePlus(imgPos, tailleTab) 
	{
		if (imgPos === tailleTab)
		{
     		imgPos = 1 
		}
		else
		{
	 		imgPos += 1
		}

		return imgPos;
	}

	function imageMoins(imgPos, tailleTab) 
	{
		if (imgPos === 1)
		{
     	imgPos = tailleTab 
		}
		else
		{
	 	imgPos -= 1
		}

		return imgPos;
	}

	function gauche() 
	{
		console.log("Vous avez cliqué sur la flèche gauche !")
		positionImage = imageMoins(positionImage, slides.length)
		console.log(positionImage) 
		dots.innerHTML = lesDot(codeDot, codeDotAllume, positionImage, slides.length) 
		banniere.setAttribute("alt", slides[positionImage-1].alt)
		banniere.setAttribute("src", urlImage + slides[positionImage-1].image)
		paragrapheDynamique.innerHTML = slides[positionImage-1].tagLine	   
	}

	function droite() 
	{
	    console.log("Vous avez cliqué sur la flèche droite !")
		positionImage = imagePlus(positionImage, slides.length)
		console.log(positionImage)  
		dots.innerHTML = lesDot(codeDot, codeDotAllume, positionImage, slides.length)
		banniere.setAttribute("alt", slides[positionImage-1].alt)
        banniere.setAttribute("src", urlImage + slides[positionImage-1].image)
        paragrapheDynamique.innerHTML = slides[positionImage-1].tagLine
	}

// Fin déclaration fonctions


// Initialisation dots, banniere et paragraphe dynamiques

	dots.innerHTML = lesDot(codeDot, codeDotAllume, positionImage, slides.length)
	banniere.setAttribute("alt", slides[positionImage-1].alt)
	banniere.setAttribute("src", urlImage + slides[positionImage-1].image)
	paragrapheDynamique.innerHTML = slides[positionImage-1].tagLine

// Fin initialisation dots, banniere et paragraphe dynamiques