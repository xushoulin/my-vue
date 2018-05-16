<template>
  <div id="app">
    <div class="img">
      <img src="./assets/logo.png">
    </div>
    <span @click="goback">后退</span>
    <span @click="gonext">前进</span>

    <ul>
      <!-- <li><router-link :to="{name:'params',params:{paramsId:456}}"  tag="a">params</router-link> </li> -->
      <li><router-link to="/params/7889"  tag="a">params</router-link> </li>
      <li><router-link :to="{name:'query',query:{queryId:789}}"  tag="a">query</router-link> </li>
    </ul>
    <p>{{ $route.name}}</p>
    <router-link to="/" tag="a">HelloWorld</router-link> | 
    <router-link :to="{name:'Hello',query:{queryId:456}}" tag="a">Hello</router-link> | 
    <router-link :to="{name:'Hello',params:{key:123}}" tag="a">Hello</router-link> | 
    <router-link to="/count/123/456"  tag="a">count</router-link> |
    <router-link to="/goback/789/000"  tag="a">redirect</router-link> |
    <router-link to="/jspang"  tag="a">alias</router-link> |
     <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>


    <transition name="fade" mode="out-in">
     <router-view></router-view>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
     goback(){
      this.$router.go(-1);
    },
    gonext(){
       this.$router.go(1);
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size:22px;
  .img{
    display: block;
    text-align: center;
  }
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}

</style>
