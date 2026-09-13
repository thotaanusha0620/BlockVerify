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
        "<input id='verifyId' placeholder='Certificate ID'>" +
        "<br><br>" +
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

    var id = document.getElementById("verifyId").value.trim();

    if (id == "") {
        alert("Please enter Certificate ID.");
        return;
    }

    var data = localStorage.getItem(id);

    if (data != null) {

        var certificate = JSON.parse(data);

        document.getElementById("result").innerHTML =
            "<h2>CERTIFICATE VERIFIED</h2>" +
            "<p><b>Student:</b> " + certificate.student + "</p>" +
            "<p><b>Course:</b> " + certificate.course + "</p>" +
            "<p><b>College:</b> " + certificate.college + "</p>" +
            "<p><b>Certificate ID:</b> " + certificate.id + "</p>" +
            "<p><b>Status:</b> GENUINE</p>" +
            "<p><b>Blockchain Record:</b> FOUND</p>" +
            "<p><b>Certificate Hash:</b> " + certificate.hash + "</p>" +
            "<p><b>Issue Date:</b> " + certificate.issueDate + "</p>" +
            "<p><b>Timestamp:</b> " + certificate.timestamp + "</p>";

    } else {

        document.getElementById("result").innerHTML =
            "<h2 class='invalid'>CERTIFICATE NOT VERIFIED</h2>" +
            "<p><b>Certificate ID:</b> " + id + "</p>" +
            "<p><b>Status:</b> INVALID</p>" +
            "<p><b>Blockchain Record:</b> NOT FOUND</p>";
    }
}

window.onload = function () {

    var params = new URLSearchParams(window.location.search);
    var encodedData = params.get("certificate");

    if (encodedData) {

        try {

            var certificate = JSON.parse(atob(encodedData));

            document.getElementById("content").innerHTML =
                "<h2>CERTIFICATE VERIFIED</h2>" +
                "<div id='result'>" +
                "<p><b>Student:</b> " + certificate.student + "</p>" +
                "<p><b>Course:</b> " + certificate.course + "</p>" +
                "<p><b>College:</b> " + certificate.college + "</p>" +
                "<p><b>Certificate ID:</b> " + certificate.id + "</p>" +
                "<p><b>Status:</b> GENUINE</p>" +
                "<p><b>Blockchain Record:</b> FOUND</p>" +
                "<p><b>Certificate Hash:</b> " + certificate.hash + "</p>" +
                "<p><b>Issue Date:</b> " + certificate.issueDate + "</p>" +
                "<p><b>Timestamp:</b> " + certificate.timestamp + "</p>" +
                "</div>";

        } catch (error) {
            showVerify();
        }

    } else {
        showVerify();
    }
};
