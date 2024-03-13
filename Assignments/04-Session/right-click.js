document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

/* document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
        // var closeSite = confirm("Are you sure you want to close this site?");
        event.preventDefault();
        alert('Viewing page source is disabled.'); 
        // var closeSite = true;
        // if (closeSite) {
        //     window.close();
        // }
    }
}); */

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === 'u' || (event.shiftKey && event.code === 'KeyI'))) {
        event.preventDefault();
        alert('Viewing page source is disabled.');
    }
});


/* document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
        event.preventDefault();
        // alert('Viewing page source is disabled.'); 
    }
});
 */
