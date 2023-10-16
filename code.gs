// Code.gs
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getTextFileContent(fileId) {
  var file = DriveApp.getFileById(fileId);
  var content = file.getBlob().getDataAsString();
  return content;
}
