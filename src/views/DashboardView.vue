<script setup>
import AppSidebar from '@/components/AppSidebar.vue';
import Table from '@/components/Table.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const artikel = ref([])

onMounted(() => {
    axios.get('http://localhost:8000/api/article', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
        .then(function (response) {
            //  console.log(response.data.messages);
            artikel.value = response.data.data.map(function (item) {
                return {
                    judul: item.judul,
                    konten: item.konten,
                    updated_at: item.updated_at,
                }
            })
        })
        .catch(function (error) {
            console.error('gagal ambil data', error);
            console.info('error')
            console.log(localStorage.getItem('token'))
        })
})

</script>

<template>
    <div class="flex h-screen">
        <AppSidebar class="hidden sm:block"></AppSidebar>
        <main class="flex-1 p-6 bg-gray-100 overflow-auto">
            <h1 class="text-2xl font-bold mb-4">Hello</h1>
            <!-- Misalnya panggil komponen table di sini -->
            <Table :items="artikel"
            >
            </Table>
        </main>
    </div>
    <div>
    </div>
</template>