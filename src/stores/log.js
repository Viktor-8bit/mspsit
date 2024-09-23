


import { defineStore } from "pinia";
import axios from "axios";

export const useLogsStore = defineStore('serverLogs', {
    state: () => ({
        logs: []
    }),
    getters: {
        /** @type {{ id: int, ip: string, data: string, status: int, query: string, user_agent: string  }[]} */
        getLogs(state) { return state.logs },
    },
    actions: {
        async get_logs() {
            await axios.get("http://127.0.0.1:5000/api/get_all_logs").then((result) => {
                this.logs =result.data
            })
        }
    }
})


