let dcmCosts = [];

function refreshDCMCosts()
{
    dcmCosts =
    [
        (perkSelected('W1') ? 1e6 : 1), (perkSelected('W2') ? 1e10 : 10), (perkSelected('W3') ? 5e10 : 100),
        (perkSelected('W5') ? 5e15 : 1000), (perkSelected('W6') ? 2.5e16 : 1e4), 1e5, 
        1e6, 1e7, 1e8,
        1e9, 1e10, 1e11,
        1e12, 1e13, 1e14,
        1e16, 1e18, 1e20,
        1e22, 1e24, 1e26,
        1e29, 1e31, 1e33,
        1e35, 1e37, 1e39,
        1e41, 1e43, 1e45,
        1e47, 1e49, 1e51,
        1e53, 1e55, 1e57,
        1e59, 1e61, 1e63,
        1e66, 1e69, 1e72,
        1e76, 1e80, 1e84,
        1e89, 1e94, 1e99,
        1e105, 1e111, 1e117,
        1e124, 1e131, 1e138,
        1e146, 1e154, 1e162,
        1e170, 1e178, 1e186,
        1e196, 1e206, 1e216,
        1e228, 1e240, 1e252,
        1e266, 1e280, 1e300
    ];
}

const ultimaList =
[
    'energyPrice', 'dataCube',
    'beta', 't1Amp',
    'ceti', 'delta', 't2Amp',
    'epsilon', 'fenix', 't3Amp',
    'gamma', 'helion', 't4Amp',
    'gPoint', 'corvus', 't5Amp',
    'buyers', 'alpha', 't6Amp',
    'ixion', 'emblem', 't7Amp'
];

const ultimaInfo =
{
    tiers: 8,
    energyPrice: { start: 1e25, scale: 5, name: "en price", tier: 1 },
    dataCube: { start: 1e25, scale: 10, name: "data cubes", tier: 1 },
    beta: { start: 1e28, scale: 6, name: "beta", tier: 2 },
    t1Amp: { start: 1e29, scale: 18, name: "tier 1 amp", tier: 2 },
    ceti: { start: 1e36, scale: 7, name: "ceti", tier: 3 },
    delta: { start: 1e36, scale: 8, name: "delta", tier: 3 },
    t2Amp: { start: 1e37, scale: 36, name: "tier 2 amp", tier: 3 },
    epsilon: { start: 1e55, scale: 9, name: "epsilon", tier: 4 },
    fenix: { start: 1e55, scale: 10.1, name: "fenix", tier: 4 },
    t3Amp: { start: 1e56, scale: 72, name: "tier 3 amp", tier: 4 },
    gamma: { start: 1e72, scale: 11, name: "gamma", tier: 5 },
    helion: { start: 1e73, scale: 12, name: "helion", tier: 5 },
    t4Amp: { start: 1e74, scale: 144, name: "tier 4 amp", tier: 5 },
    gPoint: { start: 1e95, scale: 13, name: "g-points", tier: 6 },
    corvus: { start: 1e96, scale: 14, name: "corvus", tier: 6 },
    t5Amp: { start: 1e97, scale: 288, name: "tier 5 amp", tier: 6 },
    buyers: { start: 1e125, scale: 15, name: "buyers", tier: 7 },
    alpha: { start: 1e131, scale: 16, name: "alpha", tier: 7 },
    t6Amp: { start: 1e132, scale: 576, name: "tier 6 amp", tier: 7 },
    ixion: { start: 1e192, scale: 17, name: "ixion", tier: 8 },
    emblem: { start: 1e196, scale: 18, name: "emblems", tier: 8 },
    t7Amp: { start: 1e200, scale: 612, name: "tier 7 amp", tier: 8 },
};

const extractExp = { start: 5e75, scale: 1e9 };

