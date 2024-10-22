"use strict";
// Form and resume container elements
const form = document.getElementById('resume-form');
const resumeContainer = document.getElementById('resume');
form.addEventListener('submit', (e) => {
    var _a;
    e.preventDefault();
    // Collect form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const gradYear = document.getElementById('gradYear').value;
    const skills = document.getElementById('skills').value.split(',');
    // Handle profile picture
    const profilePicInput = document.getElementById('profilePic');
    const profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePicFile) {
        const reader = new FileReader();
        // When the file is read successfully
        reader.onload = (event) => {
            var _a;
            const profilePicURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
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
        };
        // Read the profile picture file as a Data URL
        reader.readAsDataURL(profilePicFile);
    }
    else {
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
    }
});