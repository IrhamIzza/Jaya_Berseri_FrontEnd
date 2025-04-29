<script setup>
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const token = localStorage.getItem('token');
const name = localStorage.getItem('name');
const router = useRouter();
function logout() {
    axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(function (response) {
            //  console.log(response.data.messages);
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            router.push('/login')
            console.info('Berhasil logout')
        })
        .catch(function (error) {
            console.error(error);
        });

}
</script>
<template>
    <header class="flex items-center justify-between p-4 bg-white shadow-md">
        <!-- Logo -->
        <div class="text-xl font-bold text-primary">
            JAYA BERSERI
        </div>
        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-6">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationItem>
                        <RouterLink to="/home"
                            class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                            Home</RouterLink>
                    </NavigationItem>
                    <NavigationItem>
                        <RouterLink to="/about"
                            class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                            About</RouterLink>
                    </NavigationItem>
                    <NavigationItem>
                        <RouterLink to="/login"
                            class="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 text-lg font-semibold rounded-md transition-colors me-8">
                            Login</RouterLink>
                    </NavigationItem>
                </NavigationMenuList>
                <div v-if="token != null">
                    <Button @click="logout">
                        Logout
                    </Button>
                </div>
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
                    <nav class="flex flex-col space-y-4 p-4">
                        <RouterLink to="/home" class="text-gray-700 hover:text-primary text-lg font-semibold">
                            Home
                        </RouterLink>
                        <RouterLink to="/about" class="text-gray-700 hover:text-primary text-lg font-semibold">
                            About
                        </RouterLink>
                        <RouterLink to="/about" class="text-gray-700 hover:text-primary text-lg font-semibold">
                            Services
                        </RouterLink>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>

        <!-- Desktop Login Button -->
        <div class="hidden md:block">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Halo, {{name}}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink  @click="logout" class="w-[80px] cursor-pointer">
                                LOGOUT
                            </NavigationMenuLink>
                        </NavigationMenuContent>
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
