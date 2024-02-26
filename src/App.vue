<template >
  <LenisScroll/>
  <div class="iphone14topspace"></div>





</template>

<style lang="scss" scoped>
@import './sass/main.scss';
</style>

<script setup>

import LenisScroll from './components/LenisScroll.vue';

import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';



import './sass/main.scss';




//togglemenu
const is_expanded = ref(false)

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  

}



//headerbehaviour logic
const isAtTop = ref(true);
const isHidingHeader = ref(false);
const isScrollingUp = ref(false);

const translateThreshold = 100;
const bottomMargin = 50; // Adjust this margin as needed



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
