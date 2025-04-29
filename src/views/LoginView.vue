<template>
    <section class="bg-light py-3 py-md-5">
        <Card class="mx-auto max-w-sm">
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
                            <a href="#" class="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </a>
                        </div>
                        <Input v-model="password" id="password" type="password" required />
                    </div>
                    <Button @click="login" type="submit" class="w-full">
                        Login
                    </Button>
                </div>
                <div class="mt-4 text-center text-sm">
                    Don't have an account?
                    <a href="#" class="underline">
                        Sign up
                    </a>
                </div>
            </CardContent>
        </Card>
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
    axios.post('http://localhost:8000/api/login', {
        email: email.value,
        password: password.value
    })
        .then(function (response) {
            console.log('Login Berhasil');
            localStorage.setItem('name', response.data.data.name)
            localStorage.setItem('email', response.data.data.email)
            localStorage.setItem('token', response.data.access_token)
            router.push('/home')
        })
        .catch(function (error) {
            console.log(error.response.data.messages);
            console.error(error);
        });

}


</script>