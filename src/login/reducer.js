import {
    createAction,
    handleActions,
} from 'redux-actions'

// 1
export const MODULE_KEY = 'login'

// 2
const init_state = {

}

const module_setter = createAction(`${MODULE_KEY}_setter`)

export const action = {

    // 3
    edit: payload => (dispatch, get_state) => {
        const state = get_state()
        const module_state = state[MODULE_KEY]

        dispatch(
            module_setter({

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
