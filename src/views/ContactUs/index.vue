<template>
  <div class="contact-us-container">
    {{ msg }} {{ name }}
  </div>
</template>

<script lang="ts">
// https://github.com/kaorun343/vue-property-decorator
// https://github.com/vuejs/vue-class-component
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
// import * as h from './index';

@Component
export default class ContactUs extends Vue {

  // data
  name = 'ContactUs';
  msg = '你好';

  @Prop(Number) readonly propA: number | undefined;

  @Watch('propA')
  onChildChanged (val: number, oldVal: number) {
    console.log(`newValue: ${val}, oldValue: ${oldVal}`);
  }

  // created
  created () {
    console.log('this is created');
  }
  // mounted
  mounted () {
    console.log('this is mounted');
  }

  // methods
  helloWorld () {
    return 'Hello World';
  }

  // computed
  get helloContactUs () {
    return this.msg + 'ContactUs';
  }

  @Emit()
  returnValue () {
    return 'ContactUs';
  }
}
</script>

<style lang="scss">
  @import url('index.scss');
</style>
