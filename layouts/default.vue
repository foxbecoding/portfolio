<script lang="ts" setup></script>

<template>
    <div>
        <div class="navbar bg-base-100 px-0">
            <AppFrame>
                <div class="flex-1">
                    <Logo :width="180" />
                </div>
                <div class="flex-none">
                    <button class="btn bg-neutral mr-4">Contact Me</button>
                    <button class="btn bg-neutral">My Resume</button>
                </div>
            </AppFrame>
        </div>
        <slot />
    </div>
</template>