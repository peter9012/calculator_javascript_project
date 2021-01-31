function getHistory(){
  return document.getElementById("history-value").innerText;
}

function printHistory(num){
  return document.getElementById("history-value").innerText = num;
}

function getOutput(num){
  return document.getElementById("output-value").innerText;
}

function printOutput(num){
  if(num == ""){
    document.getElementById("output-value").innerText = num;
  }
  else{
   document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}
// printOutput("881231231");
// alert(reverseNumberFormat(getOutput()));
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
  number[i].addEventListener('click',function(){
    var output=reverseNumberFormat(getOutput());JHGUJK,HGCGHHYGV
    if(output!=NaN){
      output=output+this.id;
      printOutput(output);
    }
  });
}
