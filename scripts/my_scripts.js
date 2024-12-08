// Function to get a custom sort order based on folder names
function getSortOrder(folderName) {
    const customOrder = {
      "Important Folder": 1, // Assign lower numbers to higher priority
      "Another Important Folder": 2,
      "Yet Another Folder": 3,
      // ... add more folders and their order
      "Default": 99 // A default value for folders not explicitly listed
    };
    return customOrder[folderName] || customOrder["Default"];
  }
  
  // Wait for the DOM to load fully
  document.addEventListener('DOMContentLoaded', () => {
    const folderPage = document.querySelector('.folder-page'); // Select the folder page element
  
    if (folderPage) {
      const folderItems = Array.from(folderPage.querySelectorAll('.internal-link.folder'));
  
      // Sort the folder items based on the custom order
      folderItems.sort((a, b) => {
        const folderA = a.querySelector('.nav-folder-title').textContent;
        const folderB = b.querySelector('.nav-folder-title').textContent;
        return getSortOrder(folderA) - getSortOrder(folderB);
      });
  
      // Remove existing folder items from the DOM
      folderItems.forEach(item => item.remove());
  
      // Append the sorted folder items back to the DOM
      folderItems.forEach(item => folderPage.appendChild(item));
    }
  });