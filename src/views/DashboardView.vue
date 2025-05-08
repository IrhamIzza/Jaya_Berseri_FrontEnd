<script setup>
import AppSidebar from '@/components/AppSidebar.vue';
import TableArticle from '@/components/TableArticle.vue';
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
                    id : item.id,
                    judul: item.judul,
                    konten: item.konten,
                    updated_at: item.updated_at,
                }
            })
        })
        .catch(function (error) {
            console.error('gagal ambil data', error);
            console.info('error')
        })
})

</script>

<template>
    <div class="flex h-screen">
        <AppSidebar class="hidden sm:block"></AppSidebar>
        <main class="flex-1 p-6 bg-gray-100 overflow-auto">
            <h1 class="text-2xl font-bold mb-4">Hello</h1>
            <!-- Misalnya panggil komponen table di sini -->
            <TableArticle :items="artikel"
            >
            </TableArticle>
        </main>
    </div>
    <div>
    </div>
</template>