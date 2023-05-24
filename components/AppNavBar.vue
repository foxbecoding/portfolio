<script lang="ts" setup>

interface NavBarAction {
    id: number
    class: string
    label: string
}

const navBarActions = ref<NavBarAction[]>([
    {id: 1, class: 'btn bg-neutral mr-4', label: 'Contact Me'},    
    {id: 2, class: 'btn bg-neutral', label: 'My Resume'}    
])

</script>

<template>
    <div class="navbar bg-base-100 px-0">
        <AppFrame>
            <div class="flex-1">
                <Logo :width="180" />
            </div>
            <div class="flex-none">
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