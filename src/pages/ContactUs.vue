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
        style="background-image: url('Downloads/images/4.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Contact Us</h1>
          <div class="text-center">
            <p style="font-weight: 500;">When Safety meets Elegance</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
        <div class="container">
          <h2 class="title">Want to know more?</h2>
          <p class="description">You can leave us a message.</p>
          <div class="row">
            <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
              <fg-input
                class="input-lg"
                placeholder="Your Name..."
                v-model="form.Name"
                addon-left-icon="now-ui-icons users_circle-08"
              >
              </fg-input>
              <fg-input
                class="input-lg"
                placeholder="Email Here..."
                v-model="form.email"
                addon-left-icon="now-ui-icons ui-1_email-85"
              >
              </fg-input>
              <fg-input
                class="input-lg"
                placeholder="Phone Number..."
                v-model="form.phone"
                addon-left-icon="now-ui-icons tech_headphones"
              >
              </fg-input>
              <div class="textarea-container">
                <textarea
                  class="form-control"
                  name="name"
                  rows="4"
                  cols="80"
                  v-model="form.message"
                  placeholder="Type a message..."
                ></textarea>
              </div>
              <div class="send-button">
                <n-button type="primary" round block size="lg" @click="SubmitForm"
                  >Send Message</n-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
				<div class="col-md-6">
					<div class="wrapper">
						<div class="row no-gutters justify-content-between">
							<div class="col-lg-6 d-flex align-items-stretch">
								<div class="info-wrap w-100 p-5">
									<h3 class="mb-4">Contact us</h3>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-4">
					            <p><span>Address:</span>Beside Sun City Mall  , Sheraton, Cairo, Egypt </p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-4">
					            <p><span>Phone:</span> +20 120 599 9434</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-4">
					            <p><span>Email:</span> <a href="mailto:info@bps-egypt.com">info@bps-egypt.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-4">
					            <p><span>Website:</span> <a href="#">st-elevator.com</a></p>
					          </div>
				          </div>
			          </div>
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
    // Parallax,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        Name: '',
        email: '',
        message: '',
        phone:''
      }
    };
  },
  methods:{
    async SubmitForm(){
      await axios.post("https://formspree.io/f/mkgjwzav",this.form).then(res =>{
        Swal.fire({
          title: 'Email sent',
          text: 'We will contact you soon!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.form = {
          Name: '',
          email: '',
          message: '',
          phone: ''
        }
      }).catch(err =>{
        console.log(err);
        Swal.fire({
          title: 'Email not sent',
          text: err.response.data.errors[0].message,
          icon: 'error',
          confirmButtonText: 'Ops'
        })
      });
    }
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
