<template>
  <div class="publish">
    <Row>
      <Col span="19">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="" label="文章标题" :label-width="80">
            <Input type="text" v-model="formInline.user">
            </Input>
          </FormItem>
        </Form>
        <mavon-editor :ishljs="true" @change="onInputMd" :value="value" code-style="code-hybrid" style="height: 600px"></mavon-editor>
      </Col>
      <Col span="5" style="padding-left:10px;">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="image"></Icon>
          图片
        </p>
        <div class="head-img">
          
        </div>
      </Card>
      <Card :bordered="false" style="margin-top:12px;">
        <p slot="title">
          <Icon type="ios-pricetags-outline"></Icon>
          标签
        </p>
        <div>
          html
        </div>
      </Card>
      <Card :bordered="false" style="margin-top:12px;">
        <p slot="title">
          <Icon type="ios-folder-outline"></Icon>
          归档
        </p>
        <div>
          <Select v-model="archive">
              <Option v-for="item in archData" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'publish',
  data() {
    return {
      value: '',
      htmlCode: '',
      formInline:{},
      ruleInline:{},
      archive:'',
      archData:[],
    }
  },
  components: {
    mavonEditor
  },
  created() {

  },
  methods: {
    onInputMd(val, render) {
      this.htmlCode = render
    },
  }
}
</script>

<style lang="less" scoped>
.publish {
  padding: 6px;
  height: 580px;
  .v-note-wrapper {
    z-index: 99;
  }
  .head-img{
    height: 100px;
  }
}
</style>
