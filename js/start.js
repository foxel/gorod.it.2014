// If the query includes 'print-pdf', include the PDF print sheet

if (window.location.search.match(/print-pdf/gi)) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/print/pdf.css';
    document.getElementsByTagName('head')[0].appendChild(link);
}


// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    mouseWheel: true,

//    theme: 'night', // available themes are in /css/theme
    transition: 'concave', // default/cube/page/concave/zoom/linear/fade/none

    // Parallax scrolling
//    parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
//    parallaxBackgroundSize: '2100px 900px',

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'lib/js/classList.js', condition: function () {
            return !document.body.classList;
        } },
        { src: 'plugin/markdown/marked.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        } },
        { src: 'plugin/markdown/markdown.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function () {
            hljs.initHighlightingOnLoad();
        } },
        { src: 'plugin/zoom-js/zoom.js', async: true, condition: function () {
            return !!document.body.classList;
        } },
        { src: 'plugin/notes/notes.js', async: true, condition: function () {
            return !!document.body.classList;
        } }
    ]
});
