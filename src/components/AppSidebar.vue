<script setup lang="ts">
import { RouterLink } from 'vue-router';




</script>
<template>
<body class="bg-gray-100">
  <aside class="w-48 bg-gray-800 text-white min-h-screen p-4">
    <nav>
      <ul class="space-y-2">
        <li>
          <RouterLink to="/dashboard" class="block py-2 px-3 rounded hover:bg-gray-700">Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home" class="block py-2 px-3 rounded hover:bg-gray-700">Home
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</body>
</template>