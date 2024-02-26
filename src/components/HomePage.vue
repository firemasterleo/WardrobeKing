<template>
    <div class="bodysection">
        <div class="newinfo">
            <p>Save up to $150* open an account and book a session</p>
        </div>
        <div class="layout2">
            <div class="image">
                <img src="../assets/shirts.jpeg" alt="">


            </div>
            <div class="rightsection">
                <h2>WARDROBE</h2>
                <h1>KING</h1>

                </div>
        </div>

        <div class="whatwedo">
            <h2>What we do</h2>
            <p>"At WardrobeKing, our mission is simple: to provide personalized fashion guidance and curated collections 
                that inspire confidence and celebrate individuality. 
                <br><br>Elevate your wardrobe, express your personality, 
                and embrace your distinct sense of style with us.
                 Whether you're exploring new trends or refining your signature look. <br>
               <br> We're here to support you every step of the way. Discover the 
                perfect pieces that speak to you and reflect your unique essence. Let us help you look and feel your best</p>

        </div>
        <div class="discoveryourstyle">
            <h2>Discover by Category</h2>
            <div class="buttons">
                <div class="casualbutton" @click="showcasual" :class="{ 'casualclicked': CasualClicked }">
                    <h3>Dress Casual</h3>
                </div>
                <div class="formalbutton" @click="showformal" :class="{ 'formalclicked': FormalClicked }" >
                    <h3>Formal Wear</h3>
                </div>
                <div class="nativebutton" @click="shownative" :class="{ 'nativeclicked': NativeClicked }" >
                    <h3>Rock Native</h3>
                </div>
            </div>
            <div class="slides">

                <div class="casualslide" :class="{ 'casualclicked': CasualClicked }" >
                    <div class="row1">
                        <div class="image">
                            <div class="veil">
                                <h2>Shirts</h2>
    
                            </div>
                            
                            <img src="../assets/shirts.jpeg" alt="">
                        </div>
                        <div class="image">
                            <div class="veil">
                                <h2>Polos</h2>
    
                            </div>
                            <img src="../assets/tees.jpg" alt="">
                        </div>
    
                    </div>
                    <div class="row1">
                        <div class="image">
                            <div class="veil">
                                <h2>Tees</h2>
    
                            </div>
                            <img src="../assets/IMG_0589.jpg" alt="">
                        </div>
                        <div class="image">
                            <div class="veil">
                                <h2>Chinos</h2>
    
                            </div>
                            <img src="../assets/IMG_0604.jpg" alt="">
                        </div>
    
                    </div>
                </div>
                <div class="formalslide" :class="{ 'formalclicked': FormalClicked }">
                    <div class="row1">
                        <div class="image">
                            <div class="veil">
                                <h2>Shirts</h2>
    
                            </div>
                            <img src="../assets/IMG_0597.jpg" alt="">
                        </div>
                        <div class="image">
                            <div class="veil">
                                <h2>Suits</h2>
    
                            </div>
                            <img src="../assets/IMG_0606.jpg" alt="">
                        </div>
    
                    </div>
                    <div class="row1">
                        <div class="image">
                            <div class="veil">
                                <h2>Jackets</h2>
    
                            </div>
                            <img src="../assets/shapestationimage6.jpg" alt="">
                        </div>
                        <div class="image">
                            <div class="veil">
                                <h2>Shoes</h2>
    
                            </div>
                            <img src="../assets/shapestationimage6.jpg" alt="">
                        </div>
    
                    </div>
                </div>
                <div class="nativeslide" :class="{ 'nativeclicked': NativeClicked }">
                    <div class="row1">
                        <div class="image">
                            <div class="veil">
                                <h2>Danshiki</h2>
    
                            </div>
                            <img src="../assets/shapestationimage6.jpg" alt="">
                        </div>
                        <div class="image">
                            <div class="veil">
                                <h2>Agbada</h2>
    
                            </div>
                            <img src="../assets/shapestationimage6.jpg" alt="">
                        </div>
    
                    </div>
                    <div class="row1">
                        <div class="image">
                            <div class="veil">
                                <h2>Fila</h2>
    
                            </div>
                            <img src="../assets/shapestationimage6.jpg" alt="">
                        </div>
                        <div class="image">
                            <div class="veil">
                                <h2>Accesories</h2>
    
                            </div>
                            <img src="../assets/shapestationimage6.jpg" alt="">
                        </div>
    
                    </div>
                </div>

            </div>    



        </div>

        <div class="herosection">
            <div class="subsection1">

                <div class="div1">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div2">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div3">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
            </div>
            <div class="subsection2">

                <div class="div4">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div5">   
                    <h2>WARDROBE</h2>
                    <h2>KING</h2>
                </div>
                <div class="div6">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
            </div>
            <div class="subsection3">

                <div class="div7">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div8">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div9">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
            </div>
            
        </div>
        <footer></footer>
    </div>
</template>

<script setup>

import { ref } from 'vue'




const CasualClicked = ref(true)

const  showcasual= () => {
    CasualClicked.value = true;
    FormalClicked.value = false;
    NativeClicked.value = false;}

const FormalClicked = ref(false)

const  showformal= () => {
    CasualClicked.value = false;
    FormalClicked.value = true;
    NativeClicked.value = false;
}


const NativeClicked = ref(false)


const  shownative= () => {
    CasualClicked.value = false;
    FormalClicked.value = false;
    NativeClicked.value = true;
}




