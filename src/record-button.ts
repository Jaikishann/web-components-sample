class RecordButton extends HTMLElement {
  constructor(config) {
    super();
    console.log(config);
    this.innerHTML = `<button>Create Recording</button>`;
  }
}

export default RecordButton;