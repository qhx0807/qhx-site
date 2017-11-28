<template>
  <div class="note">
    <Spin fix v-if="spinShow"></Spin>
    <Card :bordered="false">
      <Table :columns="columns" :data="tableData"></Table>
    </Card>
    <Modal v-model="preModal" width="800">
      <p slot="header" style="text-align:center">
        <span>{{preTitle}}</span>
      </p>
      <div v-html="htmlCode"></div>
      <div slot="footer">
        <Button type="ghost" @click="preModal=false">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'notes',
  data() {
    return {
      spinShow:true,
      preModal:false,
      htmlCode:'',
      preTitle:'',
      columns: [
        {
          title: 'TITLE',
          key: 'title'
        },
        {
          title: 'ARCHIVE',
          key: 'archive',
          width:100,
        },
        {
          title: 'TITLEIMG',
          key: 'titleImg',
           width:200,
          render: (h, params) => {
            return h('div', {
              
            },[
              h('img', {
                domProps: {
                  src: params.row.titleImg,
                },
                style:{
                  height:'35px',
                  borderRadius:'50%',
                  marginTop:'7px',
                  cursor:'pointer',
                  verticalAlign:'middle',
                },
                on:{
                  click: ()=>{
                    this.onClickImg(params.row.titleImg)
                  }
                }
              }),
              h('span', params.row.titleImg.split('com')[1])
            ])
          }
        },
        {
          title: 'WATCH',
          key: 'watch',
          width:80,
        },
        {
          title: 'LIKE',
          key: 'like',
          width:80,
        },
        {
          title: 'TAGS',
          key: 'tags'
        },
        {
          title: 'DATE',
          key: 'date',
          width:150
        },
        {
          title: '标题图',
          key: 'titleImg',
          width:215,
          render: (h, params) => {
            return h('div', {
              
            },[
              h('Button',{
                props: {
                  type: 'text',
                  size:'small'
                },
                on: {
                  click: () => {
                    this.onClickPre(params.row)
                  }
                }
              },'PREVIEW'),
              h('Button',{
                props: {
                  type: 'text',
                  size:'small'
                },
                on: {
                  click: () => {
                    this.onClickEdit(params.row)
                  }
                }
              },'EDIT'),
              h('Button',{
                props: {
                  type: 'text',
                  size:'small'
                },
                style:{
                  color:'#f60',
                },
                on: {
                  click: () => {
                    this.onClickDel(params.row)
                  }
                }
              },'DELETE'),
            ])
          }
        },
      ],
      tableData: [],
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      axios.get(API_URL + '/notes').then(function(response) {
        this.tableData = response.data.Data
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    onClickImg(path){
      this.$Modal.success({
          title: '',
          content: `<img style="max-height:300px;" src=${path} />`
      })
    },
    onClickPre(doc){
      this.htmlCode = doc.htmlvalue
      this.preTitle = doc.title
      this.preModal = true
    },
    onClickEdit(doc){
      
    },
    onClickDel(doc){
      this.$Modal.confirm({
        title:'Confirm',
        content:'delete this note',
        onOk:()=>{
          axios.delete(API_URL + '/notes?id=' + doc._id).then(function(response) {
            if (response.data.OK) {
              this.$Message.info("delete success!")
              this.getList()
            } else {
              this.$Message.info("error")
            }
          }.bind(this)).catch(function(error) {
            
          }.bind(this))
        },
      })
    },
  }
}
</script>

<style lang="less">
.note {
  padding: 6px;
  position: relative;
  .ivu-table-wrapper {
    border: none!important;
  }
  .ivu-table:before {
    height: 0;
  }
  .ivu-table:after {
    width: 0;
  }
}
</style>
