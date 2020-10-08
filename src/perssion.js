import router from "@/router";
var isFilter = false;
import store from '@/store'

router.beforeEach(async (to, from, next) => {
  let islogin = localStorage.getItem('islogin');
  console.log('tag', Number(islogin))
  if (!Number(islogin)) {
    await store.dispatch('getHandleTree');
    router.addRoutes(store.state.getRouterTree);
    router.push({
      path: to.path
    });
    //这里将状态改变以后是因为在上面的元素的push以后会重新进入这个路由卫士
    localStorage.setItem('islogin', 1);
  } else {
    next();
  }
})