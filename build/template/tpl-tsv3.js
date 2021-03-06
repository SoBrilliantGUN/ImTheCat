module.exports.default = (pascalName) => `// https://composition-api.vuejs.org/zh/api.html
import { defineComponent } from '@vue/composition-api';
/**
 * ref fucntion
 * @function ref: Ref<T[K]>
 * @function isRef: Ref<T[K]>
 * @function unref: Ref<T[K]>
 * @function toRefs: Ref<T[K]>
 *
 * reactive function
 * @function reactive: UnwrapRef<T>
 * @function isReadonly: boolean
 * @function isReactive: boolean
 *
 * watchEffect function
 * @function watchEffect WatchStopHandle
 * @function watch WatchStopHandle
 *
 * computed
 * @function computed: <ComputedRef | WritableComputedRef>
 *
 * lifecycle functiion
 * @function onBeforeMount
 * @function onMounted
 * @function onBeforeUpdate
 * @function onUpdated
 * @function onBeforeUnmount
 * @function onUnmounted
 * @function onErrorCaptured
 * @function onActivated
 * @function onDeactivated
 * @function onServerPrefetch
 *
 * provide/inject
 * @function provide
 * @function inject
 */

// defineComponent 能够对 TypeScript 更好的类型推导
export default defineComponent({
  name: '${pascalName}',
  // components: {},
  // props: {},

  // setup 中不再有 this，取而代之的是 context
  // https://composition-api.vuejs.org/zh/api.html#setup
  setup (props, context) {
    const msg = '你好';
  }
});`;