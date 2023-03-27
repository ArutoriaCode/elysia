import { javascriptLanguage } from "@codemirror/lang-javascript";
import { seletedSchema } from "../core/select";

const autoCompleteStr = ["ctx.", "return ctx."];
export const ctxComplete = javascriptLanguage.data.of({
  autocomplete: function (context) {
    let word = context.matchBefore(/.*ctx\./);
    if (word && autoCompleteStr.includes(word.text.trim())) {
      let hintOptions = [
        {
          label: "props",
          type: "variable",
          detail: "组件属性"
        },
        {
          label: "refs",
          type: "variable",
          detail: "表单引用对象"
        },
        {
          label: "emit",
          type: "function",
          detail: "触发自定义事件"
        },
        {
          label: "axios",
          type: "variable",
          info: "具体查看axios文档：https://axios-http.com/zh/docs/intro"
        },
        {
          label: "$formData.value",
          type: "variable",
          info: "表单数据 注意使用$formData.value来操作"
        },
        {
          label: "$rules.value",
          type: "variable",
          info: "表单校验规则 注意使用$rules.value来操作"
        }
      ];

      const { options } = seletedSchema.value;
      if (options && options.formRefName) {
        hintOptions = [
          ...hintOptions,
          {
            label: `refs.${options.formRefName}`,
            type: "variable",
            detail: "表单实例对象"
          },
          {
            label: `refs.${options.formRefName}.validate`,
            type: "function",
            detail: "触发表单验证, 同 validateFields"
          },
          {
            label: `refs.${options.formRefName}.validateFields`,
            type: "function",
            detail: "触发表单验证"
          },
          {
            label: `refs.${options.formRefName}.clearValidate`,
            type: "function",
            info: "移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组，如不传则移除整个表单的校验结果"
          },
          {
            label: `refs.${options.formRefName}.scrollToField`,
            type: "function",
            detail: "滚动到对应字段位置"
          },
          {
            label: `refs.${options.formRefName}.resetFields`,
            type: "function",
            info: "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果"
          }
        ];
      }

      return {
        from: word.to,
        options: hintOptions
      };
    }

    word = context.matchBefore(/[c|t|x]/);
    if (!word) {
      return null;
    }

    if (word.from == word.to) {
      return null;
    }

    return {
      from: word.from,
      options: [
        {
          label: "ctx",
          type: "variable",
          detail: "组件上下文实例"
        }
      ]
    };
  }
});

export const propComplete = prop => {
  return javascriptLanguage.data.of({
    autocomplete: function (context) {
      const completes = seletedSchema.value["x-autocomplete"];
      if (!completes) {
        return null;
      }

      const completeList = completes[prop];
      if (!Array.isArray(completeList)) {
        return null;
      }

      let word = context.matchBefore(/.*?/);
      if (!word) {
        return null;
      }

      word.text = word.text.trim();

      const options = completeList
        .filter(a => word.text.includes(a.label) || a.label.includes(word.text))
        .map(a => ({
          ...a,
          label: a.label,
          type: "variable"
        }));

      return {
        from: word.from,
        options
      };
    }
  });
};

export default {
  ctxComplete
};
