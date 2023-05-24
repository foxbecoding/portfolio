<template>
    <div class="app__layout">
        <div class="app__wrap">
            <slot />
        </div>
    </div>
    
</template>

<style scoped>
.app__layout {
    height: 100%;
    display: flex;
}
.app__wrap {
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