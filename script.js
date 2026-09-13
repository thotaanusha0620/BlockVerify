* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f5f7fb;
    color: #1e293b;
}

/* ================= HEADER ================= */

header {
    background: #123c8c;
    color: white;
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 1px;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 25px;
    cursor: pointer;
    font-size: 16px;
}

nav a:hover {
    text-decoration: underline;
}

/* ================= HERO ================= */

.hero {
    text-align: center;
    padding: 70px 20px 45px;
    background: white;
}

.hero h1 {
    font-size: 45px;
    margin-bottom: 15px;
    color: #123c8c;
    line-height: 1.2;
}

.hero h2 {
    font-size: 24px;
    font-weight: normal;
    color: #334155;
}

.hero p {
    font-size: 18px;
    color: #64748b;
    max-width: 700px;
    margin: 15px auto 25px;
    line-height: 1.6;
}

/* ================= BUTTONS ================= */

button {
    background: #123c8c;
    color: white;
    border: none;
    padding: 14px 25px;
    margin: 10px 5px;
    border-radius: 7px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #2563eb;
}

/* ================= CONTENT ================= */

#content {
    background: white;
    width: 550px;
    max-width: 90%;
    margin: 35px auto;
    padding: 35px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.10);
}

#content h2 {
    text-align: center;
    color: #123c8c;
    margin-top: 0;
    margin-bottom: 25px;
}

/* ================= INPUTS ================= */

input {
    width: 90%;
    padding: 13px;
    margin: 7px;
    border: 1px solid #cbd5e1;
    border-radius: 7px;
    font-size: 15px;
    outline: none;
}

input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.10);
}

/* ================= RESULT ================= */

#result {
    background: white;
    margin-top: 25px;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
    text-align: left;
    border-left: 5px solid #15803d;
}

#result h2 {
    color: #15803d;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
}

#result h3 {
    text-align: center;
    color: #123c8c;
    margin-bottom: 20px;
}

#result p {
    font-size: 16px;
    margin: 0;
    padding: 12px;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    line-height: 1.4;
}

#result p:last-child {
    border-bottom: none;
}

/* ================= INVALID RESULT ================= */

#result h2.invalid {
    color: #dc2626;
}

#result:has(h2.invalid) {
    border-left-color: #dc2626;
}

/* ================= QR CODE ================= */

#qrCode {
    text-align: center;
    margin-top: 20px;
}

#qrCode img {
    width: 180px;
    height: 180px;
    padding: 8px;
    background: white;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
}

/* ================= WORKFLOW ================= */

.workflow {
    text-align: center;
    padding: 55px 20px;
}

.workflow h2 {
    color: #123c8c;
    font-size: 30px;
    margin-bottom: 30px;
}

.steps {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.step {
    background: white;
    width: 210px;
    min-height: 130px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.10);
}

.step h3 {
    color: #123c8c;
    margin-bottom: 10px;
}

.step p {
    color: #64748b;
    font-size: 14px;
    line-height: 1.5;
}

.arrow {
    font-size: 30px;
    font-weight: bold;
    color: #123c8c;
}

/* ================= MOBILE ================= */

@media (max-width: 600px) {

    header {
        padding: 15px 20px;
        flex-direction: column;
        gap: 12px;
    }

    .logo {
        font-size: 24px;
    }

    nav {
        text-align: center;
    }

    nav a {
        margin: 0 7px;
        font-size: 14px;
    }

    .hero {
        padding: 40px 15px 30px;
    }

    .hero h1 {
        font-size: 30px;
    }

    .hero h2 {
        font-size: 20px;
    }

    .hero p {
        font-size: 16px;
    }

    #content {
        width: 92%;
        max-width: 92%;
        padding: 22px;
        margin: 25px auto;
    }

    input {
        width: 100%;
        margin: 6px 0;
    }

    button {
        font-size: 14px;
        padding: 12px 18px;
    }

    #result {
        padding: 18px;
    }

    #result p {
        font-size: 14px;
        padding: 10px;
    }

    #qrCode img {
        width: 160px;
        height: 160px;
    }

    .workflow {
        padding: 35px 15px;
    }

    .workflow h2 {
        font-size: 26px;
    }

    .steps {
        flex-direction: column;
    }

    .step {
        width: 90%;
    }

    .arrow {
        transform: rotate(90deg);
    }
}
