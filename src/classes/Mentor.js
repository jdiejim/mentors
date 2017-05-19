class Mentor {
  constructor(obj) {
    this.name = obj["Name"];
    this.slack = obj["Slack"];
    this.email = obj["Email"];
    this.preferred = obj["Preferred"];
    this.location = obj["Location"];
    this.technical = obj["Technical"];
    this.availability = obj["Availability"];
    this.tags = obj["Technical"].split(',').map(e => e.trim());
  }
}

export default Mentor;
