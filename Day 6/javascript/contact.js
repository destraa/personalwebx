function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let number = document.getElementById("input-number").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;
  
    // if (name == "" || email == "" || number == "") {
    //   return alert("Form must be filled!");
    // }
  
    if (name === "") {
      return alert("Name must be filled!");
    } else if (email === "") {
      return alert("Email must be filled!");
    } else if (number === "") {
      return alert("Number must be filled!");
    } else if (subject === "") {
      return alert("Subject must be selected!");
    } else if (message === "") {
      return alert("Message must be filled!");
    }
  
    let emailReceiver = "dewansaptra@gmail.com";
  
    // <a href="mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Tolong kontak saya di nomor ${number} atau email saya di ${email}"></a>
  
    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Tolong kontak saya di nomor ${number} atau email saya di ${email}`;
    a.click();
  
    // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}
  
    let messagers = {
      nama: name,
      email: email,
      phone_number: number,
      subject: subject,
      message: message,
    };
  
    console.log(messagers);
  }