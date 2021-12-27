     const baseFare = 50;
     const costPerMin = 5;
     const costPerMile = 5;
     const bookFee = 12;
     const surgeBoost = 3;
     class UberPrice {
          constructor(rideDistance,rideTime){        
               this.rideDistance = rideDistance;
               this.rideTime = rideTime;
          }

          setRideDistance(rideDistance){
               this.rideDistance = rideDistance;
          }

          getRideDistance(){
               return this.rideDistance;
          }

          setRideTime(rideTime){
               this.rideTime = rideTime;
          }

          getRideTime(){
               return rideTime;
          }

          getPrice(){
               let result = baseFare+( (costPerMin * this.rideTime)+(costPerMile * this.rideDistance) * surgeBoost) + bookFee;
               return result;
          }
     }

let priceObj = new UberPrice(95,200);
console.log("Uberprice ",priceObj.getPrice());