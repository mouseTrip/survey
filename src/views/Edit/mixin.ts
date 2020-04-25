/*
 * @Author: Terry Zhang
 * @Date: 2020-04-20 22:39:22
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-04-25 10:17:27
 * @Description: 编辑模块mixin
 */
import { Vue, Prop, Component, Emit } from 'vue-property-decorator'
@Component
export class EditMixin extends Vue {
  @Emit('on-back')
  handleBack() {}
}