import { Vue, Prop, Component, Emit } from 'vue-property-decorator'
@Component
export class EditMixin extends Vue {
  @Prop({ default: false }) readonly visible!: boolean
  get popupStyle() {
    return {
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#F3F5F9',
    }
  }
  @Emit('on-back')
  handleBack() {}
}