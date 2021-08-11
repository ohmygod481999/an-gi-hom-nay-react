import { useEffect } from "react";
import { toast } from "react-toastify";

function useHandleMutationResponse({ called, data, error, loading }, callBack) {
    useEffect(() => {
        if (called && loading === false) {
            if (error) {
                toast["error"](error);
            } else {
                toast["success"]("Thành công");
            }
            if (callBack) {
                callBack();
            }
        }
    }, [called, loading]);
}

export default useHandleMutationResponse;
