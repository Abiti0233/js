let result = "";
let is_calc = false;


window.onload = function () {
  result = document.getElementById('result');
};

function num_click(val){
  if(is_calc)  result.value = "0";
  is_calc = false;  

  if(result.value =="0" && val == "0"){
    result.value = "0";
  }else if(result.value == "0" && val == "."){
    result.value = "0.";
  }else if(result.value == "0"){
    result.value = val;
  }else if(result.value.includes(".") && val == "."){
    result.value = result.value.replace(/$"."/,"");
  }else if(result.value.includes("00") && val == "00"){
    result.value = result.value.replace(/$"00"/,"");
  }else if(result.value.includes("0") && val == "0"){
    result.value = result.value.replace(/$"0"/,"");
  }else{
    result.value += val;
  }
}

function ope_click(val){
  if(is_calc)  is_calc = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
}

function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);

  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
}

function is_ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}

function ac_click(){
  result.value = "0";
  is_calc = false;
}

