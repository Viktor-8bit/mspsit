


<script>

import logByIdData from '@/components/log-by-id-data.vue';

export default {
    components: {
        logByIdData
    }
}

</script>


<template>
    <div>
        <logByIdData :id="$route.params.id"/>
    </div>
</template>