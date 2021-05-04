# 1603. Design Parking System

## 문제

Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.  
Implement the <code>ParkingSystem</code> class:

- <code>ParkingSystem(int big, int medium, int small)</code> Initializes object of the <code>ParkingSystem class</code>. The number of slots for each parking space are given as part of the constructor.
- <code>bool addCar(int carType)</code> Checks whether there is a parking space of <code>carType</code> for the car that wants to get into the parking lot. <code>carType</code> can be of three kinds: big, medium, or small, which are represented by <code>1</code>, <code>2</code>, and <code>3</code> respectively. <strong>A car can only park in a parking space of its</strong> <code>carType</code>. If there is no space available, return <code>false</code>, else park the car in that size space and return <code>true</code>.

### Example

1. Input  
   ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]  
   [[1, 1, 0], [1], [2], [3], [1]]  
   Output  
   [null, true, true, false, false]  
   <strong>Explanation </strong>  
   ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);  
   parkingSystem.addCar(1); // return true because there is 1 available slot for a big car  
   parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car  
   parkingSystem.addCar(3); // return false because there is no available slot for a small car  
   parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

### 문제 풀이

```js
function ParkingSystem(...spaces) {
  this.spaces = spaces;
}
ParkingSystem.prototype.addCar = function (car) {
  return this.spaces[car - 1] ? this.spaces[car - 1]-- && true : false;
};
```
