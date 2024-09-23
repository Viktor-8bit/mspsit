

<template>
  
  <MyNavbar/>
  <div class="app">
    <router-view/>
  </div>

</template>


<script>
  import MyNavbar from "./components/my-navbar.vue";
  export default {
    components: { 
        MyNavbar 
    }
  }
</script>