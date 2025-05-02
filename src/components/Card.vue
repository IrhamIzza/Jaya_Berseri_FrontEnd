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
    title : String,
    content : String,
    img : String,

})
</script>
<template>
    <div class="py-2">
        <Card class="h-full sm:max-w-[380px]">
          <CardHeader>
            <div class="flex mx-auto h-24 w-24 ">
                <img v-bind:src="img" alt="" class="object-cover rounded-full ">
            </div>
            <CardTitle class="text-center pt-1 text-2xl font-bold">{{title}}</CardTitle>
          </CardHeader>
          <CardContent class="text-center text-gray-500">
            {{ content }}
          </CardContent>
        </Card>
    </div>
</template>
<style lang="">

</style>