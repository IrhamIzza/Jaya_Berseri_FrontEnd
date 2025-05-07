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
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]">
            No.
          </TableHead>
          <TableHead>Judul</TableHead>
          <TableHead >Konten</TableHead>
          <TableHead>Last Update</TableHead>
          <TableHead>ACTION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(item, index) in items" :key="index">
          <TableCell class="font-medium">
            {{ index + 1 }}
          </TableCell>
          <TableCell>{{ item.judul }}</TableCell>
          <TableCell class="whitespace-normal overflow-y-auto max-h-10">{{ item.konten }}</TableCell>
          <TableCell>{{ item.updated_at }}</TableCell>
          <TableCell>
            <Button>EDIT</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
<style lang="">

</style>