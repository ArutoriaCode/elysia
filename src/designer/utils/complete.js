import { javascriptLanguage } from "@codemirror/lang-javascript";
export const ctxComplete = javascriptLanguage.data.of({
  autocomplete: function (context) {
    let word = context.matchBefore(/.*ctx\./);
    if (word && word.text.trim() === "ctx.") {
      return {
        from: word.to,
        options: [
          {
            label: "props",
            type: "variable",
            info: "组件属性"
          },
          {
            label: "emit",
            type: "function",
            info: "触发自定义事件"
          }
        ]
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

export default {
  ctxComplete
};
