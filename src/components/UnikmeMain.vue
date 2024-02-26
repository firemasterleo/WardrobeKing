<template>


  <div class="bodysection">
    <div class="section1">
    <Swiper
    :spaceBetween="10"
    :centeredSlides="true"
    :loop="true"
    :grabCursor="true"

    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
    :effect="'easeInOut'"  
    :speed="1000"  
  >
    <SwiperSlide class="swiperslide">
      <div class="textandbutton">
        <h2>Aso-Ebi</h2>
        <router-link to="/Consultation" @click="ToggleMenu">
          <button class="button">Book a Consultation</button>
  </router-link>

      </div>
      <img class="img" src="../assets/unikmeimage6.jpg" alt="asoebi">
    </SwiperSlide>
    <SwiperSlide class="swiperslide">
            <div class="textandbutton2">
        <h2>Bridals</h2>
        <router-link to="/Consultation" @click="ToggleMenu">
          <button class="button">Book a Consultation</button>
  </router-link>
      </div>
      <img class="img2" src="../assets/unikmeimage9.jpg" alt="asoebi">
    </SwiperSlide >
    <SwiperSlide class="swiperslide">
            <div class="textandbutton3">
        <h2>Bespoke Outfits</h2>
        <router-link to="/Consultation" @click="ToggleMenu">
          <button class="button">Book a Consultation</button>
  </router-link>
      </div>
      <img class="img3" src="../assets/unikmeimage3.jpeg" alt="asoebi">
    </SwiperSlide >
    <SwiperSlide class="swiperslide">
            <div class="textandbutton4">
        <h2>Custom Outfits</h2>
        <router-link to="/Consultation" @click="ToggleMenu">
          <button class="button">Book a Consultation</button>
  </router-link>
      </div>
      <img class="img4" src="../assets/unikmeimage5.jpg" alt="asoebi">
    </SwiperSlide >

  </Swiper>


    </div>
    <div class="section2">
      <p><span>Unikme Couture</span> is a brand that elevates individuality through
         artful couture, our brand envisions a world where every woman 
        embodies her distinct essence with confidence.</p> 
        <p>We craft exquisite, 
        one-of-a-kind pieces that celebrate diversity,
         encouraging women to embrace their unique beauty 
        and make a bold statement in the tapestry of fashion.</p> 
    </div>
        <div class="section3">

          <div class="exploreanim" :class="{ 'is-active': is_exploreexpanded }" @click="ToggleExplore">
                <div class="explore" >
                    <h3>Explore Our Gallery</h3>        
                </div>
                <div class="buttons">
                    <button class="button1">Aso-Ebi</button>
                    <button class="button2">Bridals</button>
                    <button class="button3">Bespoke/Custom</button>         
                </div>
  
          </div>

        </div>

    <div class="section4">
      <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :spaceBetween="-70"

    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 50,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
      <SwiperSlide class="swiperslide">
        <img class="img" src="../assets/unikmeimage11.jpg" alt="asoebi">
          
      
      </SwiperSlide>
      <SwiperSlide class="swiperslide">
        <img class="img" src="../assets/unikmeimage11.jpg" alt="asoebi">

      
      </SwiperSlide>
      <SwiperSlide class="swiperslide">
        <img class="img" src="../assets/unikmeimage11.jpg" alt="asoebi">

      
      </SwiperSlide>
      <SwiperSlide class="swiperslide">
        <img class="img" src="../assets/unikmeimage11.jpg" alt="asoebi">

      
      </SwiperSlide>
      <SwiperSlide class="swiperslide">
        <img class="img" src="../assets/unikmeimage11.jpg" alt="asoebi">

      
      </SwiperSlide>
  </swiper>
    </div>
  </div>
  <div class="scroller">

<div class="topscroller">
  <div class="innerscroller">
    <div><p>World wide shipping available</p></div>
    <div><p>10% off your first order</p></div>
    <div><p>Master class commences</p></div>

  </div>
  <div class="innerscroller">
    <div><p>World wide shipping available</p></div>
    <div><p>10% off your first order</p></div>
    <div><p>Master class commences</p></div>

    
  </div>
  <div class="innerscroller">
    <div><p>World wide shipping available</p></div>
    <div><p>10% off your first order</p></div>
    <div><p>Master class commences</p></div>
  </div>
</div>
</div>
  

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../sass/main.scss';



