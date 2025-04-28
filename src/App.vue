<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import axios from 'axios';
import { ref } from 'vue'

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
   <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" v-if="$route.name != 'login'">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><RouterLink to="/home">Home</RouterLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><RouterLink to="/about">About</RouterLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><RouterLink to="/login">Login</RouterLink></a>
              </li>
            </ul>
            <div class="d-flex" role="search">
              <p>hai</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
   <router-view></router-view>
</template>

<style scoped>
.no-decoration {
  text-decoration: none;
  color: inherit;
}
</style>
