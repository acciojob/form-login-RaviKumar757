function getFormvalue(event) {
  event.preventDefault(); // stop reload

  let fname = document.querySelector('input[name="fname"]').value.trim();
  let lname = document.querySelector('input[name="lname"]').value.trim();

  if (fname === "" && lname === "") {
    alert("Please enter your name");
    return;
  }

  let fullName = fname + " " + lname;

  alert(fullName.trim());
}