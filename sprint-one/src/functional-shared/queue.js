var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  return _.extend(someInstance, queueMethods);
};

var queueMethods = {
  queue : function(value) {
    var size = this.size();
    this.storage[size] = value;
  },
  dequeue : function () {
    var size = this.size();
    var output = this.storage[0];
    for (var i = 0; i < size; i++) {
      output[i] = output[i+1];
    }
    delete output[size-1];
    return output;
  },
  size : function () {
    var total = 0;
    while(this.storage[total] !== undefined) {
      total++;
    }
    return total;
  }

};



