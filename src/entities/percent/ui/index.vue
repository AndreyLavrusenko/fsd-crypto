<template>
    <div
        :style="{backgroundColor: styleValues.background, color: styleValues.color}"
        :class="$style.balance__percent"
    >
        +5.21%
    </div>
</template>

<script setup lang="ts">

import {computed, PropType} from "vue";


const props = defineProps({
    status: {
        type: String as PropType<'green' | 'red'>,
        required: true
    },
    opacity: {
        type: String as PropType<'1' | '0'>,
        required: true
    }
})


const styleValues = computed(() => {
    if (props.status === 'green' && props.opacity === '0') {
        return {
            background: '#32B1533A',
            color: '#32B153'
        }
    }

    if (props.status === 'green' && props.opacity === '1') {
        return {
            background: '#32B153',
            color: '#FFFFFF'
        }
    }

    if (props.status === 'red' && props.opacity === '0') {
        return {
            background: 'rgba(239,106,107,0.23)',
            color: '#E34446'
        }
    }

    if (props.status === 'red' && props.opacity === '1') {
        return {
            background: '#E34446',
            color: '#FFF'
        }
    }
})

</script>

<style scoped module>
.balance__percent {
    padding: 4px 8px;

    color: var(--colors-white, #FFF);

    /* Subhedline/SemiBold */
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 133.333% */
    letter-spacing: 0.44px;

    border-radius: 120px;
}
</style>