


import { defineStore } from "pinia";
import axios from "axios";

export const useLogsStore = defineStore('serverLogs', {
    state: () => ({
        logs: [],
        log: Object
    }),
    getters: {
        /** @type {{ id: int, ip: string, data: string, status: int, query: string, user_agent: string  }[]} */
        getLogs(state) { return state.logs },
        getLog(state) { return state.log },
    },
    actions: {
        async get_logs() {
            await axios.get("http://127.0.0.1:5000/api/get_all_logs").then((result) => {
                this.logs = result.data
            })
        },
        async get_log(id) {
            await axios.get("http://127.0.0.1:5000/api/get_log_buId/" + id).then((result) => {
                this.log = result.data
            })
        }
    }
})