</script>
<style lang="scss" scoped>
.bodysection {
    height: fit-content;
    margin-bottom: 2rem;
    // padding-top: 1rem;
    overflow: hidden;


    .newinfo {
        // padding-inline: 1rem;
        text-align: center;
        padding: 0.6rem 0rem;
        background-color: rgb(130, 142, 114);
        color: #f8f7f4;
        // border: solid red;
        

    }
    .layout2 {
        height: 25rem;
        // border: solid;
        background-color: rgb(130, 142, 114);

        display: flex;
        margin-bottom: 1rem;
        
        .image {
            // border: solid;
            width: 60%;


            img {
                
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }
        .rightsection {
            // border: solid;
            display: flex;
            flex-direction: column;
            gap: 2rem; 
            display: flex;
            flex-direction: column;
            position: relative;
            color: #f8f7f4;

            h2 {
                // border: solid;
                font-size: 28px;
                position: absolute;
                left: -3rem;
                top: 2rem;

            }
            h1 {
                position: absolute;
                top: 3.5rem;
                left: -1rem;

            }

            
        }
    }
    .whatwedo {
        padding-inline: 1rem;
            h2{
                font-size: 28px;
                margin-bottom: 0.8rem;
            }
            p {
                font-size: 18px;
            }

    }

    .discoveryourstyle {
        display: flex;
        flex-direction: column;
        position: relative;
        // border: solid green;
        margin-top: 1rem;
        h2 {
            text-align: center;
        }

        .buttons {
            padding: 1rem;
            display: flex;
            gap: 2rem;


            .casualbutton {
                border-radius: 0.3rem;
                padding-bottom: 0.4rem;
                
                &.casualclicked {
                    border-bottom: solid 4px;

                }



            }
            .formalbutton {
                border-radius: 0.3rem;
                padding-bottom: 0.4rem;
                
                &.formalclicked {
                    border-bottom: solid 4px;

                }



            }
            .nativebutton {
                border-radius: 0.3rem;
                padding-bottom: 0.4rem;
                
                &.nativeclicked {
                    border-bottom: solid 4px;

                }



            }
        }

        .slides {
            // display: flex;
            position: relative;
            margin-bottom: 30rem;


            .casualslide {
                // border: solid;
                position: absolute;
                top: 0;
                // border: solid;
                padding-inline: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                // border: solid green;
                height: fit-content;
                overflow: hidden;
                margin-top: 0.5rem;
                margin-bottom: 3rem;
                visibility: hidden;

                &.casualclicked {
                    visibility: visible;
                }
    
                .row1 {
                    height: 12rem;
                    
                    // border: solid red;
                    overflow: hidden;
                    display: flex;
                    gap: 0.7rem;
    
                    .image {
                        width: 50%;
                        height: 100%;
                        overflow: hidden;
                        position: relative;
    
    
    
                        // h2 {
                        //     position: absolute;
                        //  color: #f8f7f4;
                        //  top: 40%;
                        //  left: 35%;
                        // }
    
    
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        
                        .veil {
                                display: flex;
                                position: absolute;
                                color: #f8f7f4;
                                background-color: #0e0d0d88;
                                align-items: center;
                                justify-content: center;
                                width: 100%;
                                height: 100%;
                            }
                    }
    
                }
                // :nth-child(2) {

                //     :nth-child(2) {
                //         img {
                //             object-fit: fill;
                //         }

                //     }

                // }
            }
        }
        .formalslide {


            // border: solid;
            position: absolute;
            top: 0;


            padding-inline: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            // border: solid green;
            height: fit-content;
            overflow: hidden;
            margin-top: 0.5rem;
                margin-bottom: 3rem;
                visibility: hidden;
                

                &.formalclicked {
                    visibility: visible;
                }

    

            .row1 {
                height: 12rem;
                
                // border: solid red;
                overflow: hidden;
                display: flex;
                gap: 0.7rem;

                .image {
                    width: 50%;
                    height: 100%;
                    overflow: hidden;
                    position: relative;



                    // h2 {
                    //     position: absolute;
                    //  color: #f8f7f4;
                    //  top: 40%;
                    //  left: 35%;
                    // }


                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                }
                .veil {
                        display: flex;
                        position: absolute;
                        color: white;
                        background-color: #0e0d0d88;

                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                    }

            }
        }
        .nativeslide {

            // border: solid;
            position: absolute;
            top: 0;


            padding-inline: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            // border: solid green;
            height: fit-content;
            margin-top: 0.5rem;
                margin-bottom: 3rem;
                visibility: hidden;
                &.nativeclicked {
                    visibility: visible;
                }

            .row1 {
                height: 12rem;
                
                // border: solid red;
                overflow: hidden;
                display: flex;
                gap: 0.7rem;

                .image {
                    width: 50%;
                    height: 100%;
                    overflow: hidden;
                    position: relative;



                    // h2 {
                    //     position: absolute;
                    //  color: #f8f7f4;
                    //  top: 40%;
                    //  left: 35%;
                    // }


                    img {
                        width: 100%;
                        height: 100%;
                    }
                    
                }
                .veil {
                        display: flex;
                        position: absolute;
                        color: white;
                        background-color: #0e0d0d88;

                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                    }

            }
        }
    }

    .herosection {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        .subsection1 {
            // border: green solid;
            display: flex;
            gap: 0.2rem;
        margin-inline: 1rem;     
       }
        .subsection2 {
            // border: green solid;
            display: grid;
            justify-content: center;

            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.2rem;
        margin-inline: 1rem;     

        .div5 {
            display: flex;
            flex-direction: column;
            margin-top: 5rem;
            h2 {
                font-size: 21px;
                color: rgba(44, 41, 41, 0.548);
                text-align: center;
            }

                }
       }
        .subsection3 {
            // border: green solid;
            display: flex;
            gap: 0.2rem;
        margin-inline: 1rem;     
       }


        // column-gap: 0.5rem;

        div {
            border-radius: 0.5rem;

            height: 13rem;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

  
}

</style>


