import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useThirdPartyScript = (scripts) => {
    const location = useLocation();

    useEffect(() => {
        const scriptTags = [];
        scripts.forEach((scriptUrl) => {
            const scriptTag = document.createElement("script");
            scriptTag.src = scriptUrl;

            document.body.appendChild(scriptTag);
            scriptTags.push(scriptTag);
        });
        return () => {
            scriptTags.forEach((scriptTag) => {
                document.body.removeChild(scriptTag);
            });
        };
    }, [location]);
};
