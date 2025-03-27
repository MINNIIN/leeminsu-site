import React, { useCallback, useEffect, useState } from 'react';
import '../css/ComponentStyles.css'

const Box = ({ createBoxStyle }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log('박스 크기 바뀜');
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return <div className="homepage-box" style={style}></div>
};

export default Box;