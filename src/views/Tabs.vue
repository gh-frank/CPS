<template>
  <div>
    <div :style="{ marginBottom: '16px' }">
      <a-button @click="add">增加</a-button>
    </div>
    <a-tabs hideAdd v-model="activeKey" type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
        {{pane.content}}
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      const panes = [
        { title: '标签1', content: '标签页1内容', key: '1' },
        { title: '标签2', content: '标签页2内容', key: '2' },
      ];
      return {
        activeKey: panes[0].key,
        panes,
        newTabIndex: 0,
      };
    },
    methods: {
      callback(key) {
        console.log(key);
      },
      onEdit(targetKey, action) {
        this[action](targetKey);
      },
      add() {
        const panes = this.panes;
        const activeKey = `新标签${this.newTabIndex++}`;
        panes.push({
          title: `新增 ${activeKey}`,
          content: `新标签页内容 ${activeKey}`,
          key: activeKey,
        });
        this.panes = panes;
        this.activeKey = activeKey;
      },
      remove(targetKey) {
        let activeKey = this.activeKey;
        let lastIndex;
        this.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.panes = panes;
        this.activeKey = activeKey;
      },
    },
  };
</script>
