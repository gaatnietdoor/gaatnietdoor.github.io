const resource = [ /* --- CSS --- */ '/assets/css/style.css', /* --- PWA --- */ '/app.js', '/sw.js', /* --- HTML --- */ '/index.html', '/404.html', '/categories/', '/tags/', '/archives/', '/about/', /* --- Favicons & compressed JS --- */ '/assets/favicons/favicon.png', '/assets/js/dist/categories.min.js', '/assets/js/dist/commons.min.js', '/assets/js/dist/home.min.js', '/assets/js/dist/misc.min.js', '/assets/js/dist/page.min.js', '/assets/js/dist/post.min.js', '/assets/js/dist/pvreport.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'blog.gaatnietdoor.com', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