const blankSimResetSave =
{
    dc: { current: new Decimal(0), rate: new Decimal(0) },
    dcm: { current: 0, target: 0 },
    extractExp: { current: 0, target: 0 },
    ultimas:
        {
            energyPrice: { current: 0, target: 0 },
            dataCube: { current: 0, target: 0 },
            beta: { current: 0, target: 0 },
            t1Amp: { current: 0, target: 0 },
            ceti: { current: 0, target: 0 },
            delta: { current: 0, target: 0 },
            t2Amp: { current: 0, target: 0 },
            epsilon: { current: 0, target: 0 },
            fenix: { current: 0, target: 0 },
            t3Amp: { current: 0, target: 0 },
            gamma: { current: 0, target: 0 },
            helion: { current: 0, target: 0 },
            t4Amp: { current: 0, target: 0 },
            gPoint: { current: 0, target: 0 },
            corvus: { current: 0, target: 0 },
            t5Amp: { current: 0, target: 0 },
            buyers: { current: 0, target: 0 },
            alpha: { current: 0, target: 0 },
            t6Amp: { current: 0, target: 0 },
            ixion: { current: 0, target: 0 },
            emblem: { current: 0, target: 0 },
            t7Amp: { current: 0, target: 0 }
        },
    boostPercent: 0,
    dcGoal: { base: 0, boosted: 0 }
}

const simResetData = JSON.parse(localStorage.getItem('ISEPSsimreset')) || blankSimResetSave;

simResetData.dc.current = new Decimal(simResetData.dc.current);
simResetData.dc.rate = new Decimal(simResetData.dc.rate);

const simResetPanel =
{
    width: 0,
    height: 0,
    xR: { min: 0, max: 0, range: 0, center: 0 },
    yR: { min: 0, max: 0, range: 0, center: 0 },
    panelCSS: null
}

