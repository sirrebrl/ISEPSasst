/*
PERK PORTAL

This script prepares the perk portal and records the status of the perk selection.

Relevant to calculations outside the perk portal: (these convert non-perk factors into other non-perk factors, or factor into static SC bonus)

R6 - +0.1% solutions gained per research purchased, per red perk
R7 - +0.1% data cubes gained per research purchased, per red perk
    Total red perks and infinity perks factor in

W4 - +1% singularity cubes gained per perk in any path
W7 - +1.5% singularity cubes gained per perk in any path
    Total standard perks and infinity perks factor in

Y6 - +1% singularity cubes gained per archive expert
    The max of 30 archive experts will be assumed

O4 - +4% singularity cubes gained per rebirthobot
    The max of 30 rebirthobots will be assumed

T1 - +5% singularity cubes gained per teal perk
T7 - +10% singularity cubes gained per teal perk
    Total teal perks and infinity perks factor in
*/

const perkList =
[
    { path: 'red', perkID: 'R1', parentPerk: 'Root', direction: 1 },
    { path: 'red', perkID: 'R2', parentPerk: 'R1', direction: 1 },
    { path: 'red', perkID: 'R3', parentPerk: 'R2', direction: 0 },
    { path: 'red', perkID: 'R4', parentPerk: 'R3', direction: 2 },
    { path: 'red', perkID: 'R5', parentPerk: 'R4', direction: 4 },
    { path: 'red', perkID: 'R6', parentPerk: 'R4', direction: 2 },
    { path: 'red', perkID: 'R7', parentPerk: 'R5', direction: 2 },
    { path: 'blue', perkID: 'B1', parentPerk: 'Root', direction: 2 },
    { path: 'blue', perkID: 'B2', parentPerk: 'B1', direction: 3 },
    { path: 'blue', perkID: 'B3', parentPerk: 'B1', direction: 1 },
    { path: 'blue', perkID: 'B4', parentPerk: 'B2', direction: 1 },
    { path: 'blue', perkID: 'B5', parentPerk: 'B4', direction: 3 },
    { path: 'blue', perkID: 'B6', parentPerk: 'B4', direction: 1 },
    { path: 'blue', perkID: 'B7', parentPerk: 'B6', direction: 3 },
    { path: 'yellow', perkID: 'Y1', parentPerk: 'Root', direction: 3 },
    { path: 'yellow', perkID: 'Y2', parentPerk: 'Y1', direction: 4 },
    { path: 'yellow', perkID: 'Y3', parentPerk: 'Y1', direction: 3 },
    { path: 'yellow', perkID: 'Y4', parentPerk: 'Y2', direction: 3 },
    { path: 'yellow', perkID: 'Y5', parentPerk: 'Y3', direction: 2 },
    { path: 'yellow', perkID: 'Y6', parentPerk: 'Y5', direction: 4 },
    { path: 'yellow', perkID: 'Y7', parentPerk: 'Y6', direction: 3 },
    { path: 'lime', perkID: 'L1', parentPerk: 'Root', direction: 4 },
    { path: 'lime', perkID: 'L2', parentPerk: 'L1', direction: 4 },
    { path: 'lime', perkID: 'L3', parentPerk: 'L2', direction: 3 },
    { path: 'purple', perkID: 'P1', parentPerk: 'Root', direction: 5 },
    { path: 'purple', perkID: 'P2', parentPerk: 'P1', direction: 5 },
    { path: 'purple', perkID: 'P3', parentPerk: 'P1', direction: 4 },
    { path: 'purple', perkID: 'P4', parentPerk: 'P3', direction: 5 },
    { path: 'purple', perkID: 'P5', parentPerk: 'P4', direction: 6 },
    { path: 'purple', perkID: 'P6', parentPerk: 'P5', direction: 6 },
    { path: 'purple', perkID: 'P7', parentPerk: 'P5', direction: 4 },
    { path: 'orange', perkID: 'O1', parentPerk: 'Root', direction: 6 },
    { path: 'orange', perkID: 'O2', parentPerk: 'O1', direction: 5 },
    { path: 'orange', perkID: 'O3', parentPerk: 'O2', direction: 5 },
    { path: 'orange', perkID: 'O4', parentPerk: 'O3', direction: 6 },
    { path: 'orange', perkID: 'O5', parentPerk: 'O3', direction: 7 },
    { path: 'orange', perkID: 'O6', parentPerk: 'O4', direction: 6 },
    { path: 'orange', perkID: 'O7', parentPerk: 'O5', direction: 7 },
    { path: 'green', perkID: 'G1', parentPerk: 'Root', direction: 7 },
    { path: 'green', perkID: 'G2', parentPerk: 'G1', direction: 6 },
    { path: 'green', perkID: 'G3', parentPerk: 'G2', direction: 5 },
    { path: 'white', perkID: 'W1', parentPerk: 'Root', direction: 0 },
    { path: 'white', perkID: 'W2', parentPerk: 'W1', direction: 1 },
    { path: 'white', perkID: 'W3', parentPerk: 'W1', direction: 0 },
    { path: 'white', perkID: 'W4', parentPerk: 'W1', direction: 7 },
    { path: 'white', perkID: 'W5', parentPerk: 'W2', direction: 0 },
    { path: 'white', perkID: 'W6', parentPerk: 'W3', direction: 0 },
    { path: 'white', perkID: 'W7', parentPerk: 'W4', direction: 0 },
    { path: 'white', perkID: 'W8', parentPerk: 'W6', direction: 0 },
    { path: 'white', perkID: 'W9', parentPerk: 'W8', direction: 0 },
    { path: 'white', perkID: 'W10', parentPerk: 'W9', direction: 0 },
    { path: 'burgundy', perkID: 'Bu1', parentPerk: 'W5', direction: 1 },
    { path: 'burgundy', perkID: 'Bu2', parentPerk: 'Bu1', direction: 2 },
    { path: 'burgundy', perkID: 'Bu3', parentPerk: 'Bu2', direction: 2 },
    { path: 'teal', perkID: 'T1', parentPerk: 'W10', direction: 6 },
    { path: 'teal', perkID: 'T2', parentPerk: 'T1', direction: 4 },
    { path: 'teal', perkID: 'T3', parentPerk: 'T2', direction: 4 },
    { path: 'teal', perkID: 'T4', parentPerk: 'T3', direction: 5 },
    { path: 'teal', perkID: 'T5', parentPerk: 'T4', direction: 0 },
    { path: 'teal', perkID: 'T6', parentPerk: 'T4', direction: 7 },
    { path: 'teal', perkID: 'T7', parentPerk: 'T6', direction: 0 }
];

