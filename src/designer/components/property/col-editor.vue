<template>
  <a-divider>栅格属性设置</a-divider>
  <a-form-item
    v-for="(col, index) in childrenList"
    :key="col.id"
    :label="colAlias + (index + 1)"
  >
    <a-input-number
      style="width: calc(100% - 90px)"
      :precision="0"
      :min="0"
      :max="24"
      v-model:value="col.options.span"
      @blur="onCustomRecord(col)"
    >
    </a-input-number>
    <a-button danger style="margin-left: 6px" @click="onDeleteCol(index)">
      <template #icon>
        <delete-filled />
      </template>
      删除
    </a-button>
  </a-form-item>
  <a-button block @click="onAddCol" class="property-edit-btn">
    <template #icon>
      <plus-square-filled />
    </template>
    添加{{ colAlias }}
  </a-button>
</template>
<script setup>
import usePropEditorModel from '~property/hooks/usePropEditorModel.js'
import useAlias from '../../hooks/useAlias'
import recorder from '~core/recorder'
import { DeleteFilled, PlusSquareFilled } from '@ant-design/icons-vue'
import { seletedSchema } from '@/designer/core/select.js'
import { find } from '~core/find'
import { colSchema } from '~core/schema/containers.js'
import { cloneSchema } from '~core/clone'
import { PANEL_COMPONENT } from '../../utils/helper'
import { toRef } from 'vue'
import { COMMON_KEY_NAME } from '@/designer/utils/helper.js'

const colAlias = useAlias([PANEL_COMPONENT, 'col'])
const widget = find(seletedSchema.value.path)
const childrenList = toRef(widget, 'childrenList')

const { propertyCN } = usePropEditorModel()

const recordOldSpan = () => {
  return childrenList.value.reduce((maps, v) => {
    maps[v.id] = v.options.span
    return maps
  }, {})
}

let oldSpans = recordOldSpan()

const onDeleteCol = deleteIndex => {
  widget.childrenList.splice(deleteIndex, 1)
  oldSpans = recordOldSpan()
  recorder.add(
    `${propertyCN}组件[${colAlias + (deleteIndex + 1)}]被删除`,
    DeleteFilled
  )
}

const onAddCol = () => {
  widget.childrenList.push(cloneSchema(colSchema))
  oldSpans = recordOldSpan()
  recorder.add(
    `${propertyCN}组件增加一列[${colAlias + (deleteIndex + 1)}]`,
    'history-add-icon'
  )
}

const spanAlias = useAlias([COMMON_KEY_NAME, 'span'])
const onCustomRecord = col => {
  const oldSpan = oldSpans[col.id]
  const newSpan = col.options.span
  if (newSpan > 24 || newSpan < 0) {
    return
  }

  if (oldSpan === col.options.span) {
    return
  }

  recorder.add(`${col.nameAlias}组件[${spanAlias}]被修改`)
  oldSpans[col.id] = col.options.span
}
</script>
