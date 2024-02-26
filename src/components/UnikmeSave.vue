<template>
<LenisScroll/>

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

</div>


<!-- <div class="parentcontainer">

    <div class="header">

        <div class="headerleft">
            <div class="logo"></div>
            <div class="name"><h2>UNIKME COUTURE</h2></div>
        </div>

        <div class="headerright">
            <nav class="navlist">
                <ul>
                    <li>
                        <a href="">Asoebi</a>
                    </li>
                    <li>
                        <a href="">Bridals</a>
                    </li>
                    <li>
                        <a href="">Kiddies</a>
                    </li>
                    <li>
                        <a href="">Fashion School</a>
                    </li>
                    <li class="aboutus">
                        <a href="">About us</a>
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                    </li>
                </ul>
            </nav>
        </div>
        

    </div>

    <div class="backgroundimage">
        <img src="../assets/unikmehero.jpg" alt="">
    </div>

    <div class="whoweare">
        <h1>COUTURE FOR EVERY WOMAN</h1>
        <p>We design bridal and special occasion dresses just for you, then fit them to perfection.
Purchasing custom clothing made precisely to your measurements is just that simple!</p>
    </div>
    <div class="whoweare2">
        <h1>COUTURE FOR EVERY WOMAN</h1>
        <p>We design bridal and special occasion dresses just for you, then fit them to perfection.
Purchasing custom clothing made precisely to your measurements is just that simple!</p>
    </div>


</div> -->
<div class="practice">
    <div class="header" :class="{ 'colorchanged': isColorChanged, 'hideheader': isHidingHeader && !isScrollingUp }">
        <div class="logo">

          <div class="image">
            <img src="../assets/lawlogo.png" alt="">

          </div>

            <div class="text">

            <h2>Lawby<span>YOU</span></h2>
            <p>(Pro-se Legal Help)</p>
            </div>
        </div>
        <nav class="nav">
            <ul class="navlist">
                <li>
                    <a href="">Community</a>
                    <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </li>
                <li>
                    <a href="">Features</a>
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </li>
                <li>
                    <a href="">Development</a>
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </li>
                <li>
                    <a href="">About US</a>
                         <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">En</a>
                         <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </li>
            </ul>
            <div class="search">
                    <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
            </div>
        </nav>
    </div>
        <div class="space"></div>
            <div class="space"></div>
    <div class="herosection">
        <img src="../assets/lawbackground3.jpg" alt="">
        <div class="veil"></div>
    </div>
    <div ref="section1left" class="section1left">
        <!-- <h1>Creative Web Development. We Create Websites That Stands You Out From the Competition -->
        <h1>Federal Pro Se Legal Assistance Project
        </h1>
    </div>
    <div ref="section1right" class="section1right">
        <button class="button">EXPLORE</button>
    </div>
    <div class="space"></div>

    <div class="practice2">
      <div class="leftsect">

      <h1 ref="title">HOME OF THE ECOSYSTEM </h1>

      <p ref="paraone">The EOS Network Foundation is the hub of the EOS Network, harnessing the power of decentralization as a force for positive global change to chart a coordinated future for EOS. The ENF plays many roles for the EOS Network, including:</p>
      <button ref="button" class="button">Explore the EOS Ecosystem</button>
      </div>
        </div>
    </div>
  
</template>









<script setup> 
// script for header animation via scroll
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ref, onMounted, onUnmounted } from 'vue';

const isAtTop = ref(true);
const isColorChanged = ref(false);
const isHidingHeader = ref(false);
const isScrollingUp = ref(false);

const colorChangeThreshold = 100;
const translateThreshold = 400;

let lastScrollTop = 0;

const handleScroll = () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > 0) {
    isAtTop.value = false;

    if (currentScrollTop > colorChangeThreshold) {
      isColorChanged.value = true;
    } else {
      isColorChanged.value = false;
    }

    if (currentScrollTop > translateThreshold) {

    isScrollingUp.value = currentScrollTop < lastScrollTop;
      isHidingHeader.value = true;
    } else {
      isHidingHeader.value = false;
    }
  } else {
    isAtTop.value = true;
    isColorChanged.value = false;
    isHidingHeader.value = false;
  }
  

  lastScrollTop = currentScrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


gsap.registerPlugin(ScrollTrigger);

  const section1left = ref(null);
  const section1right = ref(null);
  const content = ref(null);
    const title = ref(null);
  const paraone = ref(null);
  const button = ref(null);

onMounted(() => {

  gsap.to(section1left.value, {
        delay:0.5,
    opacity: 1,
    y: -70,
    duration: 2,
    ease: 'back.out(1.7)',
     scrollTrigger: {
      trigger: section1left.value,
      start: 'top 40%', // Adjust the start position as needed
      end: 'bottom 20%',  // Adjust the end position as needed
      // once: true,
      toggleActions: 'play',
      markers: true,   // Add markers for debugging (remove in production)
    },
   
  });

  gsap.to(section1right.value, {
    delay:1.2,
    opacity: 1,
    x: -200,
    duration: 0.8,
    ease: 'power2.out',

   
  });

});


onMounted(() => {
  const titleTimeline = gsap.timeline({delay:1});
  const paraoneTimeline = gsap.timeline({delay:1.3});
  const buttonTimeline = gsap.timeline({delay:1.3});

  titleTimeline.from(title.value, { y: '60', opacity: 0, duration: 1, ease: 'power.in' });
  paraoneTimeline.from(paraone.value, { y: '0', opacity: 0, duration: 1.5, ease: 'power.out' });
  buttonTimeline.from(button.value, { y: '0', opacity: 0, duration: 1.5, ease: 'power.out' });

});

</script>
<script>
// import LenisScroll from "./LenisScroll.vue";

// export default {
//   components: {
//     LenisScroll
//   },
//   // Other component options
// };





</script>
