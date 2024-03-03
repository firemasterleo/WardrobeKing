<template>
  <div class="body">

    <div class="slide-control" >
        <button @click="Toggle">Button 1</button>
        <!-- <button>Button 2</button>
      <button>Button 3</button> -->
    </div>
  
    <div class="slide-container">
      <div class="slide" :class="{ 'is-expand': is_expand }">
        <p>slide 1 is here </p>
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed sapiente sequi maxime vero autem deleniti culpa, quam, quas laboriosam rerum accusamus amet nisi blanditiis suscipit tempora, cupiditate perferendis! Quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed sapiente sequi maxime vero autem deleniti culpa, quam, quas laboriosam rerum accusamus amet nisi blanditiis suscipit tempora, cupiditate perferendis! Quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed sapiente sequi maxime vero autem deleniti culpa, quam, quas laboriosam rerum accusamus amet nisi blanditiis suscipit tempora, cupiditate perferendis! Quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed sapiente sequi maxime vero autem deleniti culpa, quam, quas laboriosam rerum accusamus amet nisi blanditiis suscipit tempora, cupiditate perferendis! Quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed sapiente sequi maxime vero autem deleniti culpa, quam, quas laboriosam rerum accusamus amet nisi blanditiis suscipit tempora, cupiditate perferendis! Quidem.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed sapiente sequi maxime vero autem deleniti culpa, quam, quas laboriosam rerum accusamus amet nisi blanditiis suscipit tempora, cupiditate perferendis! Quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed sapiente sequi maxime vero autem deleniti culpa, quam, quas laboriosam rerum accusamus amet nisi blanditiis suscipit tempora, cupiditate perferendis! Quidem.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed sapiente sequi maxime vero autem deleniti culpa, quam, quas laboriosam rerum accusamus amet nisi blanditiis suscipit tempora, cupiditate perferendis! Quidem.</p>
    </div>
      <!-- <div class="slide">Slide 2 Content</div>
      <div class="slide">Slide 3 Content</div> -->
    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue';


const is_expand = ref(false)

const Toggle = () => {
  is_expand.value = !is_expand.value;
}
// export { is_expanded }
</script>


<style lang="scss" scoped>
.body {
  background-color: white;
}
/* Your CSS styles here */
.slide-control {
  // position: relative;
  // margin-bottom: 20px;
  // height: 100vh;
}

.slide-container {
border: solid;
height: 100vh;


  .slide {
      // border: solid;
  
    background-color: yellow; 
    
    &.is-expand {
        background-color: rgb(0, 60, 255);
        border: solid;
      
    
    }
  }
}
</style>
