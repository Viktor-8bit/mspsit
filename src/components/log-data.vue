
<script setup>
    import { onMounted } from "vue";
    import { useLogsStore } from "../stores/log.js"

    const logs = useLogsStore()


    onMounted(async () => {
        await logs.get_logs()
    })

</script>

<template>
    <div v-for="log in logs.getLogs" :key="log.id">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-2 ip-text"> {{ log['ip'] }}</div>
                <div class="col">{{ log['data'] }}</div>
                <div class="col">{{ log['status'] }}</div>
            </div>
        </div>
        <div class="query-container ">
            <div class="row">
                <div class="col-2 col-ms-3">{{ log['user_agent'] }}</div>
                <div class="col query">{{ log['query'] }}</div>
            </div>
            <button type="button" class="btn btn-success mt-2">Подробнее</button>
        </div>
    </div>
</template>

<style>
    .query {
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .query-container {
        padding: 0% 0.6% 5% 0.6%;
        height: 20%;
    }

    .ip-text {
        color: #42ac50;
        font-family: "Trebuchet MS";
        font-weight: 600;
    }

</style>

