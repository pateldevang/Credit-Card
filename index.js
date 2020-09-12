var count =0;
function cvvbtn() {
  document.getElementById("fpbox").style.transform = "rotateY(180deg)";
  var hash = document.getElementById('cvvnum').placeholder;
  var hashno = document.getElementById('cvv').value;
  document.getElementById('cvvnum').value=hashno
  count++;
  if (document.getElementById('cvvnum').value == '') {
    document.getElementById('cvvnum').placeholder = '***';
  }
  
}

function notcvvbtn() {
  document.getElementById("fpbox").style.transform = "rotateY(0deg)";

}

function updatename() {
  var hash = document.getElementById('name1').placeholder;
  var hashno = document.getElementById('hashname').value;
  document.getElementById('name1').value=hashno
  count++;
  if (document.getElementById('name1').value == '') {
    document.getElementById('name1').placeholder = 'FULL NAME';
  }
}

function updatedate() {
  console.log("qwefqwefgr")
  var hash = document.getElementById('info1').placeholder;
  var hashno = document.getElementById('info').value;
  var hashno1 = document.getElementById('info2').value;
 
  document.getElementById('info1').value=hashno + "/" + hashno1
   // document.getElementById('info1').value=hashno

  count++;
  if (document.getElementById('info1').value == '') {
    document.getElementById('info1').placeholder = 'MM/YY';
  }
}

function updatenum() {
  
  var hash = document.getElementById('hhhh').placeholder;
  var hashno = document.getElementById('hashno').value;
  var i;
  for (i = 0; i < hashno.length; i++) { 
     if (hashno.length%4==0) {
    hashno = document.getElementById('hashno').value = hashno + " ";
  }
}
 
  document.getElementById('hhhh').value=hashno
  count++;
  if (document.getElementById('hhhh').value == '') {
    document.getElementById('hhhh').placeholder = '#### #### #### ####';
  }
}
