import {
    combineReducers,
} from 'redux'

// 导入模块的reducer
import mine from '#/src/mine/reducer'
import home from '#/src/home/reducer'
import login from '#/src/login/reducer'

const app_reducer = combineReducers({
    mine,
    home,
    login,
})

const root_reducer = (state, action) => {
    return app_reducer(state, action)
}

export default root_reducer
