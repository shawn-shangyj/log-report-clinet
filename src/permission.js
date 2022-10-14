import router from './router'
import store from './store'
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

router.beforeEach((to, from, next) => {
  // NProgress.start();
  if (to.path === '/') {
    next()
  } else {
    if (store.state.user.state === 'success') {
      next()
    } else {
      next('/')
    }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title
  // NProgress.done();
})
