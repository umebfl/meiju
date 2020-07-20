import {
    createAction,
    handleActions,
} from 'redux-actions'

// 1
export const MODULE_KEY = 'mine'

// 2
const init_state = {
    isLogin: true,
}

const module_setter = createAction(`${MODULE_KEY}_setter`)

export const action = {

    // 3
    login: payload => (dispatch, get_state) => {
        const state = get_state()
        const module_state = state[MODULE_KEY]
        dispatch(
            module_setter({
                isLogin: !module_state.isLogin
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
