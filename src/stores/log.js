


import { defineStore } from "pinia";
import axios from "axios";

export const useLogsStore = defineStore('serverLogs', {
    state: () => ({
        /** @type {{ id: int, ip: string, data: string, status: int, query: string, user_agent: string  }[]} */
        logs: []
    }),
    getters: {
        getLogs(state) { return state.logs },
        fuck() { return "fuck" }
    },
    actions: {
        async get_logs() {
            console.log('foijsfgoijrieojiopjiuh')
            var tem_logs = await axios.get("http://127.0.0.1:5000/api/get_all_logs", (result) => {
                return result.data;
            })
            self.logs = tem_logs
        }
    },
    result: {
        
    }
})


