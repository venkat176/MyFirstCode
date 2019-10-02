// alert("Rigistration form");


var rows = "";

function getValues() {

    var firstname = document.getElementById('txtfirstname').value;
    var lastname = document.getElementById('txtlastname').value;
    var genderVal = "";
    var genderCntrl = document.getElementsByName('gender');

    for (i = 0; i < genderCntrl.length; i++) {
        if (genderCntrl[i].checked)
            genderVal = genderCntrl[i].value;
    }
    var mobile = document.getElementById('txtnum').value;
    var age = document.getElementById('numage').value;

    var subjectCntrl = document.getElementById("dstate").value;

    var address = document.getElementById("rgform").value;

    if (firstname != "" && /^[A-Za-z]+$/.test(firstname)) {
        if (lastname != "" && /^[A-Za-z]+$/.test(lastname)) {
            if (genderVal != "") {
                if (mobile != "" && /^\d{10}$/.test(mobile)) {
                    if (age != "" && age > 15 && age < 60) {
                        if (subjectCntrl != "") {
                            if (address != "") {
                                
                                rows += "<tr>";
                                rows += "<td>" + firstname + "</td>";
                                rows += "<td>" + lastname + "</td>";
                                rows += "<td>" + genderVal + "</td>";
                                rows += "<td>" + mobile + "</td>";
                                rows += "<td>" + age + "</td>";
                                rows += "<td>" + subjectCntrl + "</td>";
                                rows += "<td>" + address + "</td>";
                                rows += "</tr>";
                                                                                                                                                                        
                                document.getElementById('rowsdata').innerHTML = rows;

                            } else {
                                alert("please enter your address");
                            }
                        } else {
                            alert("please seledt state");
                        }
                    } else {
                        alert("please enter age between 15 to 60");
                    }
                } else {
                    alert("please enter your valid mobile number");
                }
            } else {
                alert("please select gender");
            }
        } else {
            alert("please enter valid text in lastname ");
        }
    } else {
        alert("please enter valid text in firstname");
    }


    // document.getElementById('rowsdata').innerHTML = rows;
}


function clearValues() {
    document.getElementById('txtfirstname').value = "";
    document.getElementById('txtlastname').value = "";

    var genderCntrl = document.getElementsByName('gender');

    for (i = 0; i < genderCntrl.length; i++) {
        if (genderCntrl[i].checked)
            genderCntrl[i].checked = false;
    }
    document.getElementById('txtnum').value = "";
    document.getElementById('numage').value = "";

    var subjectCntrl = document.getElementById("dstate");
    subjectCntrl.value = "2";

    document.getElementById('rgform').value = "";


}

function moveToNewPage() {
    window.location.href = "HOMEHTML.html";
}
// function validatFname(){
//     var firstname = document.getElementById('txtfirstname').value;
//       if (/^[A-Za-z\s]+$/.test(firstname)) {
//            return rows += "<td>" + firstname + "</td>";
//         }
//         else {
//             alert("please enter valid text");
//             return false;
//         }
// }

// function validatLname(){
//     var lastname = document.getElementById('txtlastname').value;
//       if (/^[A-Za-z\s]+$/.test(lastname)) {
//            return rows += "<td>" + lastname + "</td>";
//         }
//         else {
//             alert("please enter valid text");
//             return false;
//         }
// }
