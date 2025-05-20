<script setup>
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const token = localStorage.getItem('token');
const name = localStorage.getItem('name');
const role = localStorage.getItem('role');

const router = useRouter();
function logout() {
    axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(function (response) {
            //  console.log(response.data.messages);
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('role');
            router.push('/login')
            console.info('Berhasil logout')
        })
        .catch(function (error) {
            console.error(error);
        });

}
</script>
<template>
    <header class="flex items-center justify-between p-4 bg-linear-to-bl from-green-500 to-lime-500 shadow-md">
        <!-- Logo -->
        <div class="text-xl font-bold text-primary">
            JAYA BERSERI
        </div>
        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-6">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem v-if="role == 1">
                        <RouterLink to="/dashboard"
                            class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                            DASHBOARD</RouterLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <RouterLink to="/home"
                            class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                            HOME</RouterLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <RouterLink :to="{ name: 'productArticle', params: { articleId: 1 }}"
                            class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                            PUPUK NPK</RouterLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <RouterLink :to="{ name: 'productArticle', params: { articleId: 2 }}"
                            class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                            PUPUK DAP</RouterLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <RouterLink to="/about"
                            class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                            ABOUT</RouterLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
            <Sheet>
                <SheetTrigger as-child>
                    <Button variant="outline" size="icon">
                        <!-- Hamburger icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <nav class="flex flex-col mt-8 space-y-4 p-4">
                        <SheetClose v-if="role == 1" class="border-b-2 text-left">
                            <RouterLink to="/dashboard" class="text-gray-700 hover:text-primary text-lg font-semibold">
                                DASHBOARD
                            </RouterLink>
                        </SheetClose>
                        <SheetClose class="border-b-2 text-left">
                            <RouterLink to="/home" class="text-gray-700 hover:text-primary text-lg font-semibold">
                                HOME
                            </RouterLink>
                        </SheetClose>
                        <SheetClose class="border-b-2 text-left">
                            <RouterLink :to="{ name: 'productArticle', params: { articleId: 1 }}" class="text-gray-700 hover:text-primary text-lg font-semibold">
                                PUPUK NPK
                            </RouterLink>
                        </SheetClose>
                        <SheetClose class="border-b-2 text-left">
                            <RouterLink :to="{ name: 'productArticle', params: { articleId: 2 }}" class="text-gray-700 hover:text-primary text-lg font-semibold">
                                PUPUK DAP
                            </RouterLink>
                        </SheetClose>
                        <SheetClose class="border-b-2 text-left">
                            <RouterLink to="/about" class="text-gray-700 hover:text-primary text-lg font-semibold">
                                ABOUT
                            </RouterLink>
                        </SheetClose>
                        <SheetClose v-if="token == null" class="border-b-2 text-left">
                            <RouterLink to="/login" class="text-gray-700 hover:text-primary text-lg font-semibold">
                                LOGIN
                            </RouterLink>
                        </SheetClose>
                        <SheetClose v-if="token != null" class="border-b-2 text-left">
                            <a @click="logout" class="text-gray-700 hover:text-primary text-lg font-semibold cursor-pointer">LOGOUT</a>
                        </SheetClose>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>

        <!-- Desktop Login Button -->
        <div class="hidden md:block">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationItem v-if="token == null">
                            <RouterLink to="/login"
                                class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                                LOGIN</RouterLink>
                        </NavigationItem>
                        <div v-if="token != null">
                            <NavigationMenuTrigger>Halo, {{ name }}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink @click="logout" class="w-[80px] cursor-pointer">
                                    LOGOUT
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </div>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <!-- <DropdownMenu>
                <DropdownMenuTrigger>{{ name }}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem @click="logout">Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> -->

        </div>
    </header>
</template>
<style>
</style>