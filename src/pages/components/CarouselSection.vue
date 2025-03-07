<template>
  <div class="section p-0" id="carousel">
      <div class="row p-0">
        <div class="col-12 p-0">
          <el-carousel height="125vh">
            <el-carousel-item>
              <img class="d-block" src="img/background.jpg" style="transition: all 1s ease-out; height: 100%; width: 100%;" alt="First slide" />
              <!-- <div class="carousel-caption d-none d-md-block">
                <h5>Nature, United States</h5>
              </div> -->
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bg-3.jpg" style="transition: all 1s ease-out; height: 100%; width: 100%;" alt="Second slide" />
              <!-- <div class="carousel-caption d-none d-md-block">
                <h5>Somewhere Beyond, United States</h5>
              </div> -->
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bg-4.jpg" style="transition: all 1s ease-out; height: 100%; width: 100%;" alt="Third slide" />
              <!-- <div class="carousel-caption d-none d-md-block">
                <h5>Yellowstone National Park, United States</h5>
              </div> -->
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style></style>
