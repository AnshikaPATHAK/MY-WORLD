 class Slinkshot {
 constructor(bodyA,bodyB){
  var options={
  bodyA: bodyA, 
  bodyB : bodyB ,
  stiffness: 0.02,
  length :10 ,
  }
  this.Slinkshot=Constraint.create(options)
  World.add(world,this.Slinkshot);



 }
 display (){
 var pointA=this.Slinkshot.bodyA.position;
 var pointB= this.Slinkshot.bodyB.position;
 strokeWeight(5)
 line(pointA.x,pointA.y,pointB.x,pointB.y)

 }
 }