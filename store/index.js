export const state = () => ({
    carro: []
})

export const mutations = {
    setCarro(state, value){
        state.carro = value
    }
}

export const getters = {
    getCarro(state){
        return state.carro
    }
}