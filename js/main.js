/////--------------get date-----------------------------------
let year = new Date().getFullYear(); 
document.getElementById('yearDate').textContent = ` \u00A9 ${year} Rio`

// ---------------------------------navigation menu---------------------------------------------
function naviMenu(){
  const hamburgerBtn=document.querySelector(".hamburger-btn"),
  navMenu=document.querySelector(".nav-menu"),
  closeNavBtn=navMenu.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click",showNavMenu);
  closeNavBtn.addEventListener("click",hideNavMenu);
  function showNavMenu(){
    navMenu.classList.add("open");
    // bodyScrollingToggle()
  }
  function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect()
    // bodyScrollingToggle()

  }
  function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(()=>{
      document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
  }
  //attaching an event handler to document
  document.addEventListener("click",(event)=>{
      if(event.target.classList.contains('link-item')){
        //make sure event.target.hash has a value before overriding default behaviour
        if(event.target.hash !==""){
          //prevent default anchor click behaviour
            event.preventDefault()
            const hash = event.target.hash;
            //deactivate existing active 'section'
            document.querySelector(".section.active").classList.add("hide");
            document.querySelector(".section.active").classList.remove("active");
            //activate new section 
            document.querySelector(hash).classList.add("active")
            document.querySelector(hash).classList.remove("hide")
            //deactivate existing active navigation menu 'link item' 
            navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
            navMenu.querySelector(".active").classList.remove("active","inner-shadow");
          //if clicked 'link item is contained within  the navigationn menu'
          if(navMenu.classList.contains("open")){
                //activate new navigation  menu 'link-item'
                event.target.classList.add("active","inner-shadow");
                event.target.classList.remove("outer-shadow","hover-in-shadow"); 
                //hide navigation menu
                hideNavMenu();
          }
          else{
            let navItems=navMenu.querySelectorAll(".link-item")
            navItems.forEach((item)=>{
              if(hash===item.hash){
                //activate new  navigation menu 'link-item'
                item.classList.add("active","inner-shadow");
                item.classList.remove("outer-shadow","hover-in-shadow");
              }
            })
            fadeOutEffect();
          }
          //add hash(#) to url
          window.location.hash=hash;
        


            

        }
      }
      
  })
}naviMenu()
//---------------------------about section tabs----------------------------------------------

//assigning each class to a variable
let experience = document.querySelector('.experience');
let skill  = document.querySelector('.skills');
let education = document.querySelector('.education');
let buttons = document.querySelectorAll('.tab-item')
let array = [skill, experience, education]
let skillArray = []
array.forEach(items =>{
  items.style.transition = '0.5s'
})
// Functions
const creatShadow = (items, arr)=>{
    items.classList.add('active')
    items.classList.add('outer-shadow')
    if(arr.style.display == 'block'){
      arr.style.marginLeft = '0px'
      arr.style.display == 'block'
    }else{
      arr.style.display = 'block'
      arr.style.opacity = '0%'
      arr.style.marginLeft = '400px'
      setTimeout(()=>{
        arr.style.marginLeft = '0px'
        arr.style.opacity = '100%'
      },100)

    }

}

const displayNone = (array)=>{
  array.forEach(items =>{
    items.style.display = 'none'
  })
}

const removeShadow = (array, check)=>{
  array.forEach(inner =>{
    if(inner.dataset.target !== check){
      inner.classList.remove('active')
      inner.classList.remove('outer-shadow')

    }

})

}

const arrayPush = (index1, index2)=>{
  let newArray = [index1, index2]
  skillArray = newArray
}

// End of Functions

buttons.forEach(items =>{
  items.addEventListener('click',()=>{
    if(items.dataset.target === '.skills'){
        creatShadow(items, array[0])
        //putting display none on the classes
        arrayPush(experience, education)
        displayNone(skillArray)
        removeShadow(buttons, ".skills")
      
    }else if(items.dataset.target === '.experience'){
        creatShadow(items, array[1])
        //putting display none on the classes
        arrayPush(skill, education)
        displayNone(skillArray)
        removeShadow(buttons, '.experience')
      
    }else  if(items.dataset.target === '.education'){
        creatShadow(items, array[2])
        //putting display none on the classes
        arrayPush(skill, experience)
        displayNone(skillArray)
        removeShadow(buttons, '.education')

    }



  }) 
    
  

})
//😶😶😶😶😶
// window.addEventListener('click',(e)=>{
//   console.log(e.path[0].className);

// })
// ----------------end of about section tabs----------------------------------



// -------------portfolio FILTER AND POPUP------------------------------------
function portfolio(){
    const filterContainer=document.querySelector(".portfolio-filter"),
    portfolioItemsContainer=document.querySelector(".portfolio-items"),
    portfolioItems=document.querySelectorAll(".portfolio-item");
    console.log(portfolioItems)
}
portfolio()







//-----------------------------------LINKING THE WORKS---------------------
//halloween👻👻
document.getElementById("halloween").onclick = function () {
  location.href = "https://halloween-eight.vercel.app/";
};
window.onclick = (e)=>{
  console.log(e.path[0].id);
}
//nftmarketplace
document.getElementById("nftMarketplace").onclick = function () {
  location.href = "https://nft-marketplace-three-eosin.vercel.app/";
};

//voting app
document.getElementById("votingApp").onclick = function () {
  location.href = "https://github.com/Riocodex/Voting-app-frontend";
};

//Netflix 😸
document.getElementById("netflix").onclick = function () {
  location.href = "https://github.com/Riocodex/Netflix__";
};

//Crypto Exchange Apps 😸
document.getElementById("cryptoExchange").onclick = function () {
  location.href = "https://crypto-exchange-app-xi.vercel.app/";
};

//rethestate
document.getElementById("rethestate").onclick = function () {
  location.href = "https://rethestate.vercel.app/";
};




///-----------------------End of links--------------------------------


//-----------------testimonial slider---------------------------------
function testimonialSlider() {
    const sliderContainer=document.querySelector(".testi-slider-container"),
    slides=sliderContainer.querySelectorAll(".testi-item"),
    slideWidth=sliderContainer.offsetWidth,
    prevBtn=document.querySelector(".testi-slider-nav .prev"),
    nextBtn=document.querySelector(".testi-slider-nav .next");
    let slideIndex=0;

    //setting width of all slides
    slides.forEach((slide)=>{
      slide.style.width=slideWidth +"px"
    })
    //set width  of slider container
    sliderContainer.style.width=slideWidth*slides.length+"px";

    nextBtn.addEventListener("click", function(){
        if(slideIndex==slides.length-1){
          slideIndex=0;
        }
        else{
          slideIndex++;
        }
        slider()
    })
    prevBtn.addEventListener("click",function(){
      if(slideIndex===0){
        slideIndex=slides.length-1;
      }
      else{
        slideIndex--;
      }
      slider()
    })
    function slider(){
      sliderContainer.style.marginLeft=-(slideWidth*slideIndex)+"px";
    }
    
}
testimonialSlider()

//-----------------------hide all sections  except active-------------------------------------
function sectionHider(){
  const sections=document.querySelectorAll(".section");
  sections.forEach((section)=>{
    //this currently displays only sections with the word active in their class
    if(!section.classList.contains("active")){
      section.classList.add("hide")
    }
  })
}sectionHider()


/*----------------------preloaderrrrrrrr------------------------------------*/
window.addEventListener("load",()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
      document.querySelector(".preloader").style.display="none";
    },600)
})
