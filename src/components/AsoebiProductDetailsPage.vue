<template>
    <div class="mainbody">


    <div class="headlinks">

        <router-link class="menuitem" to="/">
            <h3>HOME</h3>
        </router-link>
        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>

        <router-link class="menuitem" to="/Asoebi">
            <h3>ASO-EBI</h3>
        </router-link>
        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>

        <div v-if="id === '1'">
            <h3>UMC-1</h3>
        </div>
        <div v-if="id === '2'">
            <h3>UMC-2</h3>
        </div>
        <div v-if="id === '3'">
            <h3>UMC-3</h3>
        </div>
        <div v-if="id === '4'">
            <h3>UMC-4</h3>
        </div>
        <div v-if="id === '5'">
            <h3>UMC-5</h3>
        </div>
        <div v-if="id === '6'">
            <h3>UMC-6</h3>
        </div>



    </div>
  
  <div>
    <div class="description" v-if="id === '1'">
      <div class="bodycontainer">
            <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :speed="1000"

            :modules="modules"
            class="mySwiper2"
            >

            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe">
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>

            <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="3"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"

            >
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage4.jpg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage5.jpg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage6.jpg" alt="Product Image">
            </swiper-slide>

            </swiper>
              <div class="bottomsection">

                <div class="productname">
                  <h2>UMC-1</h2>
                </div>

                <div class="buttons">

                  <div class="wishlist">

                    <div class="add">
                      <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M5 11h14v2H5z"></path></svg>
                      <p>1</p>
                      <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                    </div>  

                    <button>Add To Wishlist</button>

                  </div>

                  <router-link class="consultus" to="/Consultation">
                    <button class="consult">Book a Consulatation</button>
                </router-link>

                </div>

                </div>

</div> 
    </div>
    <div v-if="id === '2'">
      <div class="bodycontainer">
            <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :speed="1000"

            :modules="modules"
            class="mySwiper2"
            >

            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe">
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>

            <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="3"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"

            >
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>
              <div class="bottomsection">

                  <div class="productname">
                    <h2>UMC-2</h2>
                  </div>

                  <div class="buttons">

                    <div class="wishlist">

                      <div class="add">
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M5 11h14v2H5z"></path></svg>
                        <p>1</p>
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                      </div>  

                      <button>Add To Wishlist</button>

                    </div>

                    <router-link class="consultus" to="/Consultation">
                    <button class="consult">Book a Consulatation</button>
                </router-link>                  </div>

                  </div>

</div> 
    </div>
    <div v-if="id === '3'">
      <div class="bodycontainer">
            <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :speed="1000"

            :modules="modules"
            class="mySwiper2"
            >

            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe">
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>

            <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="3"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"

            >
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>
                <div class="bottomsection">

                  <div class="productname">
                    <h2>UMC-3</h2>
                  </div>

                  <div class="buttons">

                    <div class="wishlist">

                      <div class="add">
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M5 11h14v2H5z"></path></svg>
                        <p>1</p>
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                      </div>  

                      <button>Add To Wishlist</button>

                    </div>

                    <router-link class="consultus" to="/Consultation">
                    <button class="consult">Book a Consulatation</button>
                </router-link>                  </div>

                </div>




