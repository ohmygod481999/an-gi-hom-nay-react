import { useEffect } from "react";
import { useLocation } from "react-router-dom";

async function loadScript(url) {
    return new Promise((resolve) => {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {
            // only required for IE <9
            script.onreadystatechange = function () {
                if (
                    script.readyState === "loaded" ||
                    script.readyState === "complete"
                ) {
                    script.onreadystatechange = null;
                    resolve(script);
                }
            };
        } else {
            //Others
            script.onload = function () {
                resolve(script);
            };
        }

        script.src = url;
        document.body.appendChild(script);
    });
}

export const useThirdPartyScript = (scripts, enable) => {
    const location = useLocation();

    useEffect(() => {
        let scriptTags = null;
        if (enable === undefined || enable === true) {
            console.log("loading scripts...");
            async function loadScripts(scripts) {
                const scriptTags = [];
                for (const script of scripts) {
                    const scriptTag = await loadScript(script);
                    scriptTags.push(scriptTag);
                }
                return scriptTags;
            }
            loadScripts(scripts).then((resScriptTags) => {
                scriptTags = resScriptTags;
                console.log("loaded scripts!");
            });
        }

        return () => {
            if (scriptTags) {
                scriptTags.forEach((scriptTag) => {
                    document.body.removeChild(scriptTag);
                });
            }
        };
    }, [location, enable]);
};
