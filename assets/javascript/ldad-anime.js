
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
  
  
  

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step4});
}

function step4()
 {
  
  TweenMax.to('#ldad-hero-banner-friendship', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})
  TweenMax.to('#ldad-hero-banner-competition-image', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-friendship-image', .75, {autoAlpha:1, x: "-200px", ease: Back.easeOut})
 
  

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step5});
}

function step5()
 {
  
  TweenMax.to('#ldad-hero-banner-discipline', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})
  TweenMax.to('#ldad-hero-banner-friendship-image', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-discipline-image', .75, {autoAlpha:1, x: "-200px", ease: Back.easeOut})
  //TweenMax.to('#ldad-hero-banner-spirit', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})
  

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step6});
}
function step6()
 {
  
  TweenMax.to('#ldad-hero-banner-spirit', .75, {autoAlpha:1, x: "180px", ease: Back.easeOut})
  TweenMax.to('#ldad-hero-banner-discipline-image', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-spirit-image', .75, {autoAlpha:1, x: "-200px", ease: Back.easeOut})
  
  

  TweenMax.to('#ldad-anime-main' , 3, {onComplete:step7});
}

function step7(){
  TweenMax.to('#ldad-hero-banner-spirit', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-discipline', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-friendship', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-competition', .75, {autoAlpha:0})
  TweenMax.to('#ldad-hero-banner-spirit-image', .75, {autoAlpha:0})

  TweenMax.to('#ldad-hero-banner-all-these-things', .75, {autoAlpha:1, delay: 1})


}




 