<template>
    <section class="bg-light py-3">
        <form @submit.prevent="login">
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
                        <Button @click="login" type="submit" class="w-full">
                            Login
                        </Button>
                        <div v-if="errorMessage" class="text-sm text-red-600">
                            {{ errorMessage }}
                        </div>
                    </div>
                    <div class="mt-4 text-center text-sm">
                        Don't have an account?
                        <router-link to=/register class="underline"> Sign up
                        </router-link>
                    </div>
                </CardContent>
            </Card>
        </form>
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

onMounted(() => {
    const token = localStorage.getItem('token');
    if (token != null) {
        router.push('/home');
    }
});

function login() {
    errorMessage.value = '';
    axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email: email.value,
        password: password.value,

    })
        .then(function (response) {
            // console.log('Login Berhasil', response);
            localStorage.setItem('name', response.data.data.name)
            localStorage.setItem('email', response.data.data.email)
            localStorage.setItem('role',  response.data.data.role)
            localStorage.setItem('token', response.data.access_token)
            router.push('/home')
        })
        .catch(function (error) {
            console.log(error.response.data.messages);
            errorMessage.value = error.response.data.messages;
            console.error(error);
        });

}


</script>