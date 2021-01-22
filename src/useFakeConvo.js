import React from 'react'

import useFakeMessage from './useFakeMessage';

const useFakeConvo = (setMessages) => {
    useFakeMessage({
        setMessages,
        message:'heya!!',
        timeout : 1000
    });
    useFakeMessage({
        setMessages,
        message:'heya1!!',
        from:'me',
        timeout : 2000
    });
    useFakeMessage({
        setMessages,
        message:'heya again1!!',
        timeout : 2000
    });
    useFakeMessage({
        setMessages,
        message:'heya again2!!',
        timeout : 2000
    });
    useFakeMessage({
        setMessages,
        message:'heya again3!!',
        timeout : 3000
    });

    useFakeMessage({
        setMessages,
        message:'heya2!!',
        from:'me',
        timeout : 3000
    });
    useFakeMessage({
        setMessages,
        message:'heya3!!',
        from:'me',
        timeout : 4000
    });
    useFakeMessage({
        setMessages,
        message:'heya4!!',
        from:'me',
        timeout : 4000
    });
    useFakeMessage({
        setMessages,
        message:'heya again2!!',
        timeout : 2000
    });
    useFakeMessage({
        setMessages,
        message:'heya again3!!',
        timeout : 3000
    });

    useFakeMessage({
        setMessages,
        message:'heya2!!',
        from:'me',
        timeout : 3000
    });
    useFakeMessage({
        setMessages,
        message:'heya3!!',
        from:'me',
        timeout : 4000
    });
    useFakeMessage({
        setMessages,
        message:'lasttttttttttttt!!',
        from:'me',
        timeout : 5000
    });


}

export default useFakeConvo;

