<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li class="mr-3">
            <p>
              <i class="fas fa-envelope"></i>
              info@bps-egypt.com
            </p>
          </li>
          <li>
            <p>
              <i class="fab fa-whatsapp"></i>
              +20 120 599 9434
            </p>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Designed and Coded by
        <a href="https://www.linkedin.com/in/david-raafat-881257173/" target="_blank" rel="noopener"
          >David Raafat</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
