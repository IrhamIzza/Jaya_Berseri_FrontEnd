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
        <Card >
          <CardHeader>
            <div class="flex mx-auto h-24">
                <img v-bind:src="img" alt="" class="rounded-full ">
            </div>
            <CardTitle class="text-center pt-1 text-3xl font-bold">{{title}}</CardTitle>
          </CardHeader>
          <CardContent class="text-center">
            {{ content }}
          </CardContent>
        </Card>
    </div>
</template>
<style lang="">

</style>