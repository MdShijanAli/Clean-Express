import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - CLEAN EXPRESS`;
    }, [title])
};

export default useTitle;