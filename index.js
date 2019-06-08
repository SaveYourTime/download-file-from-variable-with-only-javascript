/*
  data could be one of MIME type
  https://www.iana.org/assignments/media-types/media-types.xhtml
*/

class Download {
  constructor(name, data, mimeType) {
    this.name = name;
    this.data = data;
    this.mimeType = mimeType;
    this.hiddenElement = document.createElement('a');
    this.download();
  }
  download() {
    const downloadLink = `data:${mimeType}, ${encodeURI(this.data)}`;
    this.hiddenElement.href = downloadLink;
    this.hiddenElement.target = '_blank';
    this.hiddenElement.download = this.name;
    this.hiddenElement.click();
  }
}

const data = JSON.stringify({ name: "Aaron", age: 22 });
const mimeType = 'application/json';

function download() {
  new Download('myFile.json', data, mimeType);
}

document.querySelector('#downloadButton').addEventListener('click', download);

//download();