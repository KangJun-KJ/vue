import { useStore } from 'vuex'

export default {
    setup() {
        const { state, getters, commit, dispatch } = useStore()

        return {
            state
        }
    }
}