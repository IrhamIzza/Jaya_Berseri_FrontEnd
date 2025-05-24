<script setup>
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Input from '@/components/ui/input/Input.vue';
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const articleId = route.params.articleId
const judul = ref('')
const konten = ref('')
const imageFile = ref(null)
const previewImage = ref('')


onMounted(() => {
    const token = localStorage.getItem('token')
    const role = +localStorage.getItem('role')

    if (!token || role !== 1) {
        router.push('/home')
    }

    axios.get(`${import.meta.env.VITE_API_URL}/article/${articleId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then((response) => {
        judul.value = response.data.data.judul
        konten.value = response.data.data.konten
        previewImage.value = response.data.data.image // Gambar lama (URL)
        // previewImage.value = import.meta.env.VITE_BASE_URL + '/storage/uploads/' + previewImage.value 
        previewImage.value = import.meta.env.VITE_BASE_URL + '/uploads/' + previewImage.value 

    }).catch((error) => {
        console.error('Gagal ambil data artikel', error)
    })
})

function onFileChange(event) {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
        imageFile.value = file
        previewImage.value = URL.createObjectURL(file)
    }
}

function update() {
    const formData = new FormData()
    formData.append('judul', judul.value)
    formData.append('konten', konten.value)

    // Hanya jika ada gambar baru dipilih
    if (imageFile.value) {
        formData.append('image', imageFile.value)
    }

    const token = localStorage.getItem('token')

    axios.post(`${import.meta.env.VITE_API_URL}/article/${articleId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    }).then(() => {
        console.log('Berhasil update artikel')
        router.push('/dashboard')
    }).catch((error) => {
        console.error('Gagal update artikel', error)
    })
}

</script>
<template>
    <div>
        <Card class="mx-auto max-w-sm md:max-w-[700px] md:my-[15vh]">
            <CardHeader>
                <CardTitle class="text-2xl text-center">
                    EDIT ARTICLE
                </CardTitle>
                <CardDescription>
                    Edit
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4">
                    <!-- Preview Gambar -->
                    <div >
                        <img :src="previewImage" alt="Preview" class="max-w-xs mb-2" />
                    </div>

                    <!-- Input Gambar -->
                    <div class="grid gap-2">
                        <Label for="image">Image</Label>
                        <Input type="file" @change="onFileChange" class="w-full border rounded p-2" />
                    </div>

                    <!-- Input Judul -->
                    <div class="grid gap-2">
                        <Label for="judul">Judul</Label>
                        <input v-model="judul" class="w-full border rounded p-2" required />
                    </div>

                    <!-- Input Konten -->
                    <div class="grid gap-2">
                        <Label for="konten">Konten</Label>
                        <textarea v-model="konten" class="w-full border rounded p-2 h-40" required></textarea>
                    </div>

                    <!-- Tombol Submit -->
                    <Button @click="update" class="w-full">Submit</Button>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
<style lang="">

</style>