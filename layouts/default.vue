<script lang="ts" setup></script>

<template>
    <div>
        <div class="navbar bg-base-100 px-0">
            <div class="w-full mx-8">
                <div class="flex-1">
                    <img src="logo.png" />
                </div>
                <div class="flex-none">
                    <button class="btn bg-neutral mr-4">Contact Me</button>
                    <button class="btn bg-neutral">My Resume</button>
                </div>
            </div>
        </div>
        <slot />
    </div>
</template>