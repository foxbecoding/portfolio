<template>
    <div class="application__wrap">
        <slot />
    </div>
</template>

<style scoped>
.application__wrap {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    max-width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    position: relative;
}
</style>