const perkPaths =
[
    'red',
    'blue',
    'yellow',
    'lime',
    'purple',
    'orange',
    'green',
    'white',
    'burgundy',
    'teal'
];

const perkColors =
{
    neutral: '#585858',
    red: '#FE3563',
    blue: '#00ACFF',
    yellow: '#FEE23B',
    lime: '#DEFC3A',
    purple: '#CA70FE',
    orange: '#FD722F',
    green: '#24E265',
    white: '#FFFFFF',
    burgundy: '#D9558D',
    teal: '#50CBE1',
    infinity: '#FBF58E'
}

// localStorage.removeItem('ISEPSperks');
const perkPanel =
{
    width: 0,
    height: 0,
    xR: { min: 0, max: 0, range: 0, center: 0 },
    yR: { min: 0, max: 0, range: 0, center: 0 },
    panelCSS: null
}

const blankPerkSave =
{
    nodes: [],
    totalPerks: 0,
    white: 0,
    red: 0,
    blue: 0,
    yellow: 0,
    lime: 0,
    purple: 0,
    orange: 0,
    green: 0,
    burgundy: 0,
    teal: 0,
    infinity: 0
};

const perkData = JSON.parse(localStorage.getItem('ISEPSperks')) || blankPerkSave;

const perkNodes = perkData.nodes;

