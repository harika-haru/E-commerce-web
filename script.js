function myFunction() {
    window.location.href = "dashboard.html";
  }
function myProduct() {
    window.location.href = "product.html";
}
function myPayment() {
  window.location.href = "payment.html";
}
document.getElementById("payment-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Payment sent successfully!");
});