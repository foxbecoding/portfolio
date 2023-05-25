<script lang="ts" setup>

interface NavBarAction {
    id: number
    class: string
    label: string
}

const navBarActions = ref<NavBarAction[]>([
    {id: 1, class: 'btn btn-sm bg-neutral', label: 'Contact Me'},    
    {id: 2, class: 'btn btn-sm bg-neutral', label: 'My Resume'}    
])

</script>

<template>
    <div class="navbar bg-base-100 px-0">
        <AppFrame>
            <div class="flex-1">
                <Logo :width="180" />
            </div>
            <div class="flex-none space-x-4">
                <button 
                    v-for="(nba, i) in navBarActions" 
                    :key="i" 
                    :class="nba.class"
                >
                    {{ nba.label }}
                </button>
            </div>
        </AppFrame>
    </div>
</template>