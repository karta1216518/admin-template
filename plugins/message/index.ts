import Vue from "vue";
const MessageHandler = require("./Message.vue").default;

interface IMessageOption {
  message: string;
  type: string;
}

const MessageConstructor = Vue.extend(MessageHandler);

let nId = 0;

const Message = (options: IMessageOption) => {
  let id = "message-" + nId++;

  // 實例化一個帶有content內容的Notice
  const MessageInstance: any = new MessageConstructor({
    data: options
  });

  MessageInstance.id = id;
  MessageInstance.vm = MessageInstance.$mount(); // 掛載但是並未插入dom，是一個完整的Vue實例
  MessageInstance.vm.nId = nId;
  MessageInstance.vm.alive = true;

  MessageInstance.dom = MessageInstance.vm.$el;
  document.querySelector("#app")?.appendChild(MessageInstance.dom); // 將dom插入body
  return MessageInstance.vm;
};

["success", "warning", "info", "error"].forEach(type => {
  Vue.prototype[`$${type}Msg`] = (msg: string) => {
    const options = {
      message: msg,
      type: type,
      duration: 5000,
      top: "20px"
    };

    return Message(options);
  };
});
