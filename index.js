var count =0;
function cvvbtn() {
  document.getElementById("fpbox").style.transform = "rotateY(180deg)";
}

function notcvvbtn() {
  document.getElementById("fpbox").style.transform = "rotateY(0deg)";
}

function updatenum() {
  // document.getElementById('hhhh').value=this.value
  var hash = document.getElementById('hhhh').placeholder;
  var hashno = document.getElementById('hashno').value;

  console.log(hashno.length);
  // hash.replace(count,hashno[hashno.length-1]);
  // hash[count]=hashno[hashno.length-1];
  console.log(hash);
  count++;
  if (document.getElementById('hhhh').value == '') {
    document.getElementById('hhhh').placeholder = '#### #### #### ####';
  }
}
