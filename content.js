walk(document.body);
setTimeout(function() {
    walk(document.body);
}, 1000);

function walk(node) {
    let child, next;
    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            swapText(node);
            break;
    }
}

function swapText(textNode) {
    let v = textNode.nodeValue;
    v = v.replace(/Kavanaugh/gi, 'The Beer Lovin\' Judge')
    v = v.replace(/John Bolton/gi, 'The Walrus')
    v = v.replace(/Trump/gi, 'Tangerine McDrumpf')
    v = v.replace(/Melania/gi, 'Wifey')
    v = v.replace(/Kellyanne Conway/gi, 'Miss Misinformation')
    v = v.replace(/Mitch McConnell/gi, 'La Tortuga')
    v = v.replace(/Ben Carson/gi, '"Sleepy" Ben Carson')
    v = v.replace(/McConnell/gi, 'La Tortuga')
    v = v.replace(/Lindsey Graham/gi, 'Lindsey "I Swear I Like Girls" Graham')
    v = v.replace(/Ted Cruz/gi, 'Lyin\' Ted')
    v = v.replace(/Cruz/gi, 'Lyin\' Ted')
    v = v.replace(/Kim Jong-Un/gi, 'Rocketman')
    v = v.replace(/Jeff Sessions/gi, 'Mr. Magoo')
    v = v.replace(/James Comey/gi, '\"Leakin\' James Comey')
    v = v.replace(/Comey/gi, '\"Leakin\' James Comey')
    v = v.replace(/Hillary Clinton/gi, 'Crooked Hillary')
    v = v.replace(/Barack Obama/gi, 'Barack "The Rock" Obama')
    v = v.replace(/Vladimir Putin/gi, 'Trump\'s Little Buddy')
    v = v.replace(/Putin/gi, 'Trump\'s Little Buddy')
    v = v.replace(/Bill Clinton/gi, 'Wild Bill')
    v = v.replace(/Bernie Sanders/gi, '"Crazy" Bernie')
    textNode.nodeValue = v;
}

