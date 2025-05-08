<script setup>
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const articleId = route.params.articleId
const judul = ref('')
const konten = ref('')

onMounted(() => {
    console.log('Route:', articleId)
    axios.get(`http://localhost:8000/api/article/${articleId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
        .then(function (response) {
            // console.log(response.data);
            judul.value = response.data.data.judul
            konten.value = response.data.data.konten

        })
        .catch(function (error) {
            console.error('gagal ambil data', error);
        })

})

function update() {
    axios.put(`http://localhost:8000/api/article/${articleId}`,{
            judul: judul.value,
            konten: konten.value
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
        .then((response) => {
            console.log('berhasil update artikel')
            router.push('/dashboard')
        })
        .catch((error) => {
            console.error('gagal update artikel', error)
        })
}

</script>
<template>
    <div>
        <Card class="mx-auto max-w-sm my-[15vh]">
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
                    <div class="grid gap-2">
                        <Label for="judul">Judul</Label>
                        <input v-model="judul" class="w-full border rounded p-2" required />
                    </div>
                    <div class="grid gap-2">
                        <Label for="konten">Konten</Label>
                        <textarea v-model="konten" class="w-full border rounded p-2 h-40" required></textarea>
                    </div>
                    <Button @click="update" type="update" class="w-full">
                        Submit
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
<style lang="">

</style>