function constructPerkPanel(width, height)
{
    perkPanel.width = width;
    perkPanel.height = height;
    perkPanel.xR = { min: 0, max: 0, range: 0, center: 0 };
    perkPanel.yR = { min: 0, max: 0, range: 0, center: 0 };
    
    if (perkNodes.length === 0)
    {
        const rootNode = { perkID: 'Root', xPos: 0, yPos: 0, color: 'black' };
        perkNodes.push(rootNode);

        perkList.forEach(perk =>
            {
                let fromPoint = { x: 0, y: 0 };
                perkNodes.forEach(node => {
                    if (node.perkID === perk.parentPerk) 
                    { fromPoint.x = node.xPos; fromPoint.y = node.yPos; }
                });
                const distance = perk.parentPerk === 'Root' ? 2 : 1;
                const angle = perk.direction / 4 * Math.PI;
                const xPos = Math.cos(angle) * distance + fromPoint.x;
                const yPos = -1 * Math.sin(angle) * distance + fromPoint.y;
            
                const newNode = { path: perk.path, perkID: perk.perkID, xPos, yPos, color: perkColors[perk.path], selected: false };
                perkNodes.push(newNode);
            });
    } 
    else if (perkNodes.length < perkList.length)
    {
        perkList.forEach(perk =>
            {
                let nodeExists = false;
                for (let i = 0; i < perkNodes.length; i++)
                {
                    if (perkNodes[i].perkID === perk.perkID)
                    {
                        nodeExists = true;
                        break;
                    }
                }
                if (!nodeExists)
                {
                    let fromPoint = { x: 0, y: 0 };
                    perkNodes.forEach(node => {
                        if (node.perkID === perk.parentPerk) 
                        { fromPoint.x = node.xPos; fromPoint.y = node.yPos; }
                    });
                    const distance = perk.parentPerk === 'Root' ? 2 : 1;
                    const angle = perk.direction / 4 * Math.PI;
                    const xPos = Math.cos(angle) * distance + fromPoint.x;
                    const yPos = -1 * Math.sin(angle) * distance + fromPoint.y;
                
                    const newNode = { path: perk.path, perkID: perk.perkID, xPos, yPos, color: perkColors[perk.path], selected: false };
                    perkNodes.push(newNode);
                }
            });
    }

    perkNodes.forEach(node =>
        {
            perkPanel.xR.min = Math.min(perkPanel.xR.min, node.xPos);
            perkPanel.xR.max = Math.max(perkPanel.xR.max, node.xPos);
            perkPanel.yR.min = Math.min(perkPanel.yR.min, node.yPos);
            perkPanel.yR.max = Math.max(perkPanel.yR.max, node.yPos);
        });

    perkPanel.xR.range = perkPanel.xR.max - perkPanel.xR.min;
    perkPanel.yR.range = perkPanel.yR.max - perkPanel.yR.min;
    perkPanel.xR.center = perkPanel.xR.min + (perkPanel.xR.range / 2);
    perkPanel.yR.center = perkPanel.yR.min + (perkPanel.yR.range / 2);
    const scaleRange = Math.max(perkPanel.xR.range, perkPanel.yR.range) / 0.95;
    console.log(scaleRange);

    const panelElem = document.createElement('div');
    document.body.append(panelElem);
    panelElem.classList.add('panel');
    panelElem.style.width = `${perkPanel.width}px`;
    panelElem.style.height = `${perkPanel.height}px`;
    perkPanel.elem = panelElem;

    const winDim = Math.min(perkPanel.width, perkPanel.height);

    perkNodes.forEach(node =>
        {
            if (node.perkID !== 'Root')
            {
                const realPos = [((node.xPos - perkPanel.xR.center) / scaleRange) * winDim + (perkPanel.height / 2), ((node.yPos - perkPanel.yR.center) / scaleRange) * winDim + (perkPanel.width / 2)];
                const nodeElem = document.createElement('label');
                panelElem.appendChild(nodeElem);
                nodeElem.classList.add('perkSelector');
                nodeElem.classList.add(`${node.path}Path`);
                if (node.selected) 
                { 
                    nodeElem.classList.add('selected');
                    nodeElem.style.backgroundColor = node.color;
                }
                else
                {
                    nodeElem.style.backgroundColor = perkColors.neutral;
                }
                nodeElem.setAttribute('id', `perk${node.perkID}`);
                nodeElem.innerText = node.perkID;
                nodeElem.style.top = `${Math.round(realPos[1])}px`;
                nodeElem.style.left = `${Math.round(realPos[0])}px`;
                nodeElem.addEventListener('click', toggleSelection);
                node.elem = nodeElem;
            }
        });

    const infPos = [((-perkPanel.xR.center) / scaleRange) * winDim + (perkPanel.width / 2), ((-perkPanel.yR.center) / scaleRange) * winDim + (perkPanel.height / 2)];
    
    const infInput = document.createElement('input');
    infInput.type = 'text';
    infInput.classList.add('infinityPerk');
    infInput.setAttribute('id', 'perkInfinity');
    panelElem.appendChild(infInput);
    infInput.style.left = `${infPos[0] - (infInput.offsetWidth / 2)}px`;
    infInput.style.top = `${infPos[1]}px`;
    infInput.value = perkData.infinity;
    infInput.addEventListener('change', adjustInfPerk);

    const infLabel = document.createElement('label');
    infLabel.innerText = 'Infinity';
    infLabel.setAttribute('for', 'perkInfinity');
    panelElem.appendChild(infLabel);
    infLabel.style.left = `${infPos[0] - (infLabel.offsetWidth / 2)}px`;
    infLabel.style.top = `${infPos[1] - infLabel.offsetHeight}px`;

    perkPanel.infElem = [infInput, infLabel];

    panelResizeFunction = resizePerkPanel;
    destroyCurrentPanel = destroyPerkPanel;

    setPerkCSS(winDim);
}

