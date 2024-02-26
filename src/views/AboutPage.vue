<template>


    <div class="bodysection">
      <img src="../assets/unikmeimage11.jpg" alt="">
        <div class="veil" ref="veil"></div>
  </div>

  <div class="texts">
    <h1>UNIKME COUTURE</h1>
      <div ref="title" class="title">
        <p>Unikme Couture is a brand that elevates individuality through
          artful couture, our brand envisions a world where every woman 
          embodies her distinct essence with confidence.
        </p> 
      </div>
      <div class="title2" ref="title2">
        <p>We craft exquisite, 
          one-of-a-kind pieces</p>
        <p> that celebrate diversity,
         encouraging women to embrace their unique beauty 
        and make a bold statement in the tapestry of fashion.     
        </p>

      </div>

  </div>

  <div class="parallax" ref="parallax">
    <div class="veil" ref="veil"></div>
    <img class="img1" src="../assets/unikmeimage12.jpg" alt="">
    <img class="img2" src="../assets/unikmeimage13.jpg" alt="">
  </div>

 
    
  
  
    
  </template>
  
<style lang="scss" scoped>
.content {
  border: solid;
}
    .parallax {
      width: 100vw;
        height: 25rem;
        position: relative;
        // bottom: 2rem;
        z-index: -1;
        // border: solid red;
        // object-fit: cover;
        background-color: black;
        display: flex;
        // background-size: cover;
        
        overflow: hidden;
        .img1 {
            object-fit: cover;
            // position: relative;
            width: 50%;
            height: 100%;


        }
        .img2 {
            object-fit: cover;
            // position: relative;
            width: 50%;
            height: 100%;
            // transform: translateX(30rem);


        }

        .veil {

        width: 100vw;
        height: 25rem;
        // border: solid;
        position: absolute;
        bottom: 0;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.699);
}

    }

.bodysection {
        width: 100vw;
        height: 40rem;
        position: relative;
        z-index: 0;
        background-color: black;
        // object-fit: cover;
        
        overflow: hidden;
        img {
            object-fit: cover;
            // position: relative;
            width: 100%;
            height: 100%;

        }

     
        .veil {

            width: 100vw;
            height: 40rem;
            position: absolute;
            top: 0;
            z-index: 1;
            background: rgba(0, 0, 0, 0.562);

        }

      }
      .texts {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-inline: 1rem;
        position: absolute;
        top: 10rem;
        H1 {
          color: white;
        }


          .title {
            color: white;
            font-size: 20px;
            
          }
          
          .title2 {
            
            color: white;
            font-size: 20px;
  
  
          }
        }





        
        
 </style>
<script setup>
import { ref, onMounted} from 'vue';



import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

  const title = ref(null);
  const title2 = ref(null);


onMounted(() => {

  gsap.from(title.value, {
        delay:0.2,
    opacity: 0,
    y: 60,

    duration: 1,
    ease: 'power2.out()',

  });

  gsap.from(title2.value, {
    delay:0.2,
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',

  });
  gsap.to('.bodysection img', {
      y: '50%', // Adjust the percentage for the parallax speed
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });


});
</script>