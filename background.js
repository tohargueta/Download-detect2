chrome.downloads.onDeterminingFilename.addListener(function (downloadItem) {
  let downloadInfo = {
    url: downloadItem.url,
    filename: downloadItem.filename,
    timestamp: new Date().toISOString()
  };

  console.log("Sending download info:", downloadInfo);  // לוג להדפסת המידע שנשלח

  fetch("https://hooks.torq.io/v1/webhooks/3a1bb3ee-0e2f-4492-b396-1b77da4d63d0", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(downloadInfo),
    mode: 'no-cors'  // שימוש ב-no-cors כדי להימנע מ-CORS block
  }).then(response => {
    console.log("Response status:", response.status);
  }).catch(error => {
    console.error("Error sending data:", error);
  });
});