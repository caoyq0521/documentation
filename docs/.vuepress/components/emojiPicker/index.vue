<template>
  <div class="emoji-picker">
    <div v-if="showSearch" class="search-area">
      <el-input
        class="search-input"
        v-model.trim="search"
        prefix-icon="el-icon-search"
        placeholder="搜索表情符号"
      ></el-input>
    </div>
    <div class="emoji-area">
      <div class="emoji-list" :style="gridDynamic">
        <template v-for="(emoji, emojiName) in dataFiltered">
          <span
            class="emoji"
            :key="emojiName"
            :style="styleSize"
            @click="handleSelectEmoji(emoji, emojiName)"
          >{{ emoji }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import emojiData from './emoji';
export default {
  name: 'EmojiPicker',
  props: {
    emojisByRow: {
      type: Number,
      default: 5
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    emojiSize: {
      type: Number,
      default: 32
    }
  },
  data () {
    return {
      search: '',
      emojiData
    }
  },
  computed: {
    gridDynamic () {
      const percent = 100 / this.emojisByRow;
      return {
        gridTemplateColumns: `repeat(${this.emojisByRow}, ${percent}%)`
      };
    },
    styleSize () {
      return {
        fontSize: `${this.emojiSize - 5}px`,
        lineHeight: `${this.emojiSize}px`,
        height: `${this.emojiSize}px`,
        width: `${this.emojiSize}px`
      };
    },
    dataFiltered () {
      let _data = {}
      const searchValue = this.search.toLowerCase();
      if (searchValue) _data = this.handleEmojiSearch(searchValue);
      else _data = Object.assign({}, this.emojiData);
      return _data;
    }
  },
  methods: {
    handleSelectEmoji (emoji, aliase) {
      this.$emit('select', {
        data: emoji,
        aliase
      });
    },
    handleEmojiSearch (searchValue) {
      const _data = {};
      for (const [emojiName, emoji] of Object.entries(this.emojiData)) {
        if (emojiName.includes(searchValue)) {
          _data[emojiName] = emoji;
        }
      }
      return _data;
    }
  }
}
</script>

<style lang="scss" scoped>
.emoji-picker {
  display: flex;
  flex-direction: column;
  width: 325px;
  height: 425px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background-color: #eeeeee;
  .search-area {
    padding: 5px 16px 0;
    margin-bottom: 4px;
      /deep/.search-input {
      .el-input__inner {
        border-radius: 6px;
        background-color: #f5f5f5;
      }
    }
  }
  .emoji-area {
    flex: 1;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      border-radius: 4px;
      width: 4px;
      overflow: hidden;
    }
    .emoji-list {
      display: grid;
      margin: 5px 0;
      justify-items: center;
      grid-template-columns: repeat(5, 20%);
      .emoji {
        display: inline-block;
        text-align: center;
        padding: 3px;
        box-sizing: content-box;
        overflow: hidden;
        transition: transform .2s;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
          background: #00000010;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
