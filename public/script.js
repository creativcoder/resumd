window.onload = function() {
    var converter = new showdown.Converter();
    var pad = document.getElementById('pad');
    var markdownArea = document.getElementById('markdown');
    var convertMarkdownArea = function() {
        var markdown_text = pad.value;
        html = converter.makeHtml(markdown_text);
        markdownArea.innerHTML = html;
    };

    pad.addEventListener('input',convertMarkdownArea);

    convertMarkdownArea();

      
};