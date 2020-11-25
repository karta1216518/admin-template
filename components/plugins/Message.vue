<template>
  <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <div class="el-message" :style="positionStyle" v-show="visible">
      <slot>
        <p>{{ message }}</p>
      </slot>
    </div>
  </transition>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      visible: false,
      message: "",
      duration: 3000,
      onClose: null,
      closed: false,
      verticalOffset: 20,
      timer: null
    };
  },
  computed: {
    positionStyle() {
      // 控制當前組件的顯示位置
      return {
        top: `${this.verticalOffset}px`
      };
    }
  },
  watch: {
    // 監聽closed的變化，設置為true時，將組件銷毀
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    // transition組件的鉤子,觸發after-leave時執行
    handleAfterLeave() {
      this.el.parentNode.removeChild(this.$el); // 将组件的DOM移除
    },
    close() {
      this.closed = true; // 組件隱藏

      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    // 每次手動啟動編譯之後 設置其展示時間duration之後關閉
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>

<style>
.el-message {
  min-width: 280px;
  height: 42px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
</style>
