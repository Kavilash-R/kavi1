
function xyz(){
  console.log("xyz1");
}
xyz();
function nu(){
    let msg="hello";
    function mu(){
        console.log(msg);
    }
    mu();
}
nu();
msg="bye";
console.log(msg);
