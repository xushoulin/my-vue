<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.key}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Hello'
    }
  },
   beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
     console.log(to);
        console.log(from);
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
     console.log(to);
        console.log(from);
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

