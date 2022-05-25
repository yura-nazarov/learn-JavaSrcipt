class Goods {
   constructor(block, name, amount, image, count) {
      this.block = block;
      this.name = name;
      this.amount = amount;
      this.image = image;
      this.count = count;
   }
   draw() {
      document.querySelector(this.block).innerHTML += `${this.name} ${this.amount} <span class="material-icons">${this.image}</span> ${this.count}`;
   }
}