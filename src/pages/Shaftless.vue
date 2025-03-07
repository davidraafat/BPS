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
        style="background-image: url('Downloads/images/15.jpg');"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Shaft less elevator</h1>
          <div class="text-center">
            <p style="font-weight: 500;">Lift Provides Safe and Convenient Vertical Transportation.</p>
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
                <img src="img/shaft.png" alt="" />
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
            <h2 class="title">What is shaft less elevator?</h2>
            <h5 class="description" style="font-weight: 500;">
              It  is a great solution for people who have difficulty climbing stairs.
              It is a lightweight and aesthetically pleasing design that will not take 
              up much space in your home. In fact, if you have an elevator in the next floor, 
              it will be almost invisible. The easy and quick installation will help you save 
              money and time, and you can try out your new purchase the next day after the 
              installation work begins. The platform is large enough to accommodate several people.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('Downloads/2.jpeg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-secondary">
                  <span>
                    Advantage
                  </span>
                  <ul>
                    <li>
                      Easy to install
                    </li>
                    <li>
                      Does not require an elevator shaft
                    </li>
                    <li>
                      Very safe
                    </li>
                    <li>
                      Comfortable and stylish
                    </li>
                  </ul>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <!-- <div
                class="image-container"
                style="background-image: url('Downloads/1.jpeg');"
              ></div> -->
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right "
                style="background-image: url('Downloads/3.jpeg'); margin-top: 6rem;"
              ></div>
              <h3>
                <strong style="color: #ff7129;">Streamline Elevator</strong> solution for Shaft elevator <strong style="color: #ff7129;">ensures</strong>
              </h3>
              <p style="color: black;">
                If you are looking for a safe and convenient way to move between
                 floors in your home, It lift can become an indispensable
                  part of your daily life.
              </p>
              <p style="color: black;">
                You can see more info here too. Just download our brochure
              </p>
              <a class="btn btn-primary" download href="../../Downloads/shaft_brochure.pdf">
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
