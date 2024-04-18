import { defineStore } from "pinia";

export const useCommonStore = defineStore("CommonStore", {
  state: () => ({
    apiIds: {
      "us-east-1": {
        rest: "yty8agkf1h",
        wss_get_live_streams: "i435mvmz60",
        wss_get_session_events: "6rlwky8rza",
      },
      "us-west-2": {
        rest: "t0drqkcmi6",
        wss_get_live_streams: "qn41fg6hkf",
        wss_get_session_events: "a1jwgj91d6",
      },
      "ap-south-1": JSON.parse(import.meta.env.VITE_AP_SOUTH_1_APIS),
      // {
      //   rest: "79gng5lgg3",
      //   wss_get_live_streams: "qb8941ky4h",
      //   wss_get_session_events: "m5vtb6pt78",
      // },
    },

    thumbStyle: {
      right: "0px",
      borderRadius: "7px",
      backgroundColor: "#ff6f00",
      width: "4px",
      opacity: 0.75,
    },

    initialPagination: {
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 100,
    },
  }),

  actions: {},
});
