<template>
  <component
    class="dropdown"
    :is="tag"
    :class="[
      { show: isOpen },
      { dropdown: direction === 'down' },
      { dropup: direction === 'up' }
    ]"
    aria-haspopup="true"
    :aria-expanded="isOpen"
    @click="toggleDropDown"
    v-click-outside="closeDropDown"
  >
    <slot name="title">
      <a
        class="dropdown-toggle nav-link"
        :class="{ 'no-caret': hideArrow }"
        data-toggle="dropdown"
      >
        <img v-if="title == 'Elevators'" width="20px" src="https://cdn-icons-png.freepik.com/256/16545/16545809.png?ga=GA1.1.699594536.1716038516&semt=ais_hybrid">
        <img v-if="title == 'TK Access'" width="20px" src="https://cdn-icons-png.freepik.com/256/16545/16545809.png?ga=GA1.1.699594536.1716038516&semt=ais_hybrid">
        <img v-if="title == 'Escalators'" width="20px" src="https://cdn-icons-png.freepik.com/256/1286/1286904.png?ga=GA1.1.699594536.1716038516&semt=ais_hybrid">
        <!-- <i :class="icon"></i> -->
        <span class="no-icon">{{ title }}</span>
      </a>
    </slot>
    <ul
      class="dropdown-menu"
      :class="[
        { 'dropdown-menu-right': position === 'right' },
        { show: isOpen }
      ]"
    >
      <slot></slot>
    </ul>
  </component>
</template>
<script>
export default {
  name: 'drop-down',
  props: {
    direction: {
      type: String,
      default: 'down'
    },
    title: String,
    icon: String,
    position: String,
    hideArrow: Boolean,
    tag: {
      type: String,
      default: 'li'
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  provide() {
    return {
      closeDropDown: this.closeDropDown
    }
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit('change', this.isOpen);
    },
    closeDropDown() {
      this.isOpen = false;
      this.$emit('change', this.isOpen);
    }
  }
};
</script>
<style>
.dropdown {
  list-style-type: none;
}

.dropdown .dropdown-toggle {
  cursor: pointer;
}
</style>
