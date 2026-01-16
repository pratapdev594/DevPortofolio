document.getElementById("projectForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const college = document.getElementById("college").value;
    const branch = document.getElementById("branch").value;
    const mobile = document.getElementById("mobile").value;
    const tech = document.getElementById("technology").value;

    const message = `Hello RHDEV Soft 👋
Name: ${name}
College: ${college}
Branch: ${branch}
Mobile: ${mobile}
Technology: ${tech}

I want free project ideas & details.`;

    const whatsappURL = `https://wa.me/91YOURNUMBER?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});

function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSehVMfQxts4ZCc0mjmirbuJ2zlJFbyz0jJPa0lcrKYUqMryIA/viewform?usp=dialog",
    "_blank"
  );
}

// Auto-update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

