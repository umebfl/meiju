import {
    createAction,
    handleActions,
} from 'redux-actions'

// 1
export const MODULE_KEY = 'home'

// 2
const init_state = {
    loginSceneVisible: false,
}

const module_setter = createAction(`${MODULE_KEY}_setter`)

export const action = {

    // 3
    loginSceneModal: payload => (dispatch, get_state) => {
        const state = get_state()
        const module_state = state[MODULE_KEY]
        console.log('---=======------>',payload);
        dispatch(
            module_setter({
                loginSceneVisible: !module_state.loginSceneVisible
            }),
        )
    },

}

export default handleActions({
    [module_setter]: (state, {payload}) => ({
        ...state,
        ...payload,
    }),
}, init_state)
