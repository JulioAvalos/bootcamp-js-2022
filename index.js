const paragraphs = document.getElementsByTagName('p');

if (paragraphs.length > 0) {
  const paragraph = paragraphs[0];
  paragraph.innerHTML = 'Bienvenidos al bootcamp!';
}

if (paragraphs.length > 1) {
  const paragraph = paragraphs[0];
  const fecha = new Date();
  paragraph.innerHTML = 'parrafos en el documento: ' + paragraphs.length + "(" + fecha +")";
}
