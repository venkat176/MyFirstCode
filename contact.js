// alert("contact java script")

var jdata = {
  "HR": [],
  "Finance": []
}




function getValues() {
  var contact = document.getElementById('dhr').value;
  var Name = document.getElementById('conname').value;
  var Email = document.getElementById('gmail').value;
  var Mobile = document.getElementById('mobnum').value;
  var Reasn = document.getElementById('reas').value;

  if (/^[A-Za-z\s]+$/.test(Name)) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      if (/^\d{10}$/.test(Mobile)) {

        if ("HR" == contact) {

          onhr = { "name": Name, "email": Email, "mobile": Mobile, "reasn": Reasn };
          jdata.HR.push(onhr);
        } else {

          onfin = { "name": Name, "email": Email, "mobile": Mobile, "reasn": Reasn };
          jdata.Finance.push(onfin);
        }
      }
      else {
        alert("please enter valid  mobile number");
      }
    }
    else {
      alert("please enter valid Email id");
    }
  }
  else {
    alert("please enter valid text");
  }

  var myJSON = JSON.stringify(jdata);

  // document.getElementById('jsondata').innerHTML = (abc.HR[0].subject==""?"":myJSON);
  // console.log(jdata);
  document.getElementById('jsondata').innerHTML = myJSON;
}
function clearValues() {
  document.getElementById('dhr').value = "";
  document.getElementById('conname').value = "";
  document.getElementById('gmail').value = "";
  document.getElementById('mobnum').value = "";
  document.getElementById('reas').value = "";
}
function moveToNewPage() {
  // alert('Go to home page');
  window.location.href = "HOMEHTML.html";
}
