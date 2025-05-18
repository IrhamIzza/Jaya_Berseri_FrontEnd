<script setup>
import AppSidebar from '@/components/AppSidebar.vue';
import TableArticle from '@/components/TableArticle.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const artikel = ref([])
onMounted(() => {
    const token = localStorage.getItem('token');
    const role = +localStorage.getItem('role');
    if (token == null || role != 1) {
        router.push('/home');
    }
    axios.get(`${import.meta.env.VITE_API_URL}/article`, {
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
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('name');
                localStorage.removeItem('email');
                localStorage.removeItem('role');
                router.push('/home');
            }
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