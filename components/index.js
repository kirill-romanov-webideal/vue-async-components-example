const comp1 = () => import(/* webpackChunkName: "comp1" */'./comp1.vue')
const comp2 = () => import(/* webpackChunkName: "comp2" */'./comp2.vue')
const comp3 = () => import(/* webpackChunkName: "comp3" */'./comp3.vue')

export default {
    comp1,
    comp2,
    comp3
}