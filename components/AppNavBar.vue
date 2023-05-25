<script lang="ts" setup>

interface NavBarAction {
    id: number
    class: string
    label: string
    clickHandler: Function | null
}

const navBarActions = ref<NavBarAction[]>([
    {
        id: 1, 
        class: 'btn btn-sm bg-neutral', 
        label: 'Contact', 
        clickHandler: () => window.location.href = 'mailto:fox@foxbecoding.com' 
    },    
    {
        id: 2, 
        class: 'btn btn-sm bg-neutral', 
        label: 'Resume', 
        clickHandler: null
    }    
])
</script>

<template>
    <div class="navbar bg-base-100 px-0 max-[359px]:flex max-[359px]:flex-col">
        <div class="min-[360px]:flex-1">
            <AppFrame>
                <Logo :width="180" />
            </AppFrame>
        </div>
        <div class="min-[360px]:flex-none max-[359px]:mt-2">
            <AppFrame class="space-x-2 sm:space-x-4">
                <button 
                    v-for="(nba, i) in navBarActions" 
                    :key="i" 
                    :class="nba.class"
                    @click="nba.clickHandler"
                >
                    {{ nba.label }}
                </button>
            </AppFrame>
            
        </div>
    </div>
</template>