var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var size = this.size();
    storage[size] = value;
  };

  someInstance.pop = function(){
    var size = this.size();
    if (size === 0) {
      return;
    }
    var output = storage[size-1];
    delete storage[size-1];
    return output;
  };

  someInstance.size = function(){
    var i = 0;
    while(storage[i] !== undefined)
      i++;
    return i;
  };

  return someInstance;
};
