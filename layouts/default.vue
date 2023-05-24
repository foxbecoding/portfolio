<script lang="ts" setup></script>

<template>
    <AppWrap>
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
        <main class="app-main">
            <slot />
        </main>
    </AppWrap>
</template>

<style scoped>
.app-main {
    flex: 1 0 auto;
    max-width: 100%;
    padding: 64px 0 0 0;
    transition: .2s cubic-bezier(.4,0,.2,1);
}
</style>