function showCollection(collectionName) {
  const content = document.getElementById('collection-content');

  let html = '';

  switch (collectionName) {
    case 'archaeology':
      html = `
        <h3>Archaeology Collection</h3>
        <p>This collection includes artifacts from ancient civilizations, fossils, and tools used by early humans.</p>
        <img src="../images/file_jpg.png" alt="Archaeological artifacts" style="width:300px; height:auto;">
        <ul>
          <li>Starbone Fossil Replica</li>
          <li>Ancient Pottery</li>
          <li>Stone Tools</li>
        </ul>
      `;
      break;

    case 'anthropology':
      html = `
        <h3>Anthropology Collection</h3>
        <p>Explore the cultural and social aspects of human societies across time.</p>
<img src="../images/file_jpg3.png" alt="Anthropology exhibit" style="width:300px; height:auto;">
        <ul>
          <li>Coral Queen Incense Replica</li>
          <li>Traditional Clothing</li>
          <li>Ritual Artifacts</li>
        </ul>
      `;
      break;

    case 'history':
      html = `
        <h3>History Collection</h3>
        <p>Discover artifacts from historical events and periods that shaped our world.</p>
        <img src="../images/file_jpg2.png" alt="Historical artifacts" style="width:300px; height:auto;">
    
     <ul>
          <li>Mystic Sand Globe</li>
          <li>Ancient Maps</li>
          <li>Historical Documents</li>
        </ul>
      `;
      break;

    default:
      html = '<p>Click a collection above to view more details.</p>';
  }

  content.innerHTML = html;
}