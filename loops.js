function forLoop (arr){
 
 for (var i=0; i<25; i++)
 {
   if(i<=1){
     arr.push( "I am " + i + " strange loop.");}
   else{
   
     arr.push( "I am " + i + " strange loops.");}
   
 }
 
return arr;
}

function whileLoop (n){
  while(n>0){ 
   console.log(n--);
  }
  return 'done';
}

function doWhileLoop(array){
  
  function incrementVariable() {
  i = i + 1;
}
do{
  array.pop();
  incrementVariable();
  return array;
}
while (incrementVariable() && array.length>0);

}