<template>
  <div class="page"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Getter } from 'vuex-class'
import { Survey } from '../store/type'
@Component
export default class More extends Vue {
  @State('surveys', { namespace: 'user' }) surveys!: Survey[]
  @Getter('phone') userPhone!: string
  mounted() {
    console.log(this.userPhone, this.surveys)
  }
}
</script>
