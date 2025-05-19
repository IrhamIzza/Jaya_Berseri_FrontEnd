<script setup>
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Button from './ui/button/Button.vue';
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter();
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div>
    <Table>
      <TableCaption>A list of your table article.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[30px]">
            No.
          </TableHead>
          <TableHead>Judul</TableHead>
          <TableHead >Konten</TableHead>
          <!-- <TableHead class="hidden md:block">Last Update</TableHead> -->
          <TableHead>ACTION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(item, index) in items" :key="item.id">
          <TableCell class="font-medium ">
            {{ index + 1 }}
          </TableCell>
          <TableCell>{{ item.judul }}</TableCell>
          <TableCell class="whitespace-normal overflow-y-auto max-h-10">{{ item.konten }}</TableCell>
          <!-- <TableCell class="hidden md:block">{{ item.updated_at }}</TableCell> -->
          <TableCell>
            <Button><router-link :to="{ name: 'articleEdit', params: { articleId: item.id }}">Edit</router-link></Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
<style lang="">

</style>