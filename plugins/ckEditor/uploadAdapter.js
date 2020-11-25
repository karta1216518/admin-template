import eventBus from "~/utils/eventBus";

const DNS_URL = process.env.API_URL + "/";
const UPDATE_PIC_API = "UPDATE_PIC_API"; // 圖片上傳 API

class UploadAdapter {
  constructor(event = "uploadRes", loader) {
    this.loader = loader;
    this.event = event;
    this.url = DNS_URL + UPDATE_PIC_API;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(uploadedFile => {
      return new Promise((resolve, reject) => {
        this._initRequest();
        this._initListeners(resolve, reject);
        this._sendRequest(uploadedFile);
      });
    });
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest() {
    console.log("initRequest");

    const xhr = (this.xhr = new XMLHttpRequest());
    xhr.open("POST", this.url, true);
    // xhr.setRequestHeader("token", window.$nuxt.$store.state.userStore.token);
    xhr.responseType = "json";
    eventBus.$emit("addImage");
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject) {
    const xhr = this.xhr;
    const loader = this.loader;
    const errorText = "上傳檔案錯誤，請檢查路徑"
    console.log(loader.file);

    xhr.addEventListener("error", () => reject());
    xhr.addEventListener("abort", () => reject());
    xhr.addEventListener("load", () => {
      const response = xhr.response;
      eventBus.$emit(this.event, response);

      // Your integration may handle upload errors in a different way so make sure
      // it is done properly. The reject() function must be called when the upload fails.
      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : errorText
        );
      }
      resolve({
        default: DNS_URL + response.data.url
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener("progress", evt => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    // Prepare the form data.

    const data = new FormData();
    data.append("file", file);
    data.append("type", "1");

    // Send the request.
    this.xhr.send(data);
  }
}

function _UploadAdapterPlugin(editor, event = "uploadRes") {
  editor.plugins.get("FileRepository").createUploadAdapter = loader => {
    // Configure the URL to the upload script in your back-end here!
    return new UploadAdapter(event, loader);
  };
}

export const editorConfig = {
  language: "zh",
  extraPlugins: [_UploadAdapterPlugin],
  removePlugins: ["ImageStyle", "ImageToolbar", "ImageTextAlternative"]
};

export const sampleEditorConfig = {
  language: "zh",
  removePlugins: [
    "ImageCaption",
    "ImageStyle",
    "ImageTextAlternative",
    "ImageToolbar",
    "ImageUpload",
    "MediaEmbed"
  ]
};
