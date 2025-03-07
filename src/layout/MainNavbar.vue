<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img src="../../public/img/logo-landing.png" width="200px">
        <!-- Streamline Elevator -->
      </router-link>
    </template>
    <template slot="navbar-menu">

      <li  class="nav-link " style="font-size: small;"><a href="/">
        <i class="fa fa-home mr-1"></i> Home
      </a></li>
      <li  class="nav-link " style="font-size: small;"><router-link to="/contact-us">
        <i class="fa fa-phone mr-1"></i> Contact Us
      </router-link></li>
      <!-- <li  class="nav-link " style="font-size: small;"><a href="/shaftless">
        <i class="fa fa-arrow-up mr-1"></i> Shaftless Elevator
      </a></li>
      <li class="nav-link " style="font-size: small;"><a href="/home">
        <i class="fa fa-building mr-1"></i> Home Elevator
      </a></li>
      <li class="nav-link " style="font-size: small;"><a href="/passenger">
        <i class="fa fa-user mr-1"></i> Passenger Elevator
      </a></li> -->
      <!-- <drop-down
        tag="li"
        title="Elevators"
        icon="fa fa-database"
        class="nav-item p-0"
        style="font-size: medium;"
      >
        <nav-link to="/shaftless">
          <i class="fa fa-arrow-up"></i> Shaftless
        </nav-link>
        <nav-link to="/home">
          <i class="fa fa-home"></i> Home
        </nav-link>
        <nav-link to="/passenger">
          <i class="fa fa-user"></i> Passenger
        </nav-link>
      </drop-down>
      <drop-down
        tag="li"
        title="TK Access"
        icon="fa fa-database"
        class="nav-item p-0"
        style="font-size: medium;"
      >
        <nav-link to="/altura">
          <i class="fa fa-building"></i> Altura
        </nav-link>
        <nav-link to="/supra">
          <i class="fa fa-caret-square-up"></i> Supra
        </nav-link>
        <nav-link to="/flow">
          <i class="fa fa-wheelchair"></i> Flow X & Gluid
        </nav-link>
      </drop-down>
      <drop-down
        tag="li"
        title="Escalators"
        icon="fa fa-database"
        class="nav-item p-0"
        style="font-size: medium;"
      >
        <nav-link to="/escalator">
          <i class="fa fa-arrow-up"></i> Escalator
        </nav-link>
        <nav-link to="/walk-escalator">
          <i class="fa fa-male"></i> Moving Walkways
        </nav-link>
      </drop-down> -->
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on LinkedIn"
          data-placement="bottom"
          href="https://www.linkedin.com/in/bps-company-303735354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          <p class="d-lg-none d-xl-none">LinkedIn</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/share/1QT6tBh8Gz/?mibextid=wwXIfr"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/bps_forsupplies?igsh=MW44bnppYnF2b3llMA=="
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar, DropDown, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    // DropDown,
    Navbar,
    // NavLink,
    [Popover.name]: Popover
  },
};
</script>

<style>
.no-icon{
  margin-left: 0.5rem !important;
}
</style>
