<template>
  <div>
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
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="提示" :visible.sync="dialogVisible">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="能耗项" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="项目类型">
          <el-input v-model="form.itemtype"></el-input>
        </el-form-item>
        <el-form-item label="时间类型">
          <el-input v-model="form.timetype"></el-input>
        </el-form-item>
        <el-form-item label="能耗数">
          <el-input v-model="form.numbers"></el-input>
        </el-form-item>
        <el-form-item label="预警阙值">
          <el-input v-model="form.threshold"></el-input>
        </el-form-item>
        <el-form-item label="备注">
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
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "能耗项-1",
          itemtype: "项目类型-1",
          timetype: "时间类型-1",
          numbers: 123,
          threshold: 345
        },
        {
          id: "2",
          name: "能耗项-2",
          itemtype: "项目类型-2",
          timetype: "时间类型-2",
          numbers: 4444,
          threshold: 5555
        }
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
      rules: {
        name: [{ required: true, message: "请输入能耗项", trigger: "blur" }]
      },
      dialogVisible: false
    };
  },
  methods: {
    // 编辑表格行
    edit(row) {
      // 填充内容到表单
      this.form = {
        id: "",
        name: "",
        itemtype: "",
        timetype: "",
        numbers: "",
        threshold: "",
        remark: "",
        // 填充 row 部分内容
        ...row
      };

      // 打开对话框
      this.dialogVisible = true;
    },
    // 提交表单
    onSubmit() {
      // 校验表单项
      this.$refs.form.validate(valid => {
        // 如果校验通过
        if (valid) {
          // TODO: 提交表单到后端
          alert("submit!");
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
