<template>
    <section class="bg-light py-3 py-md-5">
        <Card class="mx-auto max-w-sm my-[15vh]">
            <CardHeader>
                <CardTitle class="text-2xl">
                    Register
                </CardTitle>
                <CardDescription>
                    <!-- Register email below to register to your account -->
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="name">Name</Label>
                        <Input v-model="name" id="name" type="name" placeholder="name" required />
                    </div>
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
                        Register
                    </Button>
                </div>
                <div class="mt-4 text-center text-sm">
                    Do have an account?
                    <router-link to=/login class="underline"> Login
                    </router-link>
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
const name = ref('');
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
    axios.post(`${import.meta.env.VITE_API_URL}/regiser`, {
        name: name.value,
        email: email.value,
        password: password.value
    })
        .then(function (response) {
            console.log('Register Berhasil', response);
            router.push('/home')
        })
        .catch(function (error) {
            console.log(error.response.data.messages);
            console.error(error);
        });

}


</script>