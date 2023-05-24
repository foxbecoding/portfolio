<script lang="ts" setup></script>

<template>
    <AppWrap>
        <AppNavBar />
        <main class="app-main">
            <slot />
        </main>
    </AppWrap>
</template>

<style scoped>
.app-main {
    flex: 1 0 auto;
    max-width: 100%;
    transition: .2s cubic-bezier(.4,0,.2,1);
}
</style>