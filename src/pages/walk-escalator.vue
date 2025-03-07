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
        style="background-image: url('Downloads/images/walk-2.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Moving Walkways</h1>
          <div class="text-center">
            <p style="font-weight: 500;">RELIABLE CEASELESS OPERATION.</p>
          </div>
        </div>
      </div>
    </div>
    <main style="background-color: #f5f5f5;">
      <div class="section section-images" style="height: 100%;">
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-6 mt-5">
              <div class="hero-images-container">
                <img src="img/walk.png" alt="" />
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
            <h2 class="title">What is Moving Walkways Escalator?</h2>
            <h5 class="description" style="font-weight: 500;">
              Moving walk adopts humanized design, introducing advanced techniques into aspects 
              of the product to provide perfect large passenger flow solutions for various public 
              apaces, In urban public spaces, it can provide conveniences for people.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('Downloads/images/walk-3.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-secondary">
                  <span>
                    Advantage
                  </span>
                  <ul>
                    <li>
                      Comfortable
                    </li>
                    <li>
                      Humanized design
                    </li>
                    <li>
                      Environmental protective
                    </li>
                  </ul>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('Downloads/images/walk-1.jpg');"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right "
                style="background-image: url('Downloads/images/walk-4.jpg'); margin-top: 6rem;"
              ></div>
              <h3>
                1. The <strong style="color: #ff7129;">humanized design</strong> provides <strong style="color: #ff7129;">comfortable experiences</strong> 
              </h3>
              <p style="color: black;">
                In different environments, it can be allocated with dirrerent accessories 
                to improve user experience to the maximum extent. The humanized design can 
                satisfy the different demands for clients to bring comfortable and stable user experience.
              </p>
              <h3>
                2. It is durable <strong style="color: #ff7129;">durable</strong> in use and <strong style="color: #ff7129;">favorable</strong> in performance
              </h3>
              <p style="color: black;">
                It can choose variable frequency driving technology optional to effectively 
                avoid interferences from other factors and further improve the energy-saving 
                effect and reduce the operation cost to the maximum extent.
              </p>
              <h3>
                3. It is <strong style="color: #ff7129;">safe, stable  </strong> and <strong style="color: #ff7129;"> durable.</strong>
              </h3>
              <p style="color: black;">
                The highly-precisive metal truss structure makes it tight, secure 
                and safe with strong carrying capacity. With advanced tech-niques, 
                it insists on details to make sure the product quality in each link from production to application. 
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
