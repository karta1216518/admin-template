export class Picture {
  constructor(id = "", url = "", minUrl = "") {
    this.id = id;
    this.url = url;
    this.minUrl = minUrl;
  }

  id?: string;
  url?: string;
  minUrl?: string;
}
