
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
        <div>{{log}}</div>
    </div>

</template>

<style>


</style>

