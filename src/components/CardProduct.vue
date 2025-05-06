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

const props = defineProps({
  title: String,
  content: String,
  img: String,

})
</script>
<template>
  <div class="">
    <Card class="py-2 lg:p-4 gap-0 h-full flex my-auto">
      <CardTitle class="text-center text-2xl font-bold pb-1">{{ title }}</CardTitle>
      <div class="flex flex-row px-4 gap-2">
        <div class="flex flex-1/3">
          <img v-bind:src="img" alt="" class="  max-h-40 mx-auto my-auto object-cover ">
        </div>
        <div class="flex-2/3 flex flex-col gap-1">
          <CardContent class="px-2 text-sm/5 md:text-base">
            {{ content }}
          </CardContent>
          <div class="flex mx-auto">
            <Button class="rounded-2xl">Telusuri</Button>
          </div>
        </div>
      </div>

    </Card>
  </div>
</template>
<style lang="">

</style>