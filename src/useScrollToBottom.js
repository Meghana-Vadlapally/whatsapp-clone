import React, {useRef, useEffect} from 'react';

const useScrollToBottom = (messages) => {
    let scrollContainer = useRef();

    useEffect(() => {
        if(!scrollContainer?.current)return;

        scrollContainer.current.scrollTo(0, scrollContainer.current.scrollHeight)}, [messages]);

        return scrollContainer;


}

export default useScrollToBottom;