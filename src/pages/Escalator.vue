<template>
  <div>
    <a href="https://api.whatsapp.com/send?phone=201205999434" target="_blank"
      class="btn btn-primary floating-btn">
      <i class="fab fa-whatsapp" style="font-size: 25px;"></i>
    </a>
    <!-- <a href="mailto:website@st-elevator.com" target="_blank"
      class="btn btn-primary floating-btn-2">
      <i class="fa fa-envelope" style="font-size: 25px;"></i>
    </a> -->
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('Downloads/images/es-4.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Escalator</h1>
          <div class="text-center">
            <p style="font-weight: 500;">Fashionable, Aesthetic And Swift.</p>
          </div>
        </div>
      </div>
    </div>
    <main style="background-color: #f5f5f5;">
      <div class="section section-images" style="height: 100%;">
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-6">
              <div class="hero-images-container">
                <img src="img/escalator.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">What is Escalator?</h2>
            <h5 class="description" style="font-weight: 500;">
              Escalator has integrated with domestic and foreign advanced
               technologies to constantly pursue the improvement in technique
               and perfect in detail. Meanwhile it combines the safety,
               practicability, durability and visual aesthetics to bring
               more comfortable and convenient experience for people.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('Downloads/images/es-3.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-secondary">
                  <span>
                    Advantage
                  </span>
                  <ul>
                    <li>
                      Fashionable
                    </li>
                    <li>
                      Aesthetic
                    </li>
                    <li>
                      Swift
                    </li>
                  </ul>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('Downloads/images/es-1.jpg');"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right "
                style="background-image: url('Downloads/images/es-2.jpg'); margin-top: 6rem;"
              ></div>
              <h3>
                1. It is <strong style="color: #ff7129;">natural</strong> and <strong style="color: #ff7129;">artistic</strong> with comfortable designs 
              </h3>
              <p style="color: black;">
                The escalator adopts streamlined design, making it natural in appearance. 
                Beautiful and fashion, the escalator can be well integrated in the surrounding architectural environment.
              </p>
              <h3>
                2. It is <strong style="color: #ff7129;">durable</strong> in use and <strong style="color: #ff7129;">favorable</strong> in performance
              </h3>
              <p style="color: black;">
                Adopting the most advanced domestic and foreign manufacturing techniques, its designed in large truss. 
                The rigidity and anti-distortion can reach inter national level.
              </p>
              <h3>
                3. <strong style="color: #ff7129;">Stable </strong> and <strong style="color: #ff7129;"> raliable,</strong> it is safety-oriented
              </h3>
              <p style="color: black;">
                Secured by system of micro-computer, it is equipped with a series of extended functions, 
                not only ensuring the continuous highly-efficient and stable operation of the escalator, 
                but also able to rapidly respond to emergency situations. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style scoped>
.floating-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  border-radius: 25rem;
  background-color: #26d969;
  animation: bounce 1s infinite alternate;
}
.floating-btn-2 {
  position: fixed;
  bottom: 20px;
  right: 100px;
  z-index: 1000;
  border-radius: 25rem;
  background-color: #2671d9;
  animation: bounce 1s infinite alternate;
}
@keyframes bounce {
  to { transform: scale(1.2); }
}
</style>
