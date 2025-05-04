<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const props = defineProps({
  title: String,
  content: String,
  img: String,

})
</script>
<template>
  <div class="py-2 mx-auto">
    <Card class="flex flex-row p-4">
      <div class="flex  mx-auto h-40">
        <img v-bind:src="img" alt="" class="object-cover ">
      </div>
      <div>
        <CardHeader>
          <CardTitle>{{ title }}</CardTitle>
        </CardHeader>
        <CardContent>
          {{ content }}
        </CardContent>
      </div>
    </Card>
  </div>
</template>
<style lang="">

</style>