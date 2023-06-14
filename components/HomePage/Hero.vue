<script lang="ts" setup>
import { mdiXml } from '@mdi/js'

const iconPath = ref<string>(mdiXml)
</script>

<template>
    <div class="hero min-h-screen bg-base-100">
        <div 
            class="hero-content text-center" 
            :style="{
                position:'relative', 
                top:'-50px'
            }"
        >
            <div class="max-w-lg">
                <svg-icon class="mx-auto" type="mdi" :path="iconPath" :size="200" />
                <h1 class="text-3xl sm:text-5xl font-bold">Hi I'm Fox, and I am a <br> 
                    <span class="primary-highlight">Full Stack Developer</span>
                </h1>
            </div>
        </div>
    </div>
</template>