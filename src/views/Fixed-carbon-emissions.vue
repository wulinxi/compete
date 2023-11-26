<template>
  <div>
    <el-form :model="searchForm" ref="searchForm" inline>
      <el-form-item label="能耗项" prop="energyItem">
        <el-input v-model="searchForm.energyItem"></el-input>
      </el-form-item>
      <el-form-item label="项目类型" prop="projectType">
        <el-input v-model="searchForm.projectType"></el-input>
      </el-form-item>
      <el-form-item label="时间类型" prop="timeType">
        <el-input v-model="searchForm.timeType"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        <el-button @click="handleReset">重置</el-button>

        <el-button type="primary" @click="create()">新建</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="能耗项"></el-table-column>
      <el-table-column prop="itemtype" label="项目类型"></el-table-column>
      <el-table-column prop="timetype" label="时间类型"></el-table-column>
      <el-table-column prop="numbers" label="能耗数"></el-table-column>
      <el-table-column prop="threshold" label="预警阙值"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改 -->
    <el-dialog :title="title" :visible.sync="dialogVisible">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="能耗项" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="项目类型" prop="itemtype">
          <el-input v-model="form.itemtype"></el-input>
        </el-form-item>
        <el-form-item label="时间类型" prop="timetype">
          <el-input v-model="form.timetype"></el-input>
        </el-form-item>
        <el-form-item label="能耗数" prop="numbers">
          <el-input v-model="form.numbers"></el-input>
        </el-form-item>
        <el-form-item label="预警阙值" prop="threshold">
          <el-input v-model="form.threshold"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchForm: {
        energyItem: "",
        projectType: "",
        timeType: ""
      },
      tableData: [
        // {
        //   id: "1",
        //   name: "能耗项-1",
        //   itemtype: "项目类型-1",
        //   timetype: "时间类型-1",
        //   numbers: 123,
        //   threshold: 345
        // },
        // {
        //   id: "2",
        //   name: "能耗项-2",
        //   itemtype: "项目类型-2",
        //   timetype: "时间类型-2",
        //   numbers: 4444,
        //   threshold: 5555
        // }
      ],
      form: {
        id: "",
        name: "",
        itemtype: "",
        timetype: "",
        numbers: "",
        threshold: "",
        remark: ""
      },
      //声明空值
      title: "",
      rules: {
        name: [{ required: true, message: "请输入能耗项", trigger: "blur" }]
      },
      dialogVisible: false
    };
  },
  methods: {
    del(row) {
      //传输到后台
      axios.delete(`/api/items/${row}`).then(res => {
        this.DelDataForm();
      });
      // this.$axios.get('',{id:row.id})
    },
    DelDataForm(){
axios.get('../api/del',{
  delete:this.row
}).then(res=>{
  //这不会
})
    },
    handleSearch() {
      axios
        .get("....../api.search", { search: this.searchForm })
        .then(response => {
          // console.log(this.searchForm);
          this.tableData = response.data;
        })
        .catch(error => {
          console.error("Error during search", error);
        });
    },
    handleReset() {
      this.$refs.searchForm.resetFields(); // 重置表单
    },
    create() {
      this.title = "添加固定碳排放";
      this.dialogVisible = true;
      // *确保挂载*
      this.$nextTick(() => {
        this.resetForm();
      });
    },
    // 编辑表格行
    edit(row) {
      this.title = "编辑";
      // 打开对话框
      this.dialogVisible = true;

      // 使用 nextTick 确保对话框和表单已挂载
      this.$nextTick(() => {
        // 重置表单到空值
        this.resetForm();

        // 填充内容到表单
        // 主要用于对象合并，将源对象中的属性复制到目标对象中，他将返回目标对象
        Object.assign(this.form, row);
      });
    },
    // 提交表单
    onSubmit() {
      // 校验表单项
      this.$refs.form.validate(valid => {
        // 如果校验通过
        if (valid) {
          axios
            .get("....../api.modify", {
              modify: this.form
            })
            .then(res => {
              //根据后端返回数据进行判断如果成功
              alert("修改成功");
            }) //如果返回失败
            .catch(error => {
              console.error("Error during modify", error);
            });
          // TODO: 提交表单到后端

          // 关闭对话框
          this.dialogVisible = false;
        }
      });
    },
    // 重置表单
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