function constructSimResetPanel(width, height)
{
    simResetPanel.width = width;
    simResetPanel.height = height;

    const lineHeight = height / 16;

    setSimResetCSS(lineHeight * 0.7);

    const panelElem = document.createElement('div');
    document.body.append(panelElem);
    panelElem.classList.add('panel');
    panelElem.style.width = `${simResetPanel.width}px`;
    panelElem.style.height = `${simResetPanel.height}px`;
    simResetPanel.elem = panelElem;

    const instructLabel = document.createElement('label');
    simResetPanel.elem.appendChild(instructLabel);
    instructLabel.classList.add('ultimaLabel');
    instructLabel.innerText = 'All upgrade inputs are in the form [current level] + [levels to buy]';
    instructLabel.style.top = `0px`;
    instructLabel.style.left = `${simResetPanel.width / 2 - (instructLabel.offsetWidth / 2)}px`;
    simResetPanel.instructElem = instructLabel;

    simResetPanel.dcElem = [];

    const curDCLabel = document.createElement('label');
    simResetPanel.elem.appendChild(curDCLabel);
    curDCLabel.classList.add('inputLabel');
    curDCLabel.innerText = 'DC Stats:';
    curDCLabel.style.top = `${lineHeight * 1.1}px`;
    curDCLabel.style.left = `${lineHeight / 2}px`;
    simResetPanel.dcElem.push(curDCLabel);

    const curDCInput = document.createElement('input');
    curDCInput.type = 'text';
    simResetPanel.elem.appendChild(curDCInput);
    curDCInput.classList.add('wideInput');
    curDCInput.dataset.valueID = 'dc';
    curDCInput.dataset.type = 'current';
    curDCInput.value = simResetData.dc.current;
    curDCInput.style.left = `${curDCLabel.offsetLeft + curDCLabel.offsetWidth + (lineHeight / 2)}px`;
    curDCInput.style.top = `${lineHeight * 1.1}px`;
    simResetPanel.dcElem.push(curDCInput);
    curDCInput.addEventListener('change', adjustSimResetValue);

    const dcPlusLabel = document.createElement('label');
    simResetPanel.elem.appendChild(dcPlusLabel);
    dcPlusLabel.classList.add('inputLabel');
    dcPlusLabel.innerText = '+';
    dcPlusLabel.style.top = `${lineHeight * 1.1}px`;
    dcPlusLabel.style.left = `${curDCInput.offsetLeft + curDCInput.offsetWidth + (lineHeight / 2)}px`;
    simResetPanel.dcElem.push(dcPlusLabel);

    const dcRateInput = document.createElement('input');
    dcRateInput.type = 'text';
    simResetPanel.elem.appendChild(dcRateInput);
    dcRateInput.classList.add('wideInput');
    dcRateInput.dataset.valueID = 'dc';
    dcRateInput.dataset.type = 'rate';
    dcRateInput.value = simResetData.dc.rate;
    dcRateInput.style.left = `${dcPlusLabel.offsetLeft + dcPlusLabel.offsetWidth + (lineHeight / 2)}px`;
    dcRateInput.style.top = `${lineHeight * 1.1}px`;
    simResetPanel.dcElem.push(dcRateInput);
    dcRateInput.addEventListener('change', adjustSimResetValue);

    const dcMinLabel = document.createElement('label');
    simResetPanel.elem.appendChild(dcMinLabel);
    dcMinLabel.classList.add('inputLabel');
    dcMinLabel.innerText = '/ min';
    dcMinLabel.style.top = `${lineHeight * 1.1}px`;
    dcMinLabel.style.left = `${dcRateInput.offsetLeft + dcRateInput.offsetWidth + (lineHeight / 2)}px`;
    simResetPanel.dcElem.push(dcMinLabel);

    simResetPanel.dcmElem = [];

    const dcmLabel = document.createElement('label');
    simResetPanel.elem.appendChild(dcmLabel);
    dcmLabel.classList.add('inputLabel');
    dcmLabel.innerText = 'DC Milestones:';
    dcmLabel.style.top = `${lineHeight * 2.1}px`;
    dcmLabel.style.left = `${lineHeight / 2}px`;
    simResetPanel.dcmElem.push(dcmLabel);

    const curDCMInput = document.createElement('input');
    curDCMInput.type = 'text';
    simResetPanel.elem.appendChild(curDCMInput);
    curDCMInput.classList.add('inputBox');
    curDCMInput.dataset.valueID = 'dcm';
    curDCMInput.dataset.type = 'current';
    curDCMInput.value = simResetData.dcm.current;
    curDCMInput.style.left = `${dcmLabel.offsetLeft + dcmLabel.offsetWidth + (lineHeight / 2)}px`;
    curDCMInput.style.top = `${lineHeight * 2.1}px`;
    simResetPanel.dcElem.push(curDCMInput);
    curDCMInput.addEventListener('change', adjustSimResetValue);

    const dcmPlusLabel = document.createElement('label');
    simResetPanel.elem.appendChild(dcmPlusLabel);
    dcmPlusLabel.classList.add('inputLabel');
    dcmPlusLabel.innerText = '+';
    dcmPlusLabel.style.top = `${lineHeight * 2.1}px`;
    dcmPlusLabel.style.left = `${curDCMInput.offsetLeft + curDCMInput.offsetWidth + (lineHeight / 2)}px`;
    simResetPanel.dcElem.push(dcmPlusLabel);

    const targetDCMInput = document.createElement('input');
    targetDCMInput.type = 'text';
    simResetPanel.elem.appendChild(targetDCMInput);
    targetDCMInput.classList.add('inputBox');
    targetDCMInput.dataset.valueID = 'dcm';
    targetDCMInput.dataset.type = 'target';
    targetDCMInput.value = simResetData.dcm.target;
    targetDCMInput.style.left = `${dcmPlusLabel.offsetLeft + dcmPlusLabel.offsetWidth + (lineHeight / 2)}px`;
    targetDCMInput.style.top = `${lineHeight * 2.1}px`;
    simResetPanel.dcElem.push(targetDCMInput);
    targetDCMInput.addEventListener('change', adjustSimResetValue);

    simResetPanel.extractExpElem = [];

    const extractExpLabel = document.createElement('label');
    simResetPanel.elem.appendChild(extractExpLabel);
    extractExpLabel.classList.add('inputLabel');
    extractExpLabel.innerText = 'Extraction Expansion:';
    extractExpLabel.style.top = `${lineHeight * 3.1}px`;
    extractExpLabel.style.left = `${lineHeight / 2}px`;
    simResetPanel.extractExpElem.push(extractExpLabel);

    const curExpInput = document.createElement('input');
    curExpInput.type = 'text';
    simResetPanel.elem.appendChild(curExpInput);
    curExpInput.classList.add('inputBox');
    curExpInput.dataset.valueID = 'extractExp';
    curExpInput.dataset.type = 'current';
    curExpInput.value = simResetData.extractExp.current;
    curExpInput.style.left = `${extractExpLabel.offsetLeft + extractExpLabel.offsetWidth + (lineHeight / 2)}px`;
    curExpInput.style.top = `${lineHeight * 3.1}px`;
    simResetPanel.extractExpElem.push(curExpInput);
    curExpInput.addEventListener('change', adjustSimResetValue);

    const expPlusLabel = document.createElement('label');
    simResetPanel.elem.appendChild(expPlusLabel);
    expPlusLabel.classList.add('inputLabel');
    expPlusLabel.innerText = '+';
    expPlusLabel.style.top = `${lineHeight * 3.1}px`;
    expPlusLabel.style.left = `${curExpInput.offsetLeft + curExpInput.offsetWidth + (lineHeight / 2)}px`;
    simResetPanel.extractExpElem.push(expPlusLabel);

    const targetExpInput = document.createElement('input');
    targetExpInput.type = 'text';
    simResetPanel.elem.appendChild(targetExpInput);
    targetExpInput.classList.add('inputBox');
    targetExpInput.dataset.valueID = 'extractExp';
    targetExpInput.dataset.type = 'target';
    targetExpInput.value = simResetData.extractExp.target;
    targetExpInput.style.left = `${expPlusLabel.offsetLeft + expPlusLabel.offsetWidth + (lineHeight / 2)}px`;
    targetExpInput.style.top = `${lineHeight * 3.1}px`;
    simResetPanel.extractExpElem.push(targetExpInput);
    targetExpInput.addEventListener('change', adjustSimResetValue);

    const ultimasLabel = document.createElement('label');
    simResetPanel.elem.appendChild(ultimasLabel);
    ultimasLabel.classList.add('subHeader');
    ultimasLabel.innerText = 'Ultimas';
    ultimasLabel.style.top = `${lineHeight * 4.1}px`;
    ultimasLabel.style.left = `${lineHeight / 2}px`;
    simResetPanel.ultimasLabElem = ultimasLabel;

    let ultimaIndex = 0;
    simResetPanel.ultimaTierElems = [];

    for (let i = 0; i < ultimaInfo.tiers; i++)
    {
        simResetPanel.ultimaTierElems.push([]);

        const tierLabel = document.createElement('label');
        simResetPanel.elem.appendChild(tierLabel);
        tierLabel.classList.add('ultimaLabel');
        tierLabel.innerText = `Tier ${i + 1}:`;
        tierLabel.style.top = `${lineHeight * (5.1 + i)}px`;
        tierLabel.style.left = `${lineHeight * 2}px`;
        simResetPanel.ultimaTierElems[i].push(tierLabel);

        for (let j = 0; j < 3; j++)
        {
            const curUltima = ultimaList[ultimaIndex];
            if (ultimaInfo[curUltima].tier > (i + 1)) { break; }

            const idLabel = document.createElement('label');
            simResetPanel.elem.appendChild(idLabel);
            idLabel.classList.add('ultimaLabel');
            idLabel.innerText = ultimaInfo[curUltima].name;
            idLabel.style.top = `${lineHeight * (5.1 + i)}px`;
            const prevElem = simResetPanel.ultimaTierElems[i][simResetPanel.ultimaTierElems[i].length - 1]
            idLabel.style.left = `${prevElem.offsetLeft + prevElem.offsetWidth + lineHeight}px`;
            simResetPanel.ultimaTierElems[i].push(idLabel);

            const curLabel = document.createElement('input');
            curLabel.type = 'text';
            simResetPanel.elem.appendChild(curLabel);
            curLabel.classList.add('ultimaInput');
            curLabel.dataset.valueID = 'ultima';
            curLabel.dataset.ultima = curUltima;
            curLabel.dataset.type = 'current';
            curLabel.value = simResetData.ultimas[curUltima].current;
            curLabel.style.left = `${idLabel.offsetLeft + idLabel.offsetWidth + (lineHeight / 5)}px`;
            curLabel.style.top = `${lineHeight * (5.1 + i)}px`;
            simResetPanel.ultimaTierElems[i].push(curLabel);
            curLabel.addEventListener('change', adjustSimResetValue);
        
            const plusLabel = document.createElement('label');
            simResetPanel.elem.appendChild(plusLabel);
            plusLabel.classList.add('ultimaLabel');
            plusLabel.innerText = '+';
            plusLabel.style.top = `${lineHeight * (5.1 + i)}px`;
            plusLabel.style.left = `${curLabel.offsetLeft + curLabel.offsetWidth + (lineHeight / 5)}px`;
            simResetPanel.ultimaTierElems[i].push(plusLabel);
        
            const targetLabel = document.createElement('input');
            targetLabel.type = 'text';
            simResetPanel.elem.appendChild(targetLabel);
            targetLabel.classList.add('ultimaInput');
            targetLabel.dataset.valueID = 'ultima';
            targetLabel.dataset.ultima = curUltima;
            targetLabel.dataset.type = 'target';
            targetLabel.value = simResetData.ultimas[curUltima].target;
            targetLabel.style.left = `${plusLabel.offsetLeft + plusLabel.offsetWidth + (lineHeight / 5)}px`;
            targetLabel.style.top = `${lineHeight * (5.1 + i)}px`;
            simResetPanel.ultimaTierElems[i].push(targetLabel);
            targetLabel.addEventListener('change', adjustSimResetValue);

            ultimaIndex++;
        }
    }

    calculateDCGoal();

    simResetPanel.dcGoalElem = [];

    const dcGoalLabel = document.createElement('label');
    simResetPanel.elem.appendChild(dcGoalLabel);
    dcGoalLabel.classList.add('inputLabel');
    dcGoalLabel.innerText = `DC Goal: ${dcgString('base')} +`;
    dcGoalLabel.style.top = `${lineHeight * (5.1 + ultimaInfo.tiers)}px`;
    dcGoalLabel.style.left = `${lineHeight / 2}px`;
    simResetPanel.dcGoalElem.push(dcGoalLabel);

    const boostInput = document.createElement('input');
    boostInput.type = 'text';
    simResetPanel.elem.appendChild(boostInput);
    boostInput.classList.add('inputBox');
    boostInput.dataset.valueID = 'boostPercent';
    boostInput.value = simResetData.boostPercent;
    boostInput.style.left = `${dcGoalLabel.offsetLeft + dcGoalLabel.offsetWidth + (lineHeight / 5)}px`;
    boostInput.style.top = `${lineHeight * (5.1 + ultimaInfo.tiers)}px`;
    simResetPanel.dcGoalElem.push(boostInput);
    boostInput.addEventListener('change', adjustSimResetValue);

    const boostedLabel = document.createElement('label');
    simResetPanel.elem.appendChild(boostedLabel);
    boostedLabel.classList.add('inputLabel');
    boostedLabel.innerText = `% = ${dcgString('boosted')}`;
    boostedLabel.style.top = `${lineHeight * (5.1 + ultimaInfo.tiers)}px`;
    boostedLabel.style.left = `${boostInput.offsetLeft + boostInput.offsetWidth + (lineHeight / 5)}px`;
    simResetPanel.dcGoalElem.push(boostedLabel);

    const etaLabel = document.createElement('label');
    simResetPanel.elem.appendChild(etaLabel);
    etaLabel.classList.add('inputLabel');
    etaLabel.innerText = `Time to Goal: ${calculateETA()}`;
    etaLabel.style.top = `${lineHeight * (6.1 + ultimaInfo.tiers)}px`;
    etaLabel.style.left = `${lineHeight / 2}px`;
    simResetPanel.etaLabel = etaLabel;


    panelResizeFunction = resizeSimResetPanel;
    destroyCurrentPanel = destroySimResetPanel;
}

