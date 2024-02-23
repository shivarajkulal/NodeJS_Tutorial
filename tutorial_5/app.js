module.exports = {
    x :10,
    y : 20,
    sum:function(x,y){
        
        return x + y ;
    }
}

/*// Assigning to exports will not modify module, must use module.exports
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 3;
  }
};
*/
//hello world