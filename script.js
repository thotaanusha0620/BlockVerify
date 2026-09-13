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

    var certificateData = btoa(JSON.stringify(certificate));

    document.getElementById("result").innerHTML =
        "<h3>Certificate Record Created</h3>" +
        "<p>Certificate ID: " + id + "</p>" +
        "<p>Blockchain Record: FOUND</p>" +
        "<p>Certificate Hash: " + hash + "</p>" +
        "<p>Block Number: #1024</p>" +
        "<p>Verification Status: VERIFIED</p>" +
        "<p>QR Code:</p>" +
        "<div id='qrCode'></div>";

    var qr = document.createElement("img");

    var verificationURL =
        window.location.origin +
        window.location.pathname +
        "?certificate=" +
        encodeURIComponent(certificateData);

    qr.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
        encodeURIComponent(verificationURL);

    document.getElementById("qrCode").appendChild(qr);
}

function verifyCertificate() {

    var params = new URLSearchParams(window.location.search);
    var encodedData = params.get("certificate");

    if (encodedData) {

        try {
            var certificate = JSON.parse(atob(encodedData));

            document.getElementById("content").innerHTML =
                "<h2>CERTIFICATE VERIFIED</h2>" +
                "<div id='result'>" +
                "<p>Student: " + certificate.student + "</p>" +
                "<p>Course: " + certificate.course + "</p>" +
                "<p>College: " + certificate.college + "</p>" +
                "<p>Certificate ID: " + certificate.id + "</p>" +
                "<p>Status: GENUINE</p>" +
                "<p>Blockchain Record: FOUND</p>" +
                "<p>Certificate Hash: " + certificate.hash + "</p>" +
                "<p>Issue Date: " + certificate.issueDate + "</p>" +
                "<p>Timestamp: " + certificate.timestamp + "</p>" +
                "</div>";

            return;

        } catch (error) {
            console.log(error);
        }
    }

    showVerify();
}

window.onload = function () {
    verifyCertificate();
};
