<template>
  <div class="bodysection">

    <div class="topsection">
      <router-link class="menuitem" to="/">
          <h3>HOME</h3>
        </router-link>
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>

        <h4>BESPOKE</h4>

    </div>

      <div class="secondsection">
          <h1>BESPOKE OUTFITS</h1>

        </div>
        <div class="thirdsection">
        <h4>SHOWING ALL 6 RESULTS</h4>

      </div>
      
      <div class="productlist">
  
          
          <div class="product-grid">
            <router-link class="product" :to="{ name: 'BespokeProductDetailsPage', params: { id: 7 } }">
              <div class="image">
                <img src="../assets/unikmeimage1.jpeg" alt="Product 1 Image">
              </div>
              <h2>UMC-7</h2>
            </router-link>
            <router-link class="product" :to="{ name: 'BespokeProductDetailsPage', params: { id: 8 } }">
              <div class="image">
                <img src="../assets/unikmeimage2.jpeg" alt="Product 1 Image">
              </div>
              <h2>UMC-8</h2>
            </router-link>
            <router-link class="product" :to="{ name: 'BespokeProductDetailsPage', params: { id: 9 } }">
              <div class="image">
                <img src="../assets/unikmeimage3.jpeg" alt="Product 1 Image">
              </div>
              <h2>UMC-9</h2>
            </router-link>
            <router-link class="product" :to="{ name: 'BespokeProductDetailsPage', params: { id: 10 } }">
              <div class="image">
                <img src="../assets/unikmeimage4.jpg" alt="Product 1 Image">
              </div>
              <h2>UMC-10</h2>
            </router-link>
            <router-link class="product" :to="{ name: 'BespokeProductDetailsPage', params: { id: 11 } }">
              <div class="image">
                <img src="../assets/unikmeimage5.jpg" alt="Product 1 Image">
              </div>
              <h2>UMC-11</h2>
            </router-link>
            <router-link class="product" :to="{ name: 'BespokeProductDetailsPage', params: { id: 12 } }">
              <div class="image">
                <img src="../assets/unikmeimage6.jpg" alt="Product 1 Image">
              </div>
              <h2>UMC-12</h2>
            </router-link>

              </div> 
  
             
           
      </div>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

.bodysection {
  display: flex;
  flex-direction: column;
  height: 78rem;
  // border: solid;

  .topsection {
    margin-top: 2rem;
    padding-left: 2rem;
    display: flex;
    
    gap: 0.3rem;
    // border: solid;
    .menuitem {
      font-size: 13px;
    }
    svg {
      position: relative;
      bottom: 2px ;
      
    }
    
    h4 {
      font-size: 15px;
    }
  }


  .secondsection {
      display: flex;
      align-items: center;
      justify-content: center;
       min-height: 7rem; 
       margin-bottom: 2rem;
      //  i used min heigh to prevent moving around by product list
      //  border: solid;
  


  }
  .thirdsection {
       margin-bottom: 2rem;
       text-align: center;
       font-size: 14px;
       padding: 0.3rem 0;
       margin-inline: 1.5rem;
       border-top: solid 1px rgba(192, 192, 192, 0.461);
       border-bottom: solid 1px rgba(192, 192, 192, 0.461);


  }

      .product-grid {
        padding-inline: 1.5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
          // border: solid ;
          margin-bottom: 2rem;
          overflow: hidden;
          // border: solid;

  
  
          .product {
            height: 20rem;
            // width: 15rem;
              display: flex;
              flex-direction: column;
              gap: 1rem;

              
              
              
              .image {
                border: none;
                width: 100%;
                  height: 15rem;
              border-radius: 0.3rem;
      
                  // border: solid;
                  overflow: hidden;
                  img {
                      object-fit: cover;
                      width: 100%;
                      height: 100%;
                  }
              }

              h2 {
                color: black;
                font-size: 16px;
                padding-left: 0.5rem;
              }
        
          }
      

  }
}


</style>