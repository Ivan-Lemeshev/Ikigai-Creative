let oldScriptPath = null;
let oldScript = null;
const loadScriptByScreenSize = () => {
    const path = window.matchMedia("(max-width: 875px) and (max-height: 500px) and (orientation: landscape)").matches
        ? 'js/mobile-horizontal.js'
        : (window.matchMedia("(max-width: 500px) and (orientation: portrait)").matches
            ? 'js/mobile-vertical.js'
            : (window.matchMedia("(min-width: 700px) and (max-width: 1024px) and (orientation: landscape)").matches
                ? 'js/tablet-horizontal.js'
                : (window.matchMedia("(min-width: 500px) and (max-width: 1024px) and (orientation: portrait)").matches
                    ? 'js/tablet-vertical.js'
                    : 'js/desktop.js'
                )
            )
        )
    if (path !== oldScriptPath) {
        if (oldScriptPath) {
            document.head.removeChild(oldScript);
        }
        const script = document.createElement('script');
        script.src = path;
        script.type = 'module';
        document.head.appendChild(script);
        oldScriptPath = path;
        oldScript = script;
    }
}

window.onload = loadScriptByScreenSize;
window.addEventListener('resize', loadScriptByScreenSize)