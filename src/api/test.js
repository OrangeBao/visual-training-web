import Vue from 'vue'

export const getTest = () => Vue.axios.get('/api/test')