function resizeSimResetPanel(width, height)
{
    simResetPanel.width = width;
    simResetPanel.height = height;

    simResetPanel.elem.style.width = `${simResetPanel.width}px`;
    simResetPanel.elem.style.height = `${simResetPanel.height}px`;

    const lineHeight = height / 16;

    setSimResetCSS(lineHeight * 0.7);
}

function setSimResetCSS(lineHeight)
{
    if (simResetPanel.panelCSS) document.body.removeChild(simResetPanel.panelCSS);

    const newCSS = document.createElement('style');
    document.body.append(newCSS);
    const newStyleSheet = newCSS.sheet;

    const dcColor = '#FFB955';

    let selector = '.inputLabel';
    let properties =
    [
        'position: absolute;\n',
        `color: ${dcColor};\n`,
        `font-size: ${lineHeight}px;\n`,
        `line-height: ${lineHeight}px;\n`,
        'text-align: center;\n',
        'margin: auto;\n',
        `padding: ${lineHeight / 10}px;\n`,
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.ultimaLabel';
    properties =
    [
        'position: absolute;\n',
        `color: ${dcColor};\n`,
        `font-size: ${lineHeight * 0.6}px;\n`,
        `line-height: ${lineHeight * 0.6}px;\n`,
        'text-align: center;\n',
        'margin: auto;\n',
        `padding: ${lineHeight / 12}px;\n`,
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.subHeader';
    properties =
    [
        'position: absolute;\n',
        `color: ${dcColor};\n`,
        `font-size: ${lineHeight}px;\n`,
        `line-height: ${lineHeight}px;\n`,
        'text-align: center;\n',
        'margin: auto;\n',
        `padding: ${lineHeight / 10}px;\n`,
        `text-shadow: 0px 0px ${lineHeight / 3}px ${dcColor};\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.wideInput';
    properties =
    [
        'position: absolute;\n',
        'background-color: black;\n',
        `color: ${dcColor};\n`,
        `height: ${lineHeight}px;\n`,
        `width: ${lineHeight * 6}px;\n`,
        `font-size: ${lineHeight * 0.9}px;\n`,
        `line-height: ${lineHeight * 0.9}px;\n`,
        'text-align: center;\n',
        'margin: auto;\n',
        'font-family: "Syncopate";\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.inputBox';
    properties =
    [
        'position: absolute;\n',
        'background-color: black;\n',
        `color: ${dcColor};\n`,
        `height: ${lineHeight}px;\n`,
        `width: ${lineHeight * 3}px;\n`,
        `font-size: ${lineHeight * 0.9}px;\n`,
        `line-height: ${lineHeight * 0.9}px;\n`,
        'text-align: center;\n',
        'margin: auto;\n',
        'font-family: "Syncopate";\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.ultimaInput';
    properties =
    [
        'position: absolute;\n',
        'background-color: black;\n',
        `color: ${dcColor};\n`,
        `height: ${lineHeight * 0.6}px;\n`,
        `width: ${lineHeight * 1.8}px;\n`,
        `font-size: ${lineHeight * 0.54}px;\n`,
        `line-height: ${lineHeight * 0.54}px;\n`,
        'text-align: center;\n',
        'margin: auto;\n',
        'font-family: "Syncopate";\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    simResetPanel.panelCSS = newCSS;
}

function destroySimResetPanel()
{
    document.body.removeChild(simResetPanel.elem);
    perkPanel.elem = null;
    document.body.removeChild(simResetPanel.panelCSS);
    simResetPanel.panelCSS = null;
}

function adjustSimResetValue(e)
{
    const target = e.target.dataset.valueID;
    const valType = (target === 'boostPercent') ? '' : e.target.dataset.type;
    const ultima = (target === 'ultima') ? e.target.dataset.ultima : '';
    
    if (target === 'dc')
    {
        const oldValue = simResetData[target][valType];

        let dValue = new Decimal(0);
        try 
        { 
            dValue = new Decimal(e.target.value);
            if (dValue.lessThan(0)) { e.target.value = oldValue; }
            else { simResetData[target][valType] = dValue; }
        }
        catch(err) { e.target.value = oldValue; }
    }
    else if (target === 'ultima')
    {
        const oldValue = simResetData.ultimas[ultima][valType];

        const newValue = parseInt(e.target.value)

        if (newValue === NaN) { e.target.value = oldValue; }
        else
        {
            if (newValue < 0) { e.target.value = oldValue; }
            else
            {
                simResetData.ultimas[ultima][valType] = newValue;
            }
        }
    }
    else if (target === 'boostPercent')
    {
        const oldValue = simResetData.boostPercent;

        const newValue = parseInt(e.target.value)

        if (newValue === NaN) { e.target.value = oldValue; }
        else
        {
            if (newValue < 0) { e.target.value = oldValue; }
            else
            {
                simResetData.boostPercent = newValue;
            }
        }

        console.log(simResetData.boostPercent);
    }
    else
    {
        const oldValue = simResetData[target][valType];

        const newValue = parseInt(e.target.value)

        if (newValue === NaN) { e.target.value = oldValue; }
        else
        {
            if (newValue < 0) { e.target.value = oldValue; }
            else
            {
                simResetData[target][valType] = newValue;
            }
        }
    }

    calculateDCGoal();

    const lineHeight = simResetPanel.height / 16;

    simResetPanel.dcGoalElem[0].innerText = `DC Goal: ${dcgString('base')} +`;

    simResetPanel.dcGoalElem[1].style.left = `${simResetPanel.dcGoalElem[0].offsetLeft + simResetPanel.dcGoalElem[0].offsetWidth + (lineHeight / 5)}px`;

    simResetPanel.dcGoalElem[2].innerText = `% = ${dcgString('boosted')}`;
    simResetPanel.dcGoalElem[2].style.left = `${simResetPanel.dcGoalElem[1].offsetLeft + simResetPanel.dcGoalElem[1].offsetWidth + (lineHeight / 5)}px`;

    simResetPanel.etaLabel.innerText = `Time to Goal: ${calculateETA()}`;

    localStorage.setItem('ISEPSsimreset', JSON.stringify(simResetData));
}

function calculateDCGoal()
{
    refreshDCMCosts();

    let dcGoal = new Decimal(0);

    let target = simResetData.dcm.current + simResetData.dcm.target;
    for (let i = simResetData.dcm.current; i < target; i++)
    {
        dcGoal = dcGoal.plus(new Decimal(dcmCosts[i]));
    }

    target = simResetData.extractExp.current + simResetData.extractExp.target;
    for (let i = simResetData.extractExp.current; i < target; i++)
    {
        dcGoal = dcGoal.plus(new Decimal(extractExp.start).times(new Decimal(extractExp.scale).pow(i)));
    }

    for (let ultIndex = 0; ultIndex < ultimaList.length; ultIndex++)
    {
        const curUltima = ultimaList[ultIndex];
        target = simResetData.ultimas[curUltima].current + simResetData.ultimas[curUltima].target;
        for (let i = simResetData.ultimas[curUltima].current; i < target; i++)
        {
            dcGoal = dcGoal.plus(new Decimal(ultimaInfo[curUltima].start).times(new Decimal(ultimaInfo[curUltima].scale).pow(i)));
        }
    }

    simResetData.dcGoal.base = dcGoal;
    simResetData.dcGoal.boosted = dcGoal.times(1 + (simResetData.boostPercent / 100));
}

function calculateETA()
{
    const dcRate = simResetData.dc.rate;
    const curDC = simResetData.dc.current;
    const dcGoal = simResetData.dcGoal.boosted;

    if (dcRate.equals(0)) { return 'Infinite Time'; }
    if (curDC > dcGoal) { return 'Now'; }

    const minutes = dcGoal.minus(curDC).dividedBy(dcRate);
    
    const length = { hour: 60 };
    length.day = length.hour * 24;
    length.week = length.day * 7;
    length.month = length.day * 30;
    length.year = length.day * 365;

    const years = minutes.dividedBy(length.year).floor();
    
    if (years.greaterThan(10)) { return 'Over a Decade'; }

    let remainder = minutes.minus(years.times(length.year));

    const months = remainder.dividedBy(length.month).floor();

    remainder = remainder.minus(months.times(length.month));

    const weeks = remainder.dividedBy(length.week).floor();

    remainder = remainder.minus(weeks.times(length.week));

    const days = remainder.dividedBy(length.day).floor();

    remainder = remainder.minus(days.times(length.day));

    const hours = remainder.dividedBy(length.hour).floor();

    remainder = remainder.minus(hours.times(length.hour)).floor();

    let answer = 
    [
        `${years} year${years > 1 ? 's' : ''}`,
        `${months} month${months > 1 ? 's' : ''}`,
        `${weeks} week${weeks > 1 ? 's' : ''}`,
        `${days} day${days > 1 ? 's' : ''}`
    ].filter(section => section.charAt(0) !== '0').join(', ');

    let time = `${(hours < 10 ? '0' : '') + hours}:${(remainder < 10 ? '0' : '') + remainder}`

    if (answer === '' && time === '00:00') { return 'Now'; }
    else if (answer === '') { return time; }
    else if (time === '00:00') { return answer; }
    else { return `${answer}, ${time}`; }
}

function dcgString(type)
{
    const dcValue = (type === 'base') ? simResetData.dcGoal.base : simResetData.dcGoal.boosted;
    let dcString = dcValue.toString();
    const indE = dcString.indexOf('e');
    const indDot = dcString.indexOf('.');
    if (indE === -1 || indDot === -1 || (indE - indDot) < 4) { return dcString; }

    let mantissa = dcString.substring(0, indDot + 4);
    while (mantissa.charAt(mantissa.length - 1) === '0')
    { mantissa = mantissa.substring(0, mantissa.length - 1); }
    if (mantissa.charAt(mantissa.length - 1) === '.')
    { mantissa = mantissa.substring(0, mantissa.length - 1); }

    return mantissa + dcString.substring(indE, dcString.length);
}