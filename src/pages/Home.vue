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
        style="background-image: url('Downloads/images/8.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Home elevator</h1>
          <div class="text-center">
            <p style="font-weight: 500;">Lift Provides Safe and Convenient Vertical Transportation.</p>
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
                <img src="img/elevator-cartoon.png" alt="" />
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
            <h2 class="title">What is home elevator?</h2>
            <h5 class="description" style="font-weight: 500;">
              Whether you've decided to build your dream home or enjoy the freedom of access to
              all levels of your current home, STREAMLINE ELEVATOR has the solution that will
              fit your lifestyle.
              The compact home elevators model fits virtually any new or existing home
              With an affordable purchase price, is more economical than you may expect Take
              the step to make your house a home.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('Downloads/images/21.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-secondary">
                  <span>
                    Advantage
                  </span>
                  <ul>
                    <li>
                      Eco Efficient
                    </li>
                    <li>
                      Safety Devices and Battries
                    </li>
                    <li>
                      Upgrade
                    </li>
                    <li>
                      Comfortable and silence
                    </li>
                    <li>
                      Fast Installation and Maintainance
                    </li>
                  </ul>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('Downloads/images/25.jpg');"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right "
                style="background-image: url('Downloads/images/31.jpg'); margin-top: 6rem;"
              ></div>
              <h3>
                1. Tailor your lift to <strong style="color: #ff7129;">suit your home&#39;s architecture</strong> and <strong style="color: #ff7129;">design</strong>
              </h3>
              <p style="color: black;">
                With the beauty of consciously chosen sustainable materials, the Elite Home Lift adapts to the style of you environments
                with costomisable colours.
              </p>
              <h3>
                2. Travel in style with <strong style="color: #ff7129;">premium material</strong> and <strong style="color: #ff7129;">high quality</strong> finishes
              </h3>
              <p style="color: black;">
                The Elite Home Lift is designed and manufactured in Italy. All materials sourced reflect the highest quality,
                ensure you lift adds a touch of luxury to you home.
              </p>
              <h3>
                3. <strong style="color: #ff7129;">Innovative design</strong> ensure the latest technologies are capitalised on for your <strong style="color: #ff7129;">benefit</strong>
              </h3>
              <p style="color: black;">
                We are constantly looking for emerging technologies to take out lifts to new heights,
                resulting in cost and eco-effictive solutions to move you through your day. 
              </p>
              <p style="color: black;">
                You can see more info here too. Just download our brochure
              </p>
              <a class="btn btn-primary" download href="../../Downloads/home_elevator.pdf">
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
