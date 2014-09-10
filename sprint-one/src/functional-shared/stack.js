var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  return _.extend(someInstance, stackMethods);
};

var stackMethods = {
  push : function(value) {
    var size = this.size();
    this.storage[size] = value;
  },
  pop : function() {
    var size = this.size();
  },
  size : function() {
    var total = 0;
    while(this.storage[total] !== undefined) {
      total++;
    }
    return total;
  }
};


