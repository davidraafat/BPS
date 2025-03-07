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
        style="background-image: url('Downloads/IPL Images & Videos/1.jpg');"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Supra</h1>
          <div class="text-center">
            <p style="font-weight: 500;"> Platform lifts are essential for enhancing accessibility in homes and commercial spaces.</p>
          </div>
        </div>
      </div>
    </div>
    <main style="height: 550px; background-color: #f5f5f5;">
      <div class="section section-images" style="height: 100%;">
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-4">
              <div class="hero-images-container">
                <img src="Downloads/IPL Images & Videos/Supra-3d.png" alt="" />
              </div>
              <!-- <div class="hero-images-container-1">
                <img src="img/elevator.png" alt="" />
              </div>
              <div class="hero-images-container-2">
                <img src="img/elevator.png" alt="" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">What is Supra Platform lift?</h2>
            <h5 class="description" style="font-weight: 500;">
              Supra is designed for use on any 
              type of staircase: curved, straight 
              with a change of gradient, multiple 
              landings and spiral configurations.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('Downloads/IPL Images & Videos/2.jpeg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-secondary">
                  <span>
                    Advantage
                  </span>
                  <ul>
                    <li>
                      Control Station
                    </li>
                    <li>
                      Folding seat
                    </li>
                    <li>
                      Compact & Discreet
                    </li>
                    <li>
                      On-board controls
                    </li>
                  </ul>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <video
                class="image-container"
                style="aspect-ratio: 16/9;width: inherit;"
                controls="true"
              >
                <source src="Downloads/IPL Images & Videos/supra.mp4" type="video/mp4">
              </video>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right "
                style="background-image: url('Downloads/IPL Images & Videos/1.jpg'); margin-top: 6rem;"
              ></div>
              <h3>
                <strong style="color: #ff7129;">Streamline Elevator</strong> solution for Supra Platform lift <strong style="color: #ff7129;">ensures</strong>
              </h3>
              <p style="color: black;">
                Supra’s dual rail concept is robust in design and doubles up as a handrail, creating optimal use of space. Special attention has been paid to safety and quality. The Supra lift has been tested to TÜV standards and is CE-certified.
              </p>
              <a class="btn btn-primary" download href="../../Downloads/Access_Supra_Brochure_email_EN.pdf">
                <i class="fa fa-download"></i>
                Download
              </a>
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
  name: 'shaftless',
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
