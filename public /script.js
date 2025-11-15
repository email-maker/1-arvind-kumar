// LIVE COUNT
recipients.addEventListener("input",()=>{
  const total = recipients.value
    .split(/[\n,]+/)
    .map(e=>e.trim())
    .filter(Boolean).length;

  emailCount.textContent = "Total Emails: " + total;
});

// SEND (UI Only)
sendBtn.addEventListener("click",()=>{
  alert("UI-only version: No backend connected.");
});

// LOGOUT
logoutBtn.addEventListener("click",()=>{
  alert("UI-only version: Logout disabled.");
});
