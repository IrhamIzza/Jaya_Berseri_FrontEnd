<script setup>
import Footer from '@/components/Footer.vue';
import Button from '@/components/ui/button/Button.vue';
import Skeleton from '@/components/ui/skeleton/Skeleton.vue';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const route = useRoute()
const articleId = ref(route.params.articleId)
const judul = ref('')
const konten = ref('')
const image = ref('')
const loading = ref(true)

function fetch(id) {
    loading.value = true
    axios.get(`${import.meta.env.VITE_API_URL}/article/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
        .then(function (response) {
            judul.value = response.data.data.judul.toUpperCase()
            konten.value = response.data.data.konten
            image.value = response.data.data.image
            image.value = import.meta.env.VITE_BASE_URL + '/uploads/' + image.value 
        })
        .catch(function (error) {
            console.error('gagal ambil data', error);
            console.info('error')
        })
        .finally(() => {
            loading.value = false
        })
}

onMounted(() => {
    fetch(articleId.value)
})

watch(() => route.params.articleId, (New, old) => {
    fetch(New)
})

const keunggulan = [
    'Mudah larut sehingga mudah diserap tanah', 'Terdapat unsur yang lengkap', 'Memperbaiki sifat fisik juga bioglogis tanah / Tanah menjadi gembur', 'Dapat meningkatkan produksi hasil pertanian'
]
const picture = [
    '/images/npk1.jpeg', '/images/npk2.jpeg', '/images/npk3.jpeg', '/images/npk4.jpeg', '/images/npk5.jpeg', '/images/npk6.jpeg'
]

</script>
<template>
    <!-- ARTICLE -->
    <section>
        <div class="bg-gray-300 w-full h-full mt-4 p-6 lg:px-32">
            <!-- Skeleton -->
            <div v-if="loading" class="flex pb-6"><Skeleton class="h-10 w-[200px] mx-auto "></Skeleton></div>
            <div v-else class="text-4xl md:text-5xl font-bold text-center pb-6">{{ judul }}</div>
            <div class="flex flex-col md:flex-row gap-4">
                <div
                    class="w-[35vh] max-w-[40vh] md:w-1/5 mx-auto object-cover hover:scale-110 duration-500 animate-all">
                <!-- Skeleton image -->
                <Skeleton v-if="loading" class="h-52 md:max-h-60"></Skeleton>
                <img v-else :src="image" class="rounded-md max-h-40 md:max-h-60 flex mx-auto" alt="">
            </div>
                <!-- Skeleton konten-->
                <div v-if="loading" class="md:w-4/5">
                    <div class="space-y-2">
                        <Skeleton class="h-6 w-full" v-for="item in 7" :key="item" />
                    </div>
                </div>
                <!-- Content  -->
                <p v-else class="md:w-4/5 lg:text-xl text-justify">
                    {{ konten }}
                </p>
            </div>
            <div class="relative h-12 md:h-12">
                <Button class="absolute md:end-0 bottom-0"><a target="_blank"
                        href="https://wa.me/+6281334067463">PESAN</a></Button>
            </div>

        </div>
    </section>

    <!-- {{ --KANDUNGAN --}} -->
    <section>
        <div class="py-8 md:mt-6">
            <div class="text-xl font-bold text-center md:text-4xl lg:text-[44px]">UNSUR YANG TERKANDUNG DI DALAMNYA
            </div>
            <div class="grid grid-flow-col px-2 py-6 place-items-center place-content-evenly">
                <div class="grid grid-flow-col gap-5 md:gap-10">

                    <div class="text-sm sm:text-base md:text-3xl ">
                        <div class="text-produk-kandungan">N: 14,46 %</div>
                        <div class="text-produk-kandungan">P: 14,74 %</div>
                        <div class="text-produk-kandungan">S: 3.50 %</div>
                    </div>
                    <div class="text-sm sm:text-base md:text-3xl">
                        <div class="text-produk-kandungan">Cu: 9,80 PPM</div>
                        <div class="text-produk-kandungan">B: 30,01 PPM</div>
                        <div class="text-produk-kandungan">Mo: 0,15 PPM</div>
                    </div>
                    <div class="text-sm sm:text-base md:text-3xl">
                        <div class="text-produk-kandungan">K: 17,10 %</div>
                    </div>
                </div>
                <div class="w-[15vh] md:w-full">
                    <img src="/images/Butir_NPK.PNG" alt="">
                </div>
            </div>
        </div>
    </section>

    <!-- {{ --Keunggulan --}} -->
    <section>
        <div class="p-6 bg-gray-300 lg:px-36">
            <div class="text-2xl md:text-4xl font-bold text-center">KEUNTUNGAN PUPUK NPK SCUMFOFE</div>
            <div class="mt-3 flex justify-between flex-col gap-2 ">
                <div v-for="(item, index) in keunggulan" :key="index" class="relative pt-4 pl-4">
                    <div
                        class="icon-list  bg-gradient-to-br from-green-500 to-yellow-300 absolute top-0 left-0 h-[38px] w-[38px] lg:h-10 lg:w-10 rounded-l-xl rounded-tr-2xl font-bold">
                        <span class="text-xl lg:text-2xl bottom-0 right-2 absolute">{{ index + 1 }}</span>
                    </div>
                    <div class=" h-full w-full bg-white rounded-md py-2 px-7 lg:text-xl">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Jenis Tanaman -->
    <section>
        <div class="p-4 lg:px-40 md:px-10">
            <div class="text-2xl md:text-4xl font-bold text-center">JENIS JENIS TANAMAN </div>
            <div class="grid grid-flow-col grid-rows-4 md:grid-rows-3 py-6 lg:text-2xl gap-1 md:items-center ">
                <div class="relative pr-2 ">1. Tanamanan Pangan <span class="right-[2px] absolute">:</span></div>
                <div class="relative pr-2 self-start row-span-2 md:row-span-1">2. Tanamanan Palawija <span
                        class="right-[2px] absolute">:</span></div>
                <div class="relative pr-2 ">3. Tanamanan Perkebunan <span class="right-[2px] absolute">:</span></div>
                <div class="relative ">Padi, Kedelai, Jagung</div>
                <div class="relative row-span-2 md:row-span-1"> Semangka, Cabe, Tomat, Melon, Bawang Merah/Putih,
                    Kentang </div>
                <div class="relative "> Tebu, Kopi, Kelapa Sawit, Kako</div>
            </div>
        </div>
        <div class="p-4 lg:px-40 md:px-10">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6">
                <div v-for="(item, index) in picture" :key="index">
                    <img class="aspect-[3/2] w-full object-cover border-[6px] border-green-500 rounded-md" :src=item
                        loading="lazy">
                </div>
            </div>
        </div>
    </section>
    <!-- FOOTER -->
    <Footer></Footer>
</template>
<style></style>