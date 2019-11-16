import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: require('@/views/home').default, 
      children: [
        {
          path: 'discover',
          component: require('@/views/discover').default,
        },
        {
          path: 'sinatv',
          component: require('@/views/sinatv').default,
        },
        {
          path: 'video',
          component: require('@/views/video').default,
        },
        {
          path: 'songlist/:id',
          component: require('@/views/songlist').default,
        },
        {
          path: '',
          redirect: 'discover'
        }
      ]
      // components: {
      //     header: require("@/components/topNavigationUnit").default,
      //     bodyLeft: require("@/components/songSingleTable").default,
      //     bodyRight: require("@/components/songList").default,
      //     footer: require("@/components/bottomPlayBar").default
      // },
    },
    {
      path: '/lyric',
      component: require('@/views/lyric').default
    },
    {
      path: '/',
      redirect: '/index',
    },
  ]
})
