<script setup>
import { Button } from '@/components/ui/button'
import Card from '../components/Card.vue';
import CardProduct from '@/components/CardProduct.vue';
import Footer from '@/components/Footer.vue';

const itemsCard = [
  {
    title: 'Mudah Larut',
    content: 'Mudah diserap oleh tanaman sehingga bisa maksimal penyerapan tanaman',
    img: '/images/serap.PNG'
  },
  {
    title: 'Meningkatkan Hasil',
    content: 'Seluruh bulir terisi penuh dan tidak ada bulir yang hampa/ kosong',
    img: '/images/meningkatkan.png'
  },
  {
    title: 'Kandungan Seimbang',
    content: 'Tanah gembur sehingga oksigen bisa masuk pernafasan tanaman bisa maksimal',
    img: '/images/kandungan.png'
  },
]

const itemCardProduct = [
  {
    title: 'PUPUK DAP',
    content: 'Pupuk anorganik yang mengandung dua unsur hara utama, Mengandung 18% Nitrogen (N) untuk pertumbuhan daun & batang.',
    img: '/images/icon1.png'
  },
  {
    title: 'PUPUK NAP',
    content: 'Pupuk yang mengandung dua unsur hara utama, yaitu Nitrogen (N) dan Fosfor (P). Pupuk ini digunakan untuk meningkatkan pertumbuhan tanaman.',
    img: '/images/icon2.png'
  },
]

</script>

<!-- Home.vue -->
<template>
    <!-- Hero -->
    <section class="relative h-[70vh] md:h-screen lg:h-[85vh] w-full">
      <!-- Background -->
      <div class="bg-[url(/images/bg7.jpg)] h-full w-full bg-cover blur-[3px] brightness-[0.3]"></div>
      <!-- Teks di atas background -->
      <div class="absolute inset-0 comtainer p-8 md:px-20 md:py-16 gap-1">
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
    <!-- Kelebihan -->
    <section>
      <div class="bg-neutral-800 py-6">
        <h1 class="text-4xl text-center font-bold text-white">KELEBIHAN</h1>
        <div class="px-4 sm:flex gap-4 justify-center">
          <Card v-for="(value, index) in itemsCard" loading="lazy"
              :key="index"
              :title="value.title"
              :content="value.content"
              :img="value.img"
              >
            </Card>
        </div>
      </div>
    </section>
    <!-- About -->
    <section>
      <div class="flex flex-col lg:flex-row lg:gap-4 h-full w-full py-5 border-b-2  relative bg-black">
        <div class="lg:w-1/3 w-4/5 md:w-3/4 mx-auto grid grid-flow-col gap-2 px-4">
            <div class="">
                <img class="rounded-lg object-cover w-full h-full" src="/images/vertical.jpg" alt="">
            </div>
            <div class="flex flex-wrap gap-2">
                <img class="rounded-lg object-cover " src="/images/hori1.jpg" alt="">
                <img class="rounded-lg object-cover " src="/images/hori2.jpg" alt="">
            </div>
        </div>
        <div class="lg:w-2/3 px-4">
            <p class="py-4 w-full text-white text-center font-bold text-4xl">TENTANG KAMI</p>
            <p class="w-full text-white">Kami adalah perusahaan pupuk pertanian dalam mengatasi kelangkaan
                pupuk
                subsidi dari pemerintah. Kami
                menyediakan pupuk alternatif yang
                berkualitas dengan harga yang terjangkau oleh masyarakat petani,Karakter pupuk
                kami adalah mengandung unsur yang lengkap dan seimbang antara unsur makro dan
                mikro sesuai dengan yang di butuhkan tanaman.</p>

            <p class="pt-5 text-white">
                Produk kami sudah teruji sejak tahun 1988, Dari pengalaman kami di lapangan pupuk kami bisa
                meningkat
                hasil panen sekitar 20% . Tentu nya dengan standar dosis kami sesuai dengan jenis tanaman. Kami
                berkomitmen memberikan kepuasan petani berupa kesehatan tanaman dan peningkatan hasil panen.
                Kami
                memberikan garansi mutu yang bisa di tuangkan dalam perjanjian tertulis dengan petani/konsumen.
                Dengan
                catatan bukan di atas tanah yang selalu mengeluarkan air dan tidak bisa mengering ( bahasa Jawa
                tanah
                becer)
            </p>
        </div>
    </div>
    </section>
    <!-- Produk -->
    <section class="">
        <div class="bg-neutral-700 py-8 md:px-20">
          <h1 class="text-4xl pb-4 text-center font-bold text-white">PRODUK</h1>
          <div class="px-4 flex flex-col sm:flex-row gap-2 ">
            <CardProduct>
            
            </CardProduct>
          </div>
        </div>
    </section>
    <!-- Footer -->
    <Footer>
    </Footer>
</template>
