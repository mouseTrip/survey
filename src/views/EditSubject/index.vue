<template>
  <div class="page">
    <van-form>
      <CommonSection title="标题">
        <van-field
          v-model="title"
          :rules="[{ required: true, message: '请填写问卷标题' }]"
        />
      </CommonSection>
      <CommonSection v-if="isOptionSubject">
        <van-cell
          v-for="(option, index) in form.option"
          :key="`option_${index}`"
          icon-prefix="ri"
          icon="indeterminate-circle-line"
          center
        >
          <template #icon>
            <van-icon
              class-prefix="ri"
              name="indeterminate-circle-line"
              color="#de4337"
              size="20"
            />
          </template>
          <van-field v-model="form.options[index]" />
          <template #right-icon>
            <van-icon
              class-prefix="ri"
              name="menu-line"
              color="#a9a9a9"
              size="20"
            />
          </template>
        </van-cell>
      </CommonSection>
      <CommonSection title="设置">
        <van-cell center title="题型切换" :value="typeName" is-link />
        <van-cell center title="题目必答">
          <template #right-icon>
            <van-switch v-model="form.isRequired" size="24" />
          </template>
        </van-cell>
        <template v-for="config in settingConfig">
          <van-cell
            v-if="config === 'randomOpt'"
            :key="config"
            center
            title="选项随机"
          >
            <template #right-icon>
              <van-switch v-model="form.randomOpt" size="24" />
            </template>
          </van-cell>
          <van-cell
            v-else-if="config === 'showResult'"
            :key="config"
            center
            title="显示结果(投票专用)"
          >
            <template #right-icon>
              <van-switch v-model="form.showResult" size="24" />
            </template>
          </van-cell>
          <van-cell
            v-else-if="config === 'limit'"
            :key="config"
            center
            title="最多可选"
          >
            <template #right-icon>
              <van-switch v-model="form.showResult" size="24" />
            </template>
          </van-cell>
          <van-cell
            v-else-if="config === 'scaleType'"
            :key="config"
            center
            title="量表类型"
            :value="scaleTypeName"
            is-link
          />
          <van-cell
            v-else-if="config === 'scaleType'"
            :key="config"
            center
            title="量表范围"
            :value="form.range"
            is-link
          />
          <van-cell
            v-else-if="config === 'validate'"
            :key="config"
            center
            title="文本验证"
            :value="form.validate"
            is-link
          />
          <van-cell
            v-else-if="config === 'limitRow'"
            :key="config"
            center
            title="输入框行数"
            :value="form.limitRow"
            is-link
          />
          <template v-else></template>
        </template>
      </CommonSection>
    </van-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import CommonSection from '@/components/CommonSection.vue'
import { SubjectTypes } from '@/store/type'
import settingConfig from './config'
@Component({
  components: {
    [CommonSection.name]: CommonSection,
  },
})
export default class EditSubject extends Vue {
  @Prop({ required: true }) readonly type!: SubjectTypes
  private form = {
    type: '',
    title: '',
    isRequired: true,
    randomOpt: false,
    limit: Infinity,
    showResult: false,
    scaleType: 'satisfaction',
    range: 5,
    limitRow: 5,
    validate: /[\s\S]+/g,
    options: [],
  }
  get settingConfig() {
    return settingConfig[this.type]
  }
  get typeName() {
    const nameMap: { [key in SubjectTypes]: string } = {
      single: '单选题',
      multiple: '多选题',
      select: '下拉题',
      scale: '量表题',
      input: '单行文本题',
      textarea: '多行文本题',
      description: '文本描述',
      sort: '排序题',
      annex: '附件题',
    }
    return nameMap[this.type]
  }
  get scaleTypeName() {
    const nameMap: { [key: string]: string } = {
      satisfaction: '满意',
      agreement: '认可',
      importance: '重要',
      wish: '愿意',
      match: '符合',
    }
    return nameMap[this.form.scaleType]
  }
  get validateTypeName() {
    // const regMap = new Map<RegExp, string>([
    //   [/\s\S/g, '不限'],
    //   [/\d+/g, '数字'],
    //   [/[1-2][0-9][0-9][0-9]-/, ''],
    // ])
    return this.form.validate
  }
  get isOptionSubject() {
    return ['single', 'multiple', 'select', 'sort'].includes(this.type)
  }
}
</script>

<style lang="scss" scoped></style>
