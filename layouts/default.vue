<script lang="ts" setup></script>

<template>
    <AppWrap>
        <AppNavBar />
        <main class="app__main">
            <slot />
        </main>
    </AppWrap>
</template>

<style scoped>
.app__main {
    flex: 1 0 auto;
    max-width: 100%;
    transition: .2s cubic-bezier(.4,0,.2,1);
}
</style>