function resizePerkPanel(width, height)
{
    perkPanel.width = width;
    perkPanel.height = height;
    perkPanel.elem.style.width = `${perkPanel.width}px`;
    perkPanel.elem.style.height = `${perkPanel.height}px`;

    const scaleRange = Math.max(perkPanel.xR.range, perkPanel.yR.range) / 0.99;
    const winDim = Math.min(perkPanel.width, perkPanel.height);

    perkNodes.forEach(node =>
        {
            if (node.perkID !== 'Root')
            {
                const realPos = [((node.xPos - perkPanel.xR.center) / scaleRange) * winDim + (perkPanel.width / 2) - (node.elem.offsetWidth / 2), ((node.yPos - perkPanel.yR.center) / scaleRange) * winDim + (perkPanel.height / 2) - (node.elem.offsetHeight / 2)];
                node.elem.style.top = `${Math.round(realPos[1])}px`;
                node.elem.style.left = `${Math.round(realPos[0])}px`;
            }
        });

    const infPos = [((-perkPanel.xR.center) / scaleRange) * winDim + (perkPanel.width / 2), ((-perkPanel.yR.center) / scaleRange) * winDim + (perkPanel.height / 2)];
    perkPanel.infElem[0].style.left = `${infPos[0] - (perkPanel.infElem[0].offsetWidth / 2)}px`;
    perkPanel.infElem[0].style.top = `${infPos[1]}px`;
    perkPanel.infElem[1].style.left = `${infPos[0] - (perkPanel.infElem[1].offsetWidth / 2)}px`;
    perkPanel.infElem[1].style.top = `${infPos[1] - perkPanel.infElem[1].offsetHeight}px`;

    setPerkCSS(winDim);
}

function setPerkCSS(winDim)
{
    if (perkPanel.panelCSS) document.body.removeChild(perkPanel.panelCSS);

    const newCSS = document.createElement('style');
    document.body.append(newCSS);
    const newStyleSheet = newCSS.sheet;

    let selector = '.perkSelector';
    let sizing = [Math.round(winDim / 18), Math.round(winDim / 36)];
    let properties =
    [
        'position: absolute;\n',
        'color: white;\n',
        `width: ${sizing[0]}px;\n`,
        `height: ${sizing[0]}px;\n`,
        `line-height: ${sizing[0]}px;\n`,
        `border-radius: ${sizing[1]}px;\n`,
        'text-align: center;\n',
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.infinityPerk';
    properties = 
    [
        'position: absolute;\n',
        `width: ${sizing[0]}px;\n`,
        `height: ${sizing[0]}px;\n`,
        'text-align: center;\n',
        'color: black;\n',
        `background-color: ${perkColors.infinity};\n`,
        `font-size: ${sizing[1]}px;\n`,
        'font-family: "Syncopate";\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.infinityPerk + label';
    properties =
    [
        'position: absolute;\n',
        `line-height: ${sizing[0]}px;\n`,
        `padding: 0px ${Math.round(sizing[1] / 2)}px;\n`,
        `border-radius: ${sizing[0]}px;\n`,
        `color: ${perkColors.infinity};\n`,
        `font-size: ${sizing[1]}px;\n`,
        `box-shadow: 0px 0px 4px 2px ${perkColors.infinity}, inset 0px 0px 3px 1px ${perkColors.infinity};\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    for (let i = 0; i < perkPaths.length; i++)
    {
        selector = `.${perkPaths[i]}Path:hover`;
        properties =
        [
            `box-shadow: 0px 0px 8px 4px ${perkColors[perkPaths[i]]}, inset 0px 0px 6px 2px ${perkColors[perkPaths[i]]};\n`
        ].join('');
        newStyleSheet.insertRule(`${selector} { ${properties} }`);

        selector = `.${perkPaths[i]}Path.selected`;
        properties =
        [
            'color: black;\n',
            `background-color: ${perkColors[perkPaths[i]]};\n`
        ].join('');
        newStyleSheet.insertRule(`${selector} { ${properties} }`);
    }

    perkPanel.panelCSS = newCSS;
}

function toggleSelection(e)
{
    perkNodes.forEach(node => 
        {
            if (e.target.id === `perk${node.perkID}`) 
            { 
                node.selected = !node.selected;
                if (node.selected)
                {
                    node.elem.classList.add('selected');
                    node.elem.style.backgroundColor = node.color;
                    perkData.totalPerks++;
                    perkData[node.path]++;
                } else {
                    node.elem.classList.remove('selected');
                    node.elem.style.backgroundColor = perkColors.neutral;
                    perkData.totalPerks--;
                    perkData[node.path]--;
                }
            }
        });

    perkData.nodes = perkNodes;
    console.log(perkData);
    localStorage.setItem('ISEPSperks', JSON.stringify(perkData));
}

function perkIsSelected(perkID)
{
    let answer = false;
    perkNodes.forEach(node =>
        {
            if (node.perkID === perkID && node.selected) { answer = true; }
        });
    return answer;
}

function adjustInfPerk(e)
{
    const numCheck = parseInt(e.target.value)
    if (numCheck === NaN) { e.target.value = perkData.infinity; }
    else
    {
        if (numCheck < 0) { e.target.value = perkData.infinity; }
        else
        {
            const prevValue = perkData.infinity;
            perkData.infinity = numCheck;
            perkData.totalPerks += numCheck - prevValue;
        }
    }

    console.log(perkData);
    localStorage.setItem('ISEPSperks', JSON.stringify(perkData));
}

function destroyPerkPanel()
{
    document.body.removeChild(perkPanel.elem);
    perkPanel.elem = null;
    document.body.removeChild(perkPanel.panelCSS);
    perkPanel.panelCSS = null;
}

function perkSelected(perkID)
{
    for (let index = 0; index < perkData.nodes.length; index++)
    {
        if (perkData.nodes[index].perkID === perkID) return perkData.nodes[index].selected;
    }
}
