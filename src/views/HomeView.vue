<script setup>
import { Button } from '@/components/ui/button'
import Card from '../components/Card.vue';

const itemsCard = [
  {
    title: 'Mudah Larut',
    content: 'Mudah di serap oleh tanaman sehingga bisa maksimal penyerapan tanaman',
    img: '/images/serap.PNG'
  },
  {
    title: 'Judul B',
    content: 'Deskripsi B',
    img: '/images/b.jpg'
  }
]

</script>

<!-- Home.vue -->
<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[70vh] md:h-screen lg:h-[85vh] w-full">
      <!-- Background -->
      <div class="bg-[url(/images/bg7.jpg)] h-full w-full bg-cover blur-[3px] brightness-[0.3]"></div>
      <!-- Teks di atas background -->
      <div class="absolute inset-0 comtainer p-8 md:p-16 gap-1">
        <h1 class="text-4xl pb-4 text-center md:text-7xl text-white font-bold">PT JAYA BERSERI</h1>
        <div class="flex md:gap-4">
          <div class="flex md:flex-5/6 flex-col gap-6">
            <h1 class=" md:text-4xl text-white font-semibold">Kami membantu anda dalam menangani kelangkaan
              pupuk subsidi.</h1>
            <h5 class=" md:text-3xl text-white">Kami adalah perusahaan pupuk pertanian dan perkebunan yang
              turut serta membantu petani dalam mengatasi kelangkaan pupuk subsidi seiring di kuranginya kuota pupuk
              bersubsidi dari pemerintah.</h5>
            <div class="flex">
              <Button variant="outline">FIND OUT MORE</Button>
            </div>
          </div>
          <div class="md:flex-1/6 my-auto items-center">
            <img class="hidden md:block" src="/images/icon2.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- ICON -->
    <div class="bg-black pt-2">
      <div class="px-4">
        <Card v-for="(value, index) in itemsCard" 
            :key="index"
            :title="value.title"
            :content="value.content"
            :img="value.img"
            >
          </Card>
      </div>
    </div>
  </div>
</template>
