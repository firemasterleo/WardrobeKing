<template>

  <div class="bodysection">
    <h1>Contact Us</h1>
    <div>
      <h3>PHONE</h3>
      <p>Reach out to our customer support via Our Phone lines</p>
      <a href="tel:+2349027556782">
        <button>PHONE</button>
      </a>
    </div>
    <div>
      <h3>WHATSAPP</h3>
      <p>Reach out to our customer support via whatsapp</p>
      <a href="https://wa.me/+2349027556782" target="_blank">
        <button>WHATSAPP</button>
      </a>
    </div>
    <div>
      <h3>INSTAGRAM</h3>
      <p>Reach out to us via Instagram</p>
      <a href="https://www.instagram.com/_unikme_couture/" target="_blank">
  <button>INSTAGRAM</button>
</a>
    </div>
    <div>
      <h3>EMAIL</h3>
      <p>Contact us for enquiries</p>
      <a href="mailto:oyekaletreasure@gmail.com">
  <button>Email</button>
</a>
    </div>
    <div>
      <h3>BOUTIQUES</h3>
      <p>See all our store locations </p>
  
        <button @click="openGoogleMaps">Get Directions</button>


    </div>

  </div>


  
</template>
  
  <script setup>

  
  
  
  
  </script>
  <script>
  export default {
    methods: {
      openGoogleMaps() {
        const storeLocation = [9.0163561, 7.4559614]; // Replace with your store's actual coordinates
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${storeLocation[0]},${storeLocation[1]}`;
        window.open(googleMapsUrl, '_blank');
      },
    },
  };
  </script>

<style lang="scss" scoped>

.bodysection {
  display: flex;
  // border: solid;
  flex-direction: column;
  padding-inline: 1rem;
  gap: 2rem;
  padding-top: 4rem;
  padding-bottom: 1rem;
  background-color: rgba(243, 156, 231, 0.205);

  // align-items: center;

  h1 {
    text-align: center;
    font-weight: 700;
    color: rgba(80, 31, 80, 0.769);

  }
  div {
    height: 16rem;
    border-radius: 1rem;
    background-color: rgba(178, 97, 207, 0.215);
    border: solid 2px silver;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    padding-inline: 1.5rem;
    padding-top: 2rem;
    font-size: 20px;

    h3 {
      font-weight: 700;
      
    }
    p{
      font-size: 21px;

    }
    

    button {
      width: 8rem;
      font-size: 18px;
      border-radius: 1rem;
      padding: 0.3rem;
      color: rgb(73, 7, 73);
      background-color: rgba(128, 0, 128, 0.301);
      border: solid 2px silver;
    }
  }
  div:nth-child(5) {
    button {
      width: 10rem;

    }
  }
}

 </style>