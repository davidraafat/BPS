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
        style="background-image: url('Downloads/images/9.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Passenger elevator</h1>
          <div class="text-center">
            <p style="font-weight: 500;">Lift Provides Safe and Convenient Vertical Transportation.</p>
          </div>
        </div>
      </div>
    </div>
    <main style=" background-color: #f5f5f5;">
      <div class="section section-images" style="height: 100%;">
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-6">
              <div class="hero-images-container">
                <img src="img/elevator.png" alt="" />
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
            <h2 class="title">What is Passenger elevator?</h2>
            <h5 class="description" style="font-weight: 500;">
              Streamline Elevator's Passenger Elevators offer safety, efficiency,
              and reliability for commercial and residential buildings. With advanced 
              technology and customizable designs, they ensure smooth vertical transportation 
              and optimize passenger flow. Elevate your building to new heights with Streamline 
              Elevator's Passenger Elevators, where innovation meets quality.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('Downloads/images/30.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-secondary">
                  <span>
                    Advantage
                  </span>
                  <ul>
                    <li>
                      Energy efficient
                    </li>
                    <li>
                      Cost effictive
                    </li>
                    <li>
                      Comfort
                    </li>
                    <li>
                      Reduce noise
                    </li>
                    <li>
                      Integrated drive technology
                    </li>
                  </ul>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('Downloads/images/32.jpg');"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right "
                style="background-image: url('Downloads/images/35.jpg'); margin-top: 6rem;"
              ></div>
              <h3>
                <strong style="color: #ff7129;">Streamline Elevator</strong> solution tailor made for every need
              </h3>
              <p style="color: black;">
                We are providing wide range of innovative products including elevators, escalators and travelators,
                like :
              </p>
              <ul>
                <li>
                  Residential Building
                </li>
                <li>
                  Business Building
                </li>
                <li>
                  Hotel
                </li>
                <li>
                  Shopping center
                </li>
                <li>
                  Public Transportation and Airport
                </li>
                <li>
                  Medical Facilities
                </li>
              </ul>
              <a class="btn btn-primary" download href="../../Downloads/passenger_elevator.pdf">
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
