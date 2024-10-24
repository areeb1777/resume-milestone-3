// Form and resume container elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContainer = document.getElementById("resume") as HTMLDivElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const contact = (document.getElementById("contact") as HTMLInputElement)
    .value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const institution = (
    document.getElementById("institution") as HTMLInputElement
  ).value;
  const gradYear = (document.getElementById("gradYear") as HTMLInputElement)
    .value;
  const skills = (
    document.getElementById("skills") as HTMLInputElement
  ).value.split(",");

  // Handle profile picture
  const profilePicInput = document.getElementById(
    "profilePic"
  ) as HTMLInputElement;
  const profilePicFile = profilePicInput.files?.[0];

  if (profilePicFile) {
    const reader = new FileReader();

    // When the file is read successfully
    reader.onload = (event) => {
      const profilePicURL = event.target?.result as string;

      // Dynamically update the resume with form data and the profile picture
      resumeContainer.innerHTML = `
        <div class="profile">
          <img src="${profilePicURL}" alt="Profile Picture" class="profile-pic">
          <h1>${name}</h1>
          <p>${email} | ${contact}</p>
        </div>
        
        <div class="education">
          <h2> <i class="fa-solid fa-graduation-cap"></i> Education</h2>
          <p>${degree}, ${institution} (${gradYear})</p>
        </div>
        
        <div class="skills">
          <h2> <i class="fa-solid fa-gear"></i> Skills</h2>
          <ul>${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}</ul>
        </div>
      `;
      // Display the resume
      resumeContainer.style.display = "block";
    };

    // Read the profile picture file as a Data URL
    reader.readAsDataURL(profilePicFile);
  } else {
    // If no profile picture is selected, display resume without it
    resumeContainer.innerHTML = `
      <div class="profile">
        <h1>${name}</h1>
        <p>${email} | ${contact}</p>
      </div>
      
      <div class="education">
        <h2> <i class="fa-solid fa-graduation-cap"></i> Education</h2>
        <p>${degree}, ${institution} (${gradYear})</p>
      </div>
      
      <div class="skills">
        <h2> <i class="fa-solid fa-gear"></i> Skills</h2>
        <ul>${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}</ul>
      </div>
    `;
    // Display the resume
    resumeContainer.style.display = "block";
  }
});
