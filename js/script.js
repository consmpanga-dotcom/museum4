// 🏺 Collection Info Display
function showCollection(type) {
  const contentBox = document.getElementById("collection-content");
  let content = "";

  if (type === "archaeology") {
    content = `
      <h3>Archaeology Collection</h3>
      <p>Explore ancient artifacts, pottery, and relics from past civilizations.
      Each piece tells a story of human innovation and survival.</p>
      <img src="../images/file_jpg.png" alt="Archaeological artifacts" style="width:300px; height:auto;">
    `;
  } else if (type === "anthropology") {
    content = `
      <h3>Anthropology Collection</h3>
      <p>Dive into the study of cultures, languages, and traditions.
      Learn how societies evolved through time and space.</p>
      <img src="../images/file_jpg3.png" alt="Anthropology exhibit" style="width:300px; height:auto;">
    `;
  } else if (type === "history") {
    content = `
      <h3>History Collection</h3>
      <p>Discover documents, maps, and objects that trace key historical events
      shaping our modern world.</p>
      <img src="../images/file_jpg2.png" alt="Historical artifacts" style="width:300px; height:auto;">
    `;
  }

  contentBox.innerHTML = content;
}