
 function step1()
	{
		
  
		TweenMax.to('#ldad-anime-main' , .2, {onComplete:step2});
	}

 function step2()
 {
 
  TweenMax.to('#ldad-hero-banner-copy1' , 1, {autoAlpha:1})
  TweenMax.to('#ldad-hero-banner-copy1' , 1, {scale: 1, ease: Bounce.easeOut})
  TweenMax.to('#ldad-hero-banner-copy1', .5, {autoAlpha:0, scale: 0, delay: 4})

  TweenMax.to('#ldad-anime-main' , 4, {onComplete:step3});
}

function step3()
 {
  TweenMax.to('#ldad-hero-banner-competition', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})
  TweenMax.to('#ldad-hero-banner-competition-image', .75, {autoAlpha:1, x: "-180px", ease: Back.easeOut})

  TweenMax.to('#ldad-hero-banner-green-check1', .75, {autoAlpha:1, scale: 1, ease: Bounce.easeOut, delay: 1})
  
  
  

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step4});
}

function step4()
 {
  
  TweenMax.to('#ldad-hero-banner-friendship', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})
  TweenMax.to('#ldad-hero-banner-competition-image', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-friendship-image', .75, {autoAlpha:1, x: "-200px", ease: Back.easeOut})

  TweenMax.to('#ldad-hero-banner-green-check2', .75, {autoAlpha:1, scale: 1, ease: Bounce.easeOut, delay: 1})
 
  

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step5});
}

function step5()
 {
  
  TweenMax.to('#ldad-hero-banner-discipline', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})
  TweenMax.to('#ldad-hero-banner-friendship-image', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-discipline-image', .75, {autoAlpha:1, x: "-200px", ease: Back.easeOut})
  //TweenMax.to('#ldad-hero-banner-spirit', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})

  TweenMax.to('#ldad-hero-banner-green-check3', .75, {autoAlpha:1, scale: 1, ease: Bounce.easeOut, delay: 1})
  

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step6});
}
function step6()
 {
  
  TweenMax.to('#ldad-hero-banner-spirit', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})
  TweenMax.to('#ldad-hero-banner-discipline-image', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-spirit-image', .75, {autoAlpha:1, x: "-200px", ease: Back.easeOut})

  TweenMax.to('#ldad-hero-banner-green-check4', .75, {autoAlpha:1, scale: 1, ease: Bounce.easeOut, delay: 1})
  
  

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step7});
}

function step7(){
  TweenMax.to('#ldad-hero-banner-spirit', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-discipline', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-friendship', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-competition', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-spirit-image', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-green-check1,#ldad-hero-banner-green-check2,#ldad-hero-banner-green-check3,#ldad-hero-banner-green-check4', .75, {autoAlpha:0})

  TweenMax.to('#ldad-hero-banner-all-these-things', .75, {autoAlpha:1, delay: 1})

  TweenMax.to('#ldad-anime-main' , 5, {onComplete:step8});
}

function step8(){

  TweenMax.to('#ldad-hero-banner-all-these-things', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-at-ldad', .75, {autoAlpha:1, scale: 1, ease: Bounce.easeOut})
  TweenMax.to('#ldad-hero-banner-at-ldad-image', .75, {autoAlpha:1, y: "300px",  delay: 1.5})
  TweenMax.to('#ldad-hero-banner-we-believe', .75, {autoAlpha:1, scale: 1, ease: Bounce.easeOut,  delay: 2.3})

  TweenMax.to('#ldad-anime-main' , 5, {onComplete:step9});
}
function step9(){

  TweenMax.to('#ldad-hero-banner-at-ldad', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-at-ldad-image', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-we-believe', .75, {autoAlpha:0})

  TweenMax.to('#ldad-hero-banner-humans-dance', .75, {autoAlpha:1})

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step10});
}

function step10(){

  TweenMax.to('#ldad-hero-banner-humans-dance', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-because', .75, {autoAlpha:1, x: "50px"})

  TweenMax.to('#ldad-anime-main' , 2, {onComplete:step11});
}

function step11(){

  TweenMax.to('#ldad-hero-banner-because', .75, {autoAlpha:0, y: "-50px"})
  TweenMax.to('#ldad-hero-banner-dance-is-human', .75, {autoAlpha:1, y: "-50px"})

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step12});
  
}

function step12(){

  TweenMax.to('#ldad-hero-banner-join-us-image', .75, {autoAlpha:1})
  TweenMax.to('#ldad-hero-banner-dance-is-human', .75, {autoAlpha:0})

  TweenMax.to('#ldad-hero-banner-register-image', .75, {autoAlpha:1, delay: 2})
  
}





 