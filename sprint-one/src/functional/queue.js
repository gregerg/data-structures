var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var size = this.size();
    storage[size+1] = value;
  };

  someInstance.dequeue = function(){
    var size = this.size();
    var output = storage[0];
    for(var i = 0; i < size; i++) {
      storage[i] = storage[i+1];
    }
    return output;
  };

  someInstance.size = function(){
    var i = 0;
    while(storage[i] !== undefined);
      i++;
    }
    return i;
  };

  return someInstance;
};
