



<script setup>
    
    
    import { defineProps, toRefs, onMounted, computed, ref } from "vue";
    import { useLogsStore } from "../stores/log.js"


    const props = defineProps({
        id: Number,
    });

    const { id } = toRefs(props);

    const logSotre = useLogsStore()
    onMounted(async () => {
        await logSotre.get_log(id.value)
    })

    const log = computed(() => logSotre.getLog)

    const smiling_dict = ref({
        200: '👍',
        400: '❌'
    })

</script>


<template>
    <div class="p-5 mt-5 mx-md-0">
        
        <div class="container-fluid">
            <div class="row">
                <div class="col ip-text"> {{ log['ip'] }}</div>
                <div class="col">{{ log['data'] }}</div>
                <div class="col smiling">{{ smiling_dict[log['status']] }}</div>
            </div>
        </div>

        <div class="query-container mt-5">
            <div class="row">
                <div class="col-md col-3 ">{{ log['user_agent'] }}</div>
                <div class="col mt-5">
                    <highlightjs
                        language="SQL"
                        :code="`${log['query']}`"
                    />
                </div>
            </div>
        </div>

    </div>
</template>



<script>
    import 'highlight.js/lib/common';
    import hljsVuePlugin from "@highlightjs/vue-plugin";

    export default {
        components: {
            highlightjs: hljsVuePlugin.component
        }
    }
</script>