// import required modules
const modules = [EffectCoverflow, Autoplay, Navigation, Pagination];

//togglemenu
const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
}


//toggleexplore
const is_exploreexpanded = ref(false)

const ToggleExplore = () => {
    is_exploreexpanded.value = !is_exploreexpanded.value;
}




//headerbehaviour logic
const isAtTop = ref(true);
const isHidingHeader = ref(false);
const isScrollingUp = ref(false);

const translateThreshold = 100;
const bottomMargin = 250; // Adjust this margin as needed



let lastScrollTop = 0;

const handleScroll = () => {
  const currentScrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;




  if (currentScrollTop > 0) {
    isAtTop.value = false;

    if (currentScrollTop > translateThreshold) {
      isScrollingUp.value = currentScrollTop < lastScrollTop;


          isHidingHeader.value = true;

      }
    else {
      isHidingHeader.value = false;
    }
  } 
  else {
    isAtTop.value = true;
    isHidingHeader.value = false;
  }
  if (is_expanded.value) {
    isScrollingUp.value = true; } //i used this code to turn off scrolling of the header when isexpanded condition is true

    if (currentScrollTop >= maxScroll - bottomMargin) {
        isHidingHeader.value = false;
        isScrollingUp.value = true;
      }   // i used this one to bring the header down when the footer shows up 

  

  lastScrollTop = currentScrollTop; 
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});




</script>
<script>
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
 .bodysection {
        height: fit-content;
        margin-bottom: 3rem;
        width: 100vw;
        
        .section1 {
          background-color: rgb(0, 0, 0);
            width: 100vw;
            height: 40.5rem;
            overflow: hidden;
            // border: solid red;
            display: flex;
            flex-direction: column;

           .swiper-pagination-bullet {
                  width: 18px;
        
              

                  height: 18px;
                background-color: #7214a1f5; /* Change the color for the active bullet */
              }
             .mySwiper {
                width: 100vw;

                background-color: #f4f1f8;
        
                .swiperslide {
                    
                    width: 100vw;

                    .textandbutton {
                        position: absolute;
                        top: 31rem;
                        left: 2.5rem;
                        display: flex;
                        // border: solid;
                        z-index: 2;
                        flex-direction: column;
                        gap: 0.5rem;
                        h2 {
                            color: #e0d1e0;
                            font-size: 35px;
                        }
                        button {
                            height: 3rem;
                            position: relative;
                            right: 2rem;
                            width: 15rem;
                            font-size: 22px;
                            border-radius: 0.5rem;
                            border: none;
                            background-color: #371848ab;
                            color: #ffffff;
                        }
                    }
                    .textandbutton2 {
                        position: absolute;
                        top: 30rem;
                        left: 9.5rem;
                        display: flex;

                        z-index: 2;
                        flex-direction: column;
                        gap: 0.5rem;
                        h2 {
                            color: #75116e;
                            font-size: 35px;
                        }
                        button {
                            height: 3rem;
                            position: relative;
                            right: 2rem;
                            width: 15rem;
                            font-size: 22px;
                            border-radius: 0.8rem;
                            border: solid #ebdfe8 ;
                            background-color: #dbcce3;
                            color: #312a31;
                            font-weight: 600;
                        }
                    }
                    .textandbutton3 {
                        position: absolute;
                        top: 33rem;
                        left: 2.5rem;
                        display: flex;

                        z-index: 2;
                        flex-direction: column;
                        gap: 0.5rem;
                        h2 {
                            color: #371848;
                            font-size: 35px;
                        }
                        button {
                            height: 3rem;
                            position: relative;
                            right: 2rem;
                            width: 15rem;
                            font-size: 22px;
                            border-radius: 0.8rem;
                            border: solid;
                            background-color: #371848ab;
                            color: #ebdfe8;
                        }
                    }
                    .textandbutton4 {
                        position: absolute;
                        top: 30rem;
                        left: 2.5rem;
                        display: flex;
                        // border: solid;
                        z-index: 2;
                        flex-direction: column;
                        gap: 0.5rem;
                        h2 {
                            color: #f0d6ee;
                            font-size: 35px;
                        }
                        button {
                            height: 3rem;
                            position: relative;
                            right: 2rem;
                            width: 15rem;
                            font-size: 22px;
                            border-radius: 0.8rem;
                            border: solid;
                            background-color: #371848ab;
                            color: #ffffff;
                        }
                    }
                    .logo {
                        position: absolute;
                        top: 35rem;
                        left: 18.5rem;
                        display: flex;

                        z-index: 2;
                        flex-direction: column;
                        gap: 0.5rem;
                        img {
                            height: 10rem;
                            width: auto;
                        }

                    }
        
                    
        
                    .img {
                        width: 100%;
        
                        height: 41.5rem;
                        object-fit: cover;
                        position: relative;
                        bottom: 1rem;
                    }
                    .img2 {
          
                        width: 100%;
                        height: 41.5rem;
                        object-fit: cover;
        

                    }
                    .img3 {
                        width: 100%;
                        height: 41.5rem;
                        object-fit: cover;
        
        
                        
        
                    }
                    .img4 {
                        width: 100%;
                        height: 41.5rem;
                        object-fit: cover;
        
        
                        
        
                    }
                    .img5 {
                        width: 100%;
                        height: 41.5rem;
                        position: relative;
                        object-fit: cover;
        
                        
        
                    }
                }
        
            }
        }
        .section2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 3rem 1rem;
            gap: 2rem;
            text-align: center;


            span {
                font-size: 30px;
            }

            p {
                font-size: 22px;
                font-weight: 700;
                color: #312a31e4;
            }
            a {
                font-size: 20px;
                font-weight: 600;
                border: solid;
                background-color: #dbcce3;
                border-radius:15px;
                padding-inline:1.5rem;
            }
            
        }
        .section3 {
            margin-bottom: 1rem;
            margin-top: 1.5rem;
            display: flex;
            justify-content: center;
            position: relative;

            .exploreanim {
                position: relative;
    
            
                .explore {
                

                   border-radius: 1rem;
                   width: fit-content;
                   padding: 0.2rem 1rem;
                   position: relative;

                   color: #f3c4dbe9;
                   background: linear-gradient(to bottom right, rgb(167, 59, 188), #371848);
                
                
                  
                }
                .buttons {
                
                   
                   button {
                       background-color: rgb(217, 183, 227);
                       color: rgb(25, 23, 23);
                    //    padding-inline: 2rem;
                       position: absolute;
                       // display: none;
                       top: 0rem;
                       // left: 1.2rem;
                       font-size: 18px;
                       font-weight: 700;
                       border: solid rgb(61, 21, 71);
                       border-radius: 2rem;
                       padding:0.1rem 0.3rem;
                       transition: 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                       opacity: 0;
                       z-index: 14;
                   }
                   .button1 {
                       left: 0;
                
                   }
                   .button2 {
                       right: 0rem;
                
                   }
                   .button3 {
                       top: 0;
                       left: 1.5rem;
                
                   }

                  

             }
             &.is-active {
                button {
                    transition: 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                    opacity: 1;
         
         
                }
                .buttons {

                    .button1 {
                        transform: translateX(-5.6rem);
             
                    }
                    .button2 {
                        transform: translateX(5rem);
             
             
             
                    }
                    .button3 {
                        transform: translateY(-2.5rem);
             
             
             
                    }
                }
            }
            }
        }
        .section4 {
            .swiper-pagination-bullet {
                width: 18px;

                position: relative;
                bottom: -0.5rem;
      
            

                height: 18px;
              background-color: #1430a1f5; /* Change the color for the active bullet */
            }
            .mySwiper {
                width: 100vw;
                height: 35rem;
                .swiperslide {

                    // width: 100vw;
                    // height: 20rem;
                    display: flex;
                    justify-content: center;
                    .img {

                        width:auto;
                        height: 35rem;
                        object-fit: cover; //note that the perfect picture size is 683 by 1024
    
                    }
                    .img5 {
                        width: auto;
                        height: 35rem;
                        object-fit: cover;
    
                    }
                }
            }
        }
    }

    .scroller {
    width: 100%;
    overflow-x: hidden ;
    .topscroller {
        // width: 100%;
        width: 200rem;
        overflow: hidden;
        display: flex;
        gap: 5rem;
      }
    
      .innerscroller {
        // width: 50rem;
        display: flex;
        gap: 5rem;
        animation: scrollAnimation 10s linear infinite; /* Adjust duration and timing function as needed */
      }
    
      @keyframes scrollAnimation {
        0% {
          transform: translateX(11%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
  }






 </style>

