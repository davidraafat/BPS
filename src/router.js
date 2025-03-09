import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Escalator from './pages/Escalator.vue';
import Shaftless from './pages/Shaftless.vue';
import Home from './pages/Home.vue';
import Passenger from './pages/Passenger.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import ContactUs from './pages/ContactUs.vue';
import WalkEscalator from './pages/walk-escalator.vue';
import Altura from './pages/Altura.vue';
import Supra from './pages/Supra.vue';
import Flow from './pages/Flow.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      components: { default: ContactUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/escalator',
      name: 'escalator',
      components: { default: Escalator, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/walk-escalator',
      name: 'walk-escalator',
      components: { default: WalkEscalator, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/altura',
      name: 'altura',
      components: { default: Altura, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/supra',
      name: 'supra',
      components: { default: Supra, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/flow',
      name: 'flow',
      components: { default: Flow, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/shaftless',
      name: 'shaftless',
      components: { default: Shaftless, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/home',
      name: 'home',
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '/passenger',
      name: 'passenger',
      components: { default: Passenger, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
    {
      path: '*',
      name: '404',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        showLoading: true
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
