<script lang="ts" setup>

interface Button {
    id: number
    class: string
    label: string
}

const navActions = ref<Button[]>([
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
                    v-for="(btn, i) in navActions" 
                    :key="i" 
                    :class="btn.class"
                >
                    {{ btn.label }}
                </button>
            </div>
        </AppFrame>
    </div>
</template>