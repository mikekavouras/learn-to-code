function Person(name) {
  this.name = name || "Sam";
  this.age = Math.floor((Math.random() * 10) + 15);
  this.height = Math.floor((Math.random() * 12) + 60);
}
