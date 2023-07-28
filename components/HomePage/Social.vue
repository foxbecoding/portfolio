<script lang="ts" setup>
import { mdiLinkedin } from '@mdi/js'

const iconPath = ref<string>(mdiLinkedin)
</script>

<template>  
    <div class="py-8">
        <div class="text-center">
            <h1 class="text-4xl sm:text-5xl font-bold">Find me on LinkedIn</h1>
        </div>
        <div class="text-center my-4">
            <div class="avatar">
                <div class="w-24 mask mask-squircle bg-neutral">
                    <svg-icon type="mdi" :path="iconPath" :size="98" />
                </div>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold"> 
                <a class="primary-highlight" href="https://www.linkedin.com/in/foxbecoding/">@foxbecoding</a>
            </h2>  
        </div>
    </div>
</template>