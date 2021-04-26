<template>
  <div class="container">
    <!-- function 盒子 -->
    <div class="fn-container">
      <div class="msg">
        由原数组中的每一项的id作为key,本身作为value形成对象结构
      </div>
      <div class="mapContainer">
        <div v-for="(value, key, index) in mapList" :key="index" class="mapBox">
          <span
            class="map-key"
            :class="{
              active: curIndex !== -1 && key == listRef[curIndex].pid,
            }"
            >{{ key }}
          </span>
          <span class="map-value">
            <pre><code class="language-javascript">{{ value }}</code></pre>
          </span>
        </div>
      </div>
      <div class="msg">
        遍历原数组使用每一项中的pid去map对象中寻找自己的父节点(pid === id)
      </div>
      <div class="mapContainer">
        <div
          v-for="(item, index) in listRef"
          :key="index"
          class="mapBox"
          :class="{ active: curIndex === index }"
        >
          <span class="map-value">
            <pre><code class="language-javascript">{{ item }}</code></pre>
          </span>
        </div>
      </div>
    </div>

    <div class="operate-container">
      <div class="msg">处理过后的树形数组</div>
      <div class="treeList-box">
        <pre><code class="language-javascript">{{ targetListRef  }}</code></pre>
      </div>
      <div class="msg">处理过后的树形数组(先寻找根据寻找结果处理不同逻辑)</div>
      <div class="btn-box">
        <button @click="each" :disabled="isOver">寻找父节点</button>
        <button @click="run" :disabled="isOver">节点添加</button>
      </div>
      <div class="tip" v-if="isOver">恭喜,已全部处理完毕,树形结构已生成~</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
let soureData = [
  {
    id: 1,
    pid: null,
    children: []
  },
  {
    id: 2,
    pid: 1,
    children: []
  },
  {
    id: 3,
    pid: 2,
    children: []
  }
]
// 源数组
const listRef = ref(soureData)
// 产出的数组
const targetListRef = ref([])
// 形成map结构
const mapList = computed(() => {
  const _mapList = {}
  listRef.value.forEach(item => {
    _mapList[item.id] = item
  })
  return _mapList
})

// 循环演示函数
const stepFn = ref([])
let curIndex = ref(-1) // 当前循环下标 每执行一次 更改下标 体现当前的pid 和匹配到的map中项目
listRef.value.forEach(item => {
  stepFn.value.push(() => {
    let cur = mapList.value[item.pid]
    if (cur) {
      mapList.value[item.pid].children.push(item)
    } else {
      targetListRef.value.push(item)
    }
  })
})

const each = () => {
  curIndex.value++
}

const isOver = ref(false)
const run = () => {
  console.log()
  stepFn.value[curIndex.value]()
  if (curIndex.value === listRef.value.length - 1) {
    isOver.value = true
  }
}


</script>


<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
}
.fn-container {
  flex: 1;
  border-right: 1px solid #ccc;
}
.operate-container {
  flex: 1;
}
.sourceDataList {
  display: flex;
}
.mapContainer {
  padding: 20px;
  display: flex;
  .mapBox {
    margin-bottom: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
    &.active {
      border-width: 2px;
      border-color: sienna;
    }
    .map-key {
      padding: 5px;
      margin-right: 20px;
      text-align: center;
      border: 1px solid #ccc;
      &.active {
        border-width: 2px;
        border-color: sienna;
      }
    }
    .map-value {
      padding: 10px;
      border: 1px solid #ccc;
    }
  }
}
.operate-container {
  .treeList-box {
    padding: 20px;
  }
  .btn-box {
    padding: 20px;
    button {
      margin-right: 20px;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      outline: none;
    }
  }
  .tip{
    padding:20px;
    color:#e6a23c;
  }
}
.msg {
  padding: 10px 0;
  padding-left: 14px;
  background-color: rgb(247, 247, 247);
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
}
</style>


