function getElementWidth(content, padding, border) {
    
    function parsePx(value) {
        return parseFloat(value.replace('px', ''));
    }

    
    const contentWidth = parsePx(content);
    const paddingWidth = parsePx(padding) * 2; 
    const borderWidth = parsePx(border) * 2;  
    
    const totalWidth = contentWidth + paddingWidth + borderWidth;

    return totalWidth;
}

