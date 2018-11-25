zap = "https://hooks.zapier.com/hooks/catch/4100667/cug83o/silent/?firstname=";
zap2 = "&lastname="
var firstname;
var lastname;
firstname = document.getElementById("firstname").value;
lastname = document.getElementById("lastname").value;
var button = document.querySelector('button');
button.onclick = function() {
  window.location.href = zap + firstname + zap2 + lastname;
}
