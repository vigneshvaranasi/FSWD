document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
        // var closeSite = confirm("Are you sure you want to close this site?");
        var closeSite = true;
        if (closeSite) {
            window.close();
        }
    }
});
