class Mentor {
  constructor(obj) {
    this.name = obj["Name"];
    this.location = obj["Location"];
    this.technical = obj["Technical"];
    this.tags = obj["Technical"].split(',').map(e => e.trim());
  }
}

export default Mentor;