</div> 
    </div>
    <div v-if="id === '4'">
      <div class="bodycontainer">
            <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :speed="1000"

            :modules="modules"
            class="mySwiper2"
            >

            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe">
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>

            <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="3"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"

            >
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>
              <div class="bottomsection">

                <div class="productname">
                  <h2>UMC-4</h2>
                </div>

                <div class="buttons">

                  <div class="wishlist">

                    <div class="add">
                      <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M5 11h14v2H5z"></path></svg>
                      <p>1</p>
                      <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                    </div>  

                    <button>Add To Wishlist</button>

                  </div>
                  <router-link class="consultus" to="/Consultation">
                    <button class="consult">Book a Consulatation</button>
                </router-link>

                </div>

              </div>


    </div> 
  </div>


    <div v-if="id === '5'">
      <div class="bodycontainer">
            <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :speed="1000"

            :modules="modules"
            class="mySwiper2"
            >

            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe">
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>

            <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="3"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"

            >
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>
            <div class="bottomsection">

              <div class="productname">
                <h2>UMC-5</h2>
              </div>

              <div class="buttons">

                <div class="wishlist">

                  <div class="add">
                    <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M5 11h14v2H5z"></path></svg>
                    <p>1</p>
                    <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                  </div>  

                  <button>Add To Wishlist</button>

                </div>

                <router-link class="consultus" to="/Consultation">
                    <button class="consult">Book a Consulatation</button>
                </router-link>              </div>

            </div>

      </div> 
    </div>
    <div v-if="id === '6'">
      <div class="bodycontainer">
            <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :speed="1000"

            :modules="modules"
            class="mySwiper2"
            >

            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swipe">
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>

            <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="3"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"

            >
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage1.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage2.jpeg" alt="Product Image">
            </swiper-slide>
            <swiper-slide class="swiper-thumbs"> 
            <img src="../assets/unikmeimage3.jpeg" alt="Product Image">
            </swiper-slide>

            </swiper>
            <div class="bottomsection">

              <div class="productname">
                <h2>UMC-6</h2>
              </div>
              <div class="buttons">
                <div class="wishlist">  
                  <div class="add">
                    <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M5 11h14v2H5z"></path></svg>
                    <p>1</p>
                    <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                  </div>              
                    <button>Add To Wishlist</button>
                </div>
                <router-link class="consultus" to="/Consultation">
                    <button class="consult">Book a Consulatation</button>
                </router-link>            
                </div>

            </div>
        </div> 
    </div>
  </div>
</div>

  </template>
  
  
    <script>

     import { ref } from 'vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/scss';
  
    import 'swiper/scss/free-mode';
    import 'swiper/scss/navigation';
    import 'swiper/scss/thumbs';
    
    // import required modules
    import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
  
    export default {
        components: {
        Swiper,
        SwiperSlide,
      },
      setup() {

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

return {
  thumbsSwiper,
  setThumbsSwiper,
  modules: [FreeMode, Navigation, Thumbs],
};
},
  
props: ['id'],
};
  
  </script>
  
  <style lang="scss" scoped>

  
  .mainbody {
    height: 55rem;
  }
  .headlinks {
    display: flex;
    gap: 0.3rem;
    // border: solid red;
    margin-top: 2rem;
    padding-inline: 2rem;
    .menuitem {
        font-size: 13px;
        font-weight: bold

    }
    svg {
      position: relative;
      bottom: 2px ;

    }

    div {
        font-size: 13px;
    }
  }

.bodycontainer {

padding-inline: 1.5rem;
// border: solid;
padding-top: 1.8rem;
.mySwiper2 {
    // border: solid;
    // width: 100vw;
    height: 28rem;
    margin-bottom: 2rem;

    .swipe {    
        width: 100%;
    height: 100%;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    }
}
.mySwiper {
    // border: SOLID red;
    // width: 20rem;
    margin-top: -1.4rem;
    height: 7rem;


}

.swiper-thumbs {
  // border: solid red;
  
  transition: 0.2s ease-in;
  
  
  
  
  img {
    border: solid 2px rgba(128, 128, 128, 0);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-slide-thumb-active {
    // Styles for active thumb slide
    border: solid 2px rgb(128, 128, 128);
    transition: 0.1s ease-in;
    
    
  }
}

.bottomsection {

  .productname {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    // border: solid red;
  
    .wishlist {
      display: flex;
      // flex-direction: column;
      border-top: solid 2px silver;
      border-bottom: solid 2px silver;
      gap: 5rem;
      align-items: center;
      justify-content: center;
      padding:  1rem 0;
  
      
      .add {
        border: solid 2px silver;
        border-radius: 1rem;
        padding-inline: 0.5rem;
        width: 7rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      button {
        // border: solid red;
        font-size: 15px;
      background-color: rgb(82, 27, 83);
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      color: white;
  
  
  
  
      }
    }
  
      // margin-bottom: 20rem;
      // margin-top: 2rem;
      // // margin-left: 10rem;
      // font-size: 18px;
      // border: solid;
      // font-weight: 700;

      .consultus {
        width: 100%;

        .consult {
          width: 100%;
          font-size: 15px;
            background-color: rgb(82, 27, 83);
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            color: white;
            margin-top: 0.5rem;
        
        }
      }
  }
}
}



</style>