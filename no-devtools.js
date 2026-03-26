/* Github - https://github.com/NTDevLops/no-devtools-js/ */
/* Ashish Sharma */


(function () {

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);

    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
    }, true);

    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    var devtoolsOpen = false;
    var blocked = false;

    function handleDevTools() {
        if (blocked) return;
        blocked = true;
        devtoolsOpen = true;
        document.body.innerHTML = '';
        document.head.innerHTML = '';
        window.stop();
    }

    setInterval(function () {
        if (blocked) return;
        var start = performance.now();
        (function () { debugger; })();
        var elapsed = performance.now() - start;
        if (elapsed > 200) {
            handleDevTools();
        }
    }, 1500);

    setInterval(function () {
        if (blocked) return;
        var widthDiff  = window.outerWidth  - window.innerWidth;
        var heightDiff = window.outerHeight - window.innerHeight;
        if (widthDiff > 220 || heightDiff > 220) {
            if (!devtoolsOpen) {
                handleDevTools();
            }
        } else {
            devtoolsOpen = false;
        }
    }, 1000);

})();
