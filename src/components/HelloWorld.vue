<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/Hi1" tag="a">Hi1</router-link> |
    <router-link to="/Hi2" tag="a">Hi2</router-link> |
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your HelloWorld'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

