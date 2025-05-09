<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const articleId = route.params.articleId
const judul = ref('')
const konten = ref('')

onMounted(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/article/${articleId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
        .then(function (response) {
            judul.value = response.data.data.judul.toUpperCase()
            konten.value = response.data.data.konten
        })
        .catch(function (error) {
            console.error('gagal ambil data', error);
            console.info('error')
        })
})

const keunggulan = [
    'Mudah larut sehingga mudah diserap tanah','Terdapat unsur yang lengkap','Dapat memperbaiki sifat fisik juga bioglogis tanah / Tanah menjadi gembur','Dapat meningkatkan produksi hasil pertanian'
]

</script>
<template>
    <!-- ARTICLE -->
    <section>
        <div class="bg-gray-300 w-full h-full mt-4 p-6 lg:px-32">
            <div class="text-4xl md:text-5xl font-bold text-center py-4">{{ judul }}</div>
            <div class="flex flex-col md:flex-row gap-4 lg:px-10">
                <div
                    class="w-[35vh] max-w-[40vh] md:w-1/5 mx-auto object-cover hover:scale-110 duration-500 animate-all">
                    <img src="/public/images/icon1.png" class="rounded-md max-h-40 md:max-h-60 flex mx-auto" alt="">
                </div>
                <p class="md:w-4/5 lg:text-xl">
                    {{ konten }}
                </p>
            </div>
        </div>
    </section>

    <!-- {{ --KANDUNGAN --}} -->
    <section>
        <div class="py-8 md:mt-6">
            <div class="text-xl font-bold text-center md:text-4xl lg:text-[44px]">UNSUR YANG TERKANDUNG DI DALAMNYA
            </div>
            <div class="grid grid-flow-col py-6 place-items-center place-content-evenly">
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
                    <img src="/public/images/Butir_NPK.PNG" alt="">
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
                    <div class="icon-list  bg-gradient-to-br from-green-500 to-yellow-300 absolute top-0 left-0 h-[38px] w-[38px] lg:h-10 lg:w-10 rounded-l-xl rounded-tr-2xl font-bold">
                        <span class="text-xl lg:text-2xl bottom-0 right-2 absolute">{{ index+1 }}</span>
                    </div>
                    <div class=" h-full w-full bg-white rounded-md py-2 px-7 lg:text-xl">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- FOOTER -->
</template>
<style >

</style>