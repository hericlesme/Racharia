<template>
    <el-steps :active="active" finish-status="success">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
    </el-steps>
</template>

<script>
export default {
  props: {
    active: 0
  },

  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
