<template>
    <section class="bg-black py-3 h-screen overflow-y-hidden">
        <form v-if="!loading" @submit.prevent="login">
            <Card class="mx-auto max-w-sm my-[15vh]">
                <CardHeader>
                    <CardTitle class="text-2xl">
                        Login
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input v-model="email" id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div class="grid gap-2">
                            <div class="flex items-center">
                                <Label for="password">Password</Label>
                                <!-- <a href="#" class="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </a> -->
                            </div>
                            <Input v-model="password" id="password" type="password" autocomplete="on" required />
                        </div>
                        <Button @click="login" type="submit" class="w-full" >
                            Login
                        </Button>
                        <div v-if="errorMessage" class="text-sm text-red-600">
                            {{ errorMessage }}
                        </div>
                    </div>
                    <div class="mt-4 text-center text-sm">
                        Don't have an account?
                        <router-link to=/register class="underline"> Sign up</router-link>
                    </div>
                    <div class="mt-4 text-center text-sm">
                        <router-link to=/home class="underline"> Home</router-link>
                    </div>
                </CardContent>
            </Card>
        </form>
        <div v-else class="flex items-center justify-center w-screen h-screen">
            <div class="bg-black max-w-68 rounded-lg p-2 text-xl ">
                <svg class="motion-safe:animate-spin size-24 flex mx-auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 3a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 3ZM8.937 6.438a2.502 2.502 0 0 0-2.5 2.5c0 1.378 1.122 2.5 2.5 2.5 1.38 0 2.5-1.122 2.5-2.5 0-1.38-1.12-2.5-2.5-2.5Zm14.126 1.5c-.551 0-1 .449-1 1 0 .55.449 1 1 1 .55 0 1-.45 1-1 0-.551-.45-1-1-1ZM6 13.75a2.25 2.25 0 1 0 .001 4.501A2.25 2.25 0 0 0 6 13.75Zm20 1c-.691 0-1.25.559-1.25 1.25s.559 1.25 1.25 1.25 1.25-.559 1.25-1.25-.559-1.25-1.25-1.25ZM8.937 21.063c-1.105 0-2 .894-2 2a1.999 1.999 0 1 0 4 0c0-1.106-.894-2-2-2Zm14.126.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM16 24.25c-.965 0-1.75.785-1.75 1.75s.785 1.75 1.75 1.75 1.75-.785 1.75-1.75-.785-1.75-1.75-1.75Z"
                        fill="#ffffff" class="fill-000000"></path>
                </svg>
                <p class="font-semibold text-white">
                    PROCESSING....
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const loading = ref(false);

onMounted(() => {
    const token = localStorage.getItem('token');
    if (token != null) {
        router.push('/home');
    }
});

function login() {
    loading.value=true
    errorMessage.value = '';
    axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email: email.value,
        password: password.value,

    })
        .then(function (response) {
            // console.log('Login Berhasil', response);
            localStorage.setItem('name', response.data.data.name)
            localStorage.setItem('email', response.data.data.email)
            localStorage.setItem('role', response.data.data.role)
            localStorage.setItem('token', response.data.access_token)
            router.push('/home')
        })
        .catch(function (error) {
            console.log(error.response.data.messages);
            errorMessage.value = error.response.data.messages;
            console.error(error);
        })
        .finally(()=> {
            loading.value = false
        });

}


</script>