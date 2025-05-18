<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref } from 'vue'
import Navbar from "./components/Navbar.vue";
import axios from 'axios';

const router = useRouter();
const name = localStorage.getItem('name');

function logout() {
   axios.post('http://localhost:8000/api/logout', {}, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
   })
      .then(function (response) {
         console.log(response.data.messages);
         localStorage.removeItem('token');
         router.push('/login')
      })
      .catch(function (error) {
         console.error(error);
      });

}

</script>

<template>
   <header class="h-18 " v-if="!['login', 'register'].includes($route.name)">
    <Navbar class="absolute top-0 w-full z-50" v-if="!['login', 'register'].includes($route.name)"/>
   </header>
   <router-view></router-view>
</template>

<style scoped>
</style>
