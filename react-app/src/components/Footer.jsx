import React from "react";

var year = new Date();

function Footer() {
    return <footer>
        <p>Copyrights ©️ {year.getFullYear()} Coder-genie, Inc. Click <a href="mailto:geniesushil@gmail.com">here</a> to Mail us!</p>
    </footer>;
}

export default Footer;