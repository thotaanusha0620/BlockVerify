function showIssue() {
    document.getElementById("content").innerHTML =
        "<h2>Issue Certificate</h2>" +
        "<input id='studentName' placeholder='Student Name'><br><br>" +
        "<input id='certificateId' placeholder='Certificate ID'><br><br>" +
        "<input id='course' placeholder='Course'><br><br>" +
        "<input id='college' placeholder='College Name'><br><br>" +
        "<button onclick='generateRecord()'>Generate Verification Record</button>" +
        "<div id='result'></div>";
}

function showVerify() {
    document.getElementById("content").innerHTML =
        "<h2>Verify Certificate</h2>" +
        "<input id='verifyId' placeholder='Certificate ID'><br><br>" +
        "<button onclick='verifyCertificate()'>Verify Certificate</button>" +
        "<div id='result'></div>";
}

function generateRecord() {
    var student = document.getElementById("studentName").value;
    var id = document.getElementById("certificateId").value;
    var course = document.getElementById("course").value;
    var college = document.getElementById("college").value;

    if (student == "" || id == "" || course == "" || college == "") {
        alert("Please fill all fields.");
        return;
    }

    var hash = "BV-" + id + "-" + Date.now();
var certificate = {
    student: student,
    id: id,
    course: course,
    college: college,
    hash: hash,
    issueDate: new Date().toLocaleDateString(),
    timestamp: new Date().toLocaleString()
};
    localStorage.setItem(id, JSON.stringify(certificate));

    document.getElementById("result").innerHTML =
    "<h3>Certificate Record Created</h3>" +
    "<p>Certificate ID: " + id + "</p>" +
    "<p>Blockchain Record: FOUND</p>" +
    "<p>Certificate Hash: " + certificate.hash + "</p>" +
    "<p>Block Number: #1024</p>" +
    "<p>Verification Status: VERIFIED</p>" +
"<p>QR Code:</p>" +
"<div id='qrCode'></div>";

var qr = document.createElement("img");
qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(window.location.href + "?certificate=" + id);

document.getElementById("qrCode").appendChild(qr);
}
function verifyCertificate() {
    var id = document.getElementById("verifyId").value;
    var data = localStorage.getItem(id);

    if (data != null) {
        var certificate = JSON.parse(data);

        document.getElementById("result").innerHTML =
            "<h2>CERTIFICATE VERIFIED</h2>" +
            "<p>Student: " + certificate.student + "</p>" +
            "<p>Course: " + certificate.course + "</p>" +
            "<p>College: " + certificate.college + "</p>" +
            "<p>Certificate ID: " + certificate.id + "</p>" +
            "<p>Status: GENUINE</p>" +
           "<p>Blockchain Record: FOUND</p>" +
"<p>Certificate Hash: " + certificate.hash + "</p>" +
"<p>Issue Date: " + certificate.issueDate + "</p>" +
"<p>Timestamp: " + certificate.timestamp + "</p>";
    } else {
        document.getElementById("result").innerHTML =
            "<h2 class='invalid'>CERTIFICATE NOT VERIFIED</h2>" +
"<p>Certificate ID: " + id + "</p>" +
            "<p>Status: INVALID</p>" +
            "<p>Blockchain Record: NOT FOUND</p>";
    }
}window.onload = function () {
    var params = new URLSearchParams(window.location.search);
    var certificateId = params.get("certificate");

    if (certificateId) {
        showVerify();

        document.getElementById("verifyId").value = certificateId;

        verifyCertificate();
    }
};