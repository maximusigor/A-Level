// Ларек 'Балдежник'

function createStore(reducer) {
    return {
        getState,
        dispatch,
        subscribe
    }
}

function reducer(state, {type, ШО, СКОКА, БАБЛО}) {
    if(!state) {
        return {
            пиво: 100,
            чипсы: 100,
            сиги: 100
        }
    }

    if(type === 'КУПИТЬ') {
        return {
            ...state,
            [ШО]: state[ШО] - СКОКА
        }
    }
    return state;

    let larek = document.createElement('div');
    larek.style.fontSize = '100vh';
    document.body.append(larek);
}

reducer(state, {'КУПИТЬ', пиво,6});