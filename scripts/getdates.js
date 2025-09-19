 
    // Dynamically insert the current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Dynamically insert the last modified date of the document
    document.getElementById("lastModified").textContent =
      "Last Modified: " + document.lastModified;