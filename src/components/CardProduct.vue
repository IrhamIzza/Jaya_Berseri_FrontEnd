<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Button from './ui/button/Button.vue';
import { RouterLink } from 'vue-router';
import { valueUpdater } from './ui/table/utils';

const props = defineProps({
  title: String,
  content: String,
  img: String,

})

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
<template>
    <Card class="py-2 lg:p-4 gap-0 h-full flex my-auto group hover:bg-linear-to-bl hover:from-green-600 to-lime-600 hover:text-white duration-300 hover:scale-105 transform transition hover:border-none" 
    v-for="(value, index) in itemCardProduct" loading="lazy">
      <CardTitle class="text-center text-2xl font-bold pb-1">{{ value.title }}</CardTitle>
      <div class="flex flex-row px-4 gap-2">
        <div class="flex flex-1/3">
          <img v-bind:src="value.img" alt="" loading="lazy" class=" max-h-40 mx-auto my-auto object-cover ">
        </div>
        <div class="flex-2/3 flex flex-col gap-1">
          <CardContent class="px-2 text-sm/5 md:text-base">
            {{ value.content }}
          </CardContent>
          <div class="flex mx-auto">
            <Button class="cursor-pointer group-hover:bg-white group-hover:text-black hover:bg-white"><RouterLink class="rounded-2xl" :to="{ name: 'productArticle', params: { articleId: index + 1 }}">Telusuri</RouterLink> </Button>
          </div>
        </div>
      </div>
    </Card>
</template>
<style lang="">

</style>