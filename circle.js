    class Circle{
        constructor(radius,color){
            this.radius = radius;
            this.color = color;
        }

        setRadius(radius){
            this.radius = radius;
        }

        getRadius(){
            return parseFloat(this.radius);
        }

        setColor(color){
            this.color = color;
        }

        getColor(color){
            return this.color;
        }

        toString(){    
            return `${this.radius} ${this.color}`;
        }

        getArea(){
            return parseFloat(Math.PI * this.radius * this.radius);
        }

        getCircumference (){
            return parseFloat( (2 * Math.PI) * this.radius);
        }
    }

let objInst = new Circle(9.3,"blue");
console.log("toString: ",objInst.toString());
objInst.setRadius(13.7);
console.log("getRadius: ",objInst.getRadius().toFixed(2));
objInst.setColor("yellow");
console.log("getColor: ",objInst.getColor());
console.log("getArea: ",objInst.getArea().toFixed(2));
console.log("getColor: ",objInst.getCircumference().toFixed(2));
console.log("toString: ",objInst.toString());