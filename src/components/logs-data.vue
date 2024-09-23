
<script setup>
    import { onMounted, ref } from "vue";
    import { useLogsStore } from "../stores/log.js"


    const smiling_dict = ref({
        200: '👍',
        400: '❌'
    })

    const logSotre = useLogsStore()
    onMounted(async () => {
        await logSotre.get_logs()
    })

</script>

<template>
    <div v-for="log in logSotre.getLogs" :key="log.id">

        <hr class="my-hr ">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 ip-text"> {{ log['ip'] }}</div>
                <div class="col">{{ log['data'] }}</div>
                <div class="col smiling">{{ smiling_dict[log['status']] }}</div>
            </div>
        </div>
        <div class="query-container">
            <div class="row">
                <div class="col-2 col-ms-3 mb-2">{{ log['user_agent'] }}</div>
                <div class="col query mb-2 mt-2">
                    <highlightjs
                        language="SQL"
                        :code="`${log['query']}`"
                    />
                </div>
            </div>
            <button type="button" class="btn btn-outline-success" v-on:click="console.log(log['id'])">Подробнее</button>
        </div>
    </div>
</template>

<style>

    .smiling {
        font-size: 150;
    }

    .my-hr {
        color: #42ac50;
        padding: 0% 5% 0% 5%;
    }

    .query {
        max-height: 100px; /* Установите желаемую высоту блока */
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .query-container {
        padding: 0% 0.6% 5% 0.6%;
    }

    .ip-text {
        color: #42ac50;
        font-family: "Palatino";
        font-weight: 600;
    }

</style>


<script>
    import 'highlight.js/lib/common';
    import hljsVuePlugin from "@highlightjs/vue-plugin";

    export default {
        components: {
            highlightjs: hljsVuePlugin.component
        }
    }
</script>