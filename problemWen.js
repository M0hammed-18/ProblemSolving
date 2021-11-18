function solve(eq){
    return eq.split(/([*\+\-\/])/).reverse().join("");
  }
 console.log(solve("a+b-c/d*30")); 