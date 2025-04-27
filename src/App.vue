<script setup>
import { RouterLink, RouterView } from "vue-router";
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
              <!-- <li class="nav-item">
                <a class="nav-link"><RouterLink to="/about">About</RouterLink></a>
              </li> -->
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

<style scoped></style>
