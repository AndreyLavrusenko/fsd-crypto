<template>
    <div
        :style="{backgroundColor: styleValues?.background, color: styleValues?.color, padding: props.opacity === 'none' ? '' : '4px 8px'}"
        :class="$style.balance__percent"
    >
        {{
            props.data >= 0
                ? `+${props.data}`
                : `${props.data}`
        }}%
    </div>
</template>

<script setup lang="ts">

import {computed, PropType} from "vue";


const props = defineProps({
    opacity: {
        type: String as PropType<'1' | '0' | 'none'>,
        required: true
    },
    data: {
        type: Number,
        required: true
    }
})


const styleValues = computed(() => {
    if (props.data >= 0 && props.opacity === '0') {
        return {
            background: '#32B1533A',
            color: '#32B153'
        }
    }

    if (props.data >= 0 && props.opacity === '1') {
        return {
            background: '#32B153',
            color: '#FFFFFF'
        }
    }

    if (props.data >= 0 && props.opacity === 'none') {
        return {
            background: 'inherit',
            color: '#32B153'
        }
    }

    if (props.data < 0 && props.opacity === '0') {
        return {
            background: 'rgba(239,106,107,0.23)',
            color: '#E34446'
        }
    }

    if (props.data < 0 && props.opacity === '1') {
        return {
            background: '#E34446',
            color: '#FFF'
        }
    }

    if (props.data < 0 && props.opacity === 'none') {
        return {
            background: 'inherit',
            color: '#E34446'
        }
    }
})

</script>

<style scoped module>
.balance__percent {
    display: flex;
    align-items: center;
    justify-content: flex-end;

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