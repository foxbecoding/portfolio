<script lang="ts" setup>

interface NavBarAction {
    id: number
    class: string
    label: string
}

const navBarActions = ref<NavBarAction[]>([
    {id: 1, class: 'btn btn-sm bg-neutral', label: 'Contact'},    
    {id: 2, class: 'btn btn-sm bg-neutral', label: 'Resume'}    
])

</script>

<template>
    <div class="navbar bg-base-100 px-0">
        <div class="flex-1">
            <AppFrame>
                <Logo :width="180" />
            </AppFrame>
        </div>
        <div class="flex-none">
            <AppFrame class="space-x-2 sm:space-x-4">
                <button 
                    v-for="(nba, i) in navBarActions" 
                    :key="i" 
                    :class="nba.class"
                >
                    {{ nba.label }}
                </button>
            </AppFrame>
            
        </div>
    </div>
</template>