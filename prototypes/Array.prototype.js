Array.prototype.has = function(index) {
  if (index >= this.length) return false;
  if (index < 0 && this.length + index < 0) return false;
  return true;
};

Array.prototype.get = function(index) {
  return this[index < 0 ? this.length + index : index];
};

Array.prototype.set = function(index, value) {
  if (this.has(index)) {
    this[index < 0 ? this.length + index : index] = value;
    return true;
  }
  return false;
};

Array.prototype.unique = function() {
  return [ ...new Set(this) ];
};

Array.prototype.getRandom = function() {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.shuffle = function() {
  let i = this.length;
  while (i) {
    let j = Math.floor(Math.random() * i);
    let t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
};

Array.prototype.intersect = function(...a) {
  return [ this, ...a ].reduce((p, c) => p.filter(e => c.includes(e)));
};
