function Download(filename, element)
{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(" "));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
  
// Start file download.
Download("https://drive.google.com/file/d/1T1drJx4tbi-JgDzYTft3UwTsz1uSJxI6/view?usp=sharing","huh");