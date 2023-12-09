'use client';

import { useState, useEffect } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ 
    Children}) => {
    const [hasMounted, setHasMounted] = useState(false);

    
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    return ( 
        <>
        {Children}
        </>

     );
}
 
export default ClientOnly;