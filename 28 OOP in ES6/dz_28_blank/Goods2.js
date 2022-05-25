class Goods2 extends Goods {
   constructor(block, name, amount, image, count, sale = true) {
      super(block, name, amount, image, count);
      this.sale = sale; // new proper
   }
   draw() {
      document.querySelector(this.block).innerHTML = `${this.name} ${this.amount} <span class="material-icons">${this.image}</span> ${this.count} ${this.sale}`;
   }
}