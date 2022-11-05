const outCostTypes =
[
    { name: 'energy', color: [0, 53, 50, 1], max: 1000 },
    { name: 'alpha', color: [0, 62, 40, 1], max: 300 },
    { name: 'beta', color: [217, 62, 40, 1], max: 350 },
    { name: 'ceti', color: [39, 62, 46, 1], max: 400 },
    { name: 'delta', color: [143, 46, 37, 1], max: 450 },
    { name: 'epsilon', color: [283, 42, 42, 1], max: 500 },
    { name: 'fenix', color: [17, 65, 50, 1], max: 550 },
    { name: 'gamma', color: [109, 54, 43, 1], max: 600 },
    { name: 'helion', color: [327, 59, 41, 1], max: 650 },
    { name: 'ixion', color: [191, 60, 45, 1], max: 700 }
];

const specialTypes =
[
    { name: 'ap', color: [15, 58, 49, 1], max: 500, total: (500 * 100), costScales: 0, startCost: 100 },
    { name: 'dc', color: [27, 70, 47, 1], max: 500, total: (500 * 100), costScales: 0, startCost: 100 },
    { name: 'artifacts', color: [150, 50, 43, 1], max: 25, total: (25 * 500), costScales: 0, startCost: 500 },
    { name: 'scientists', color: [205, 43, 42, 1], max: 50, total: (50 * 500), costScales: 0, startCost: 500 },
    { name: 'arch-bots', color: [9, 26, 35, 1], max: 50, total: (50 * 500), costScales: 0, startCost: 500 },
    { name: 'rebirthologists', color: [25, 67, 47, 1], max: 50, total: (50 * 500), costScales: 0, startCost: 500 },
    { name: 'solutions', color: [195, 67, 47, 1], max: 50, total: (50 * 500), costScales: 0, startCost: 500 },
    { name: 'g-points', color: [127, 67, 47, 1], max: 500, total: (500 * 500), costScales: 0, startCost: 500 },
    { name: 'extractions', color: [335, 67, 47, 1], max: 50, total: (50 * 500), costScales: 0, startCost: 500 },
    { name: 'researches', color: [347, 67, 47, 1], max: 50, total: (50 * 500), costScales: 0, startCost: 500 },
    { name: 'dcm', color: [41, 67, 47, 1], max: 50, total: (50 * 500), costScales: 0, startCost: 500 },
    { name: 'sc--booster', color: [200, 74, 49, 1], max: 500, total: (500 * 500), costScales: 0, startCost: 500 },
    { name: 'buyers', color: [124, 54, 39, 1], max: 100, total: (100 * 500), costScales: 0, startCost: 500 },
    { name: 'emblems', color: [200, 51, 26, 1], max: 100, total: (100 * 750), costScales: 0, startCost: 750 },
    { name: 'inf--amp', color: [170, 39, 30, 1], max: 100, total: (100 * 750), costScales: 0, startCost: 750 },
    { name: 'inf--max--lv', color: [285, 76, 40, 1], max: 5, total: (5 * 3000), costScales: 0, startCost: 3000 },
    { name: 'extra--lp', color: [282, 47, 48, 1], max: 250, total: (((2 * 1000) + (5 * 250)) * 250 / 2), costScales: 5, startCost: 1000 },
    { name: 'bulk--em', color: [191, 77, 50, 1], max: 50, total: (((2 * 500) + (50 * 50)) * 50 / 2), costScales: 50, startCost: 500 }
];

const otuSingles =
[
    { name: 'alpha', color: '#D34844', cost: 750 },
    { name: 'beta', color: '#4670D3', cost: 750 },
    { name: 'ceti', color: '#DDBA4B', cost: 750 },
    { name: 'delta', color: '#9CCE77', cost: 750 },
    { name: 'epsilon', color: '#AE4DD1', cost: 750 },
    { name: 'fenix', color: '#DD8B3D', cost: 750 },
    { name: 'gamma', color: '#4DAA42', cost: 750 },
    { name: 'helion', color: '#CA4B8B', cost: 1000 },
    { name: 'ixion', color: '#4BA1CA', cost: 1000 }
];
const otuDuals =
[
    { name: 'a-b', color: [otuSingles[0].color, otuSingles[1].color], cost: 2000 },
    { name: 'b-c', color: [otuSingles[1].color, otuSingles[2].color], cost: 2000 },
    { name: 'c-d', color: [otuSingles[2].color, otuSingles[3].color], cost: 2000 },
    { name: 'd-e', color: [otuSingles[3].color, otuSingles[4].color], cost: 2000 },
    { name: 'e-f', color: [otuSingles[4].color, otuSingles[5].color], cost: 2000 },
    { name: 'f-g', color: [otuSingles[5].color, otuSingles[6].color], cost: 2000 },
    { name: 'g-h', color: [otuSingles[6].color, otuSingles[7].color], cost: 2000 },
    { name: 'h-i', color: [otuSingles[7].color, otuSingles[8].color], cost: 2000 }
];
const otuSpecials =
[
    { name: 'energy--price', color: '#D87368', cost: 750 },
    { name: 'buyers', color: '#68DA6A', cost: 1500 },
    { name: 'ap', color: '#E5E5E5', cost: 1500 },
    { name: 'ege', color: '#7ADA9F', cost: 1500 },
    { name: 'lab', color: '#5870BF', cost: 1500 },
    { name: 'sim', color: '#EEBC62', cost: 1500 },
    { name: 'archive', color: '#BFA665', cost: 1500 },
    { name: 'cot', color: '#954DA3', cost: 1500 },
    { name: 'institute', color: '#B47963', cost: 1500 },
    { name: 'singularity', color: '#39C4D7', cost: 1500 },
    { name: 'g-corp', color: '#64CE83', cost: 1500 },
    { name: 'corvus', color: '#8B4269', cost: 2000 },
    { name: 'tiberius', color: '#397DB4', cost: 2000 },
    { name: 'leveling', color: '#BB44A7', cost: 2000 },
    { name: 'taskmaster', color: '#CDB144', cost: 2000 },
    { name: 'inf--ultima', color: '#E84D72', cost: 3000 },
    { name: 'inf--multi', color: '#44AACD', cost: 3000 },
    { name: 'tycoon', color: '#C27EF5', cost: 3000 },
    { name: 'cost--scaler--dc', color: '#B37082', cost: 5000 },
    { name: 'cost--scaler--sc', color: '#B37082', cost: 5000 }
];

const crystalPanel =
{
    width: 10,
    height: 10,
    panelCSS: null
};

const blankCrystalSave =
{
    output: [],
    cost: [],
    special: [],
    otuSingle: [],
    otuDual: [],
    otuSpec: []
}
for (let i = 0; i < outCostTypes.length; i++)
{
    blankCrystalSave.output.push(0);
    blankCrystalSave.cost.push(0);
}
for (let i = 0; i < specialTypes.length; i++)
{ blankCrystalSave.special.push(0); }
for (let i = 0; i < otuSingles.length; i++)
{ blankCrystalSave.otuSingle.push(false); }
for (let i = 0; i < otuDuals.length; i++)
{ blankCrystalSave.otuDual.push(false); }
for (let i = 0; i < otuSpecials.length; i++)
{ blankCrystalSave.otuSpec.push(false); }

// localStorage.removeItem('ISEPScrystals');
const crystalData = JSON.parse(localStorage.getItem('ISEPScrystals')) || blankCrystalSave;

function constructCrystalPanel(width, height, section)
{
    crystalPanel.width = width;
    crystalPanel.height = height;

    const panelElem = document.createElement('div');
    document.body.append(panelElem);
    panelElem.classList.add('panel');
    panelElem.style.width = `${crystalPanel.width}px`;
    panelElem.style.height = `${crystalPanel.height}px`;
    crystalPanel.elem = panelElem;

    if (section.includes('output')) { constructCOCP(); }
    else if (section.includes('special')) { constructCSP(); }
    else if (section.includes('otu')) { constructCOTUP(); finishOTUP(); }
}

function constructCOCP()
{
    const headerHeight = crystalPanel.height / 16;
    const labelSection = 
    {
        width: crystalPanel.width / 5,
        height: crystalPanel.height - headerHeight
    };
    const inputSection =
    {
        width: crystalPanel.width / 4,
        height: crystalPanel.height - headerHeight
    };
    inputSection.left = crystalPanel.width - inputSection.width;
    const progressSection =
    {
        left: labelSection.width,
        width: crystalPanel.width - (labelSection.width + inputSection.width),
        height: crystalPanel.height - headerHeight
    };
    const lineHeight = Math.min(labelSection.height / outCostTypes.length * 0.8, labelSection.width / 4);
    const dividingHeight = (labelSection.height - (lineHeight * outCostTypes.length)) / (outCostTypes.length + 1);

    setCOCCSS(lineHeight, headerHeight, inputSection.width);

    const mainHeader = document.createElement('label');
    crystalPanel.elem.appendChild(mainHeader);
    mainHeader.innerText = 'Crystal Upgrades';
    mainHeader.classList.add('panelHeader');
    mainHeader.style.left = `${Math.round(progressSection.left + (progressSection.width / 2) - (mainHeader.offsetWidth / 2))}px`;
    mainHeader.style.top = `${Math.round(headerHeight / 2 - (mainHeader.offsetHeight / 2))}px`;
    crystalPanel.mainHeadElem = mainHeader;

    const subheadOut = document.createElement('label');
    crystalPanel.elem.appendChild(subheadOut);
    subheadOut.innerText = 'Output';
    subheadOut.classList.add('panelSubheader');
    subheadOut.style.left = `${Math.round((inputSection.left + (inputSection.width / 4)) - (subheadOut.offsetWidth / 2))}px`;
    subheadOut.style.top = `${Math.round(headerHeight / 2 - (subheadOut.offsetHeight / 2))}px`;
    crystalPanel.subheadOutElem = subheadOut;

    const subheadCost = document.createElement('label');
    crystalPanel.elem.appendChild(subheadCost);
    subheadCost.innerText = 'Cost';
    subheadCost.classList.add('panelSubheader');
    subheadCost.style.left = `${Math.round((inputSection.left + (inputSection.width * 3 / 4)) - (subheadCost.offsetWidth / 2))}px`;
    subheadCost.style.top = `${Math.round(headerHeight / 2 - (subheadCost.offsetHeight / 2))}px`;
    crystalPanel.subheadCostElem = subheadCost;

    let i = 0;
    outCostTypes.forEach(upgrade =>
        {
            const newLabel = document.createElement('label');
            crystalPanel.elem.appendChild(newLabel);
            newLabel.innerText = upgrade.name;
            newLabel.classList.add('upgradeLabel', `${upgrade.name}Upgrade`);
            newLabel.style.left = `${Math.round(labelSection.width / 2 - (newLabel.offsetWidth / 2))}px`;
            newLabel.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.5) * lineHeight) - (newLabel.offsetHeight / 2))}px`;
            upgrade.labelElem = newLabel;

            const outputBack = document.createElement('div');
            crystalPanel.elem.appendChild(outputBack);
            outputBack.classList.add('progressBar');
            outputBack.setAttribute('id', `${upgrade.name}OutBack`);
            outputBack.style.left = `${Math.round(progressSection.left)}px`;
            outputBack.style.width = `${Math.round(progressSection.width)}px`;
            outputBack.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.25) * lineHeight) - (outputBack.offsetHeight / 2))}px`;
            upgrade.outBackElem = outputBack;

            const outputProg = document.createElement('div');
            crystalPanel.elem.appendChild(outputProg);
            outputProg.classList.add('progressBar');
            if (crystalData.output[i] === outCostTypes[i].max) { outputProg.classList.add('outMaxed'); }
            outputProg.setAttribute('id', `${upgrade.name}OutProg`);
            outputProg.style.left = `${Math.round(progressSection.left)}px`;
            outputProg.style.width = `${Math.round(progressSection.width * crystalData.output[i] / outCostTypes[i].max)}px`;
            outputProg.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.25) * lineHeight) - (outputProg.offsetHeight / 2))}px`;
            upgrade.outProgElem = outputProg;

            const outputInp = document.createElement('input');
            crystalPanel.elem.appendChild(outputInp);
            outputInp.type = 'text';
            outputInp.value = crystalData.output[i];
            outputInp.classList.add('dataField', `${upgrade.name}OutInp`);
            outputInp.dataset.type = upgrade.name;
            outputInp.dataset.which = 'output';
            outputInp.style.left = `${Math.round(inputSection.left + (inputSection.width * 0.25) - (outputInp.offsetWidth / 2))}px`;
            outputInp.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.5) * lineHeight) - (outputInp.offsetHeight / 2))}px`;
            outputInp.addEventListener('change', modifyOCValue);
            upgrade.outInpElem = outputInp;

            if (upgrade.name !== 'energy')
            {
                const costBack = document.createElement('div');
                crystalPanel.elem.appendChild(costBack);
                costBack.classList.add('progressBar');
                costBack.setAttribute('id', `${upgrade.name}CostBack`);
                costBack.style.left = `${Math.round(progressSection.left)}px`;
                costBack.style.width = `${Math.round(progressSection.width)}px`;
                costBack.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.75) * lineHeight) - (costBack.offsetHeight / 2))}px`;
                upgrade.costBackElem = costBack;
    
                const costProg = document.createElement('div');
                crystalPanel.elem.appendChild(costProg);
                costProg.classList.add('progressBar');
                if (crystalData.cost[i - 1] === 500) { costProg.classList.add('costMaxed'); }
                costProg.setAttribute('id', `${upgrade.name}CostProg`);
                costProg.style.left = `${Math.round(progressSection.left)}px`;
                costProg.style.width = `${Math.round(progressSection.width * crystalData.cost[i - 1] / 500)}px`;
                costProg.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.75) * lineHeight) - (costProg.offsetHeight / 2))}px`;
                upgrade.costProgElem = costProg;

                const costInp = document.createElement('input');
                crystalPanel.elem.appendChild(costInp);
                costInp.type = 'text';
                costInp.value = crystalData.cost[i - 1];
                costInp.classList.add('dataField', `${upgrade.name}CostInp`);
                costInp.dataset.type = upgrade.name;
                costInp.dataset.which = 'cost';
                costInp.style.left = `${Math.round(inputSection.left + (inputSection.width * 0.75) - (costInp.offsetWidth / 2))}px`;
                costInp.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.5) * lineHeight) - (costInp.offsetHeight / 2))}px`;
                costInp.addEventListener('change', modifyOCValue);
                upgrade.costInpElem = costInp;
            }

            i++
        });
    
    panelResizeFunction = resizeCrystalPanel;
    destroyCurrentPanel = destroyCrystalPanel;
    crystalPanel.active = 'output';
}

function resizeCrystalPanel(width, height)
{
    crystalPanel.width = width;
    crystalPanel.height = height;
    crystalPanel.elem.style.width = `${crystalPanel.width}px`;
    crystalPanel.elem.style.height = `${crystalPanel.height}px`;

    if (crystalPanel.active === 'output') { resizeOCP(); }
    else if (crystalPanel.active === 'special') { resizeSP(); }
    else if (crystalPanel.active === 'otu') { resizeOTUP(); }
}

function resizeOCP()
{
    crystalPanel.elem.style.width = `${crystalPanel.width}px`;
    crystalPanel.elem.style.height = `${crystalPanel.height}px`;

    const headerHeight = crystalPanel.height / 16;
    const labelSection = 
    {
        width: crystalPanel.width / 5,
        height: crystalPanel.height - headerHeight
    };
    const inputSection =
    {
        width: crystalPanel.width / 4,
        height: crystalPanel.height - headerHeight
    };
    inputSection.left = crystalPanel.width - inputSection.width;
    const progressSection =
    {
        left: labelSection.width,
        width: crystalPanel.width - (labelSection.width + inputSection.width),
        height: crystalPanel.height - headerHeight
    };
    const lineHeight = Math.min(labelSection.height / outCostTypes.length * 0.6, labelSection.width / 4);
    const dividingHeight = (labelSection.height - (lineHeight * outCostTypes.length)) / (outCostTypes.length + 1);

    setCOCCSS(lineHeight, headerHeight, inputSection.width);

    crystalPanel.mainHeadElem.style.left = `${Math.round(progressSection.left + (progressSection.width / 2) - (crystalPanel.mainHeadElem.offsetWidth / 2))}px`;
    crystalPanel.mainHeadElem.style.top = `${Math.round(headerHeight / 2 - (crystalPanel.mainHeadElem.offsetHeight / 2))}px`;

    crystalPanel.subheadOutElem.style.left = `${Math.round((inputSection.left + (inputSection.width / 4)) - (crystalPanel.subheadOutElem.offsetWidth / 2))}px`;
    crystalPanel.subheadOutElem.style.top = `${Math.round(headerHeight / 2 - (crystalPanel.subheadOutElem.offsetHeight / 2))}px`;

    crystalPanel.subheadCostElem.style.left = `${Math.round((inputSection.left + (inputSection.width * 3 / 4)) - (crystalPanel.subheadCostElem.offsetWidth / 2))}px`;
    crystalPanel.subheadCostElem.style.top = `${Math.round(headerHeight / 2 - (crystalPanel.subheadCostElem.offsetHeight / 2))}px`;

    let i = 0;
    outCostTypes.forEach(upgrade =>
        {
            upgrade.labelElem.style.left = `${Math.round(labelSection.width / 2 - (upgrade.labelElem.offsetWidth / 2))}px`;
            upgrade.labelElem.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.5) * lineHeight) - (upgrade.labelElem.offsetHeight / 2))}px`;

            upgrade.outBackElem.style.left = `${Math.round(progressSection.left)}px`;
            upgrade.outBackElem.style.width = `${Math.round(progressSection.width)}px`;
            upgrade.outBackElem.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.25) * lineHeight) - (upgrade.outBackElem.offsetHeight / 2))}px`;

            upgrade.outProgElem.style.left = `${Math.round(progressSection.left)}px`;
            upgrade.outProgElem.style.width = `${Math.round(progressSection.width * crystalData.output[i] / outCostTypes[i].max)}px`;
            upgrade.outProgElem.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.25) * lineHeight) - (upgrade.outProgElem.offsetHeight / 2))}px`;

            upgrade.outInpElem.style.left = `${Math.round(inputSection.left + (inputSection.width * 0.25) - (upgrade.outInpElem.offsetWidth / 2))}px`;
            upgrade.outInpElem.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.5) * lineHeight) - (upgrade.outInpElem.offsetHeight / 2))}px`;

            if (upgrade.name !== 'energy')
            {
                upgrade.costBackElem.style.left = `${Math.round(progressSection.left)}px`;
                upgrade.costBackElem.style.width = `${Math.round(progressSection.width)}px`;
                upgrade.costBackElem.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.75) * lineHeight) - (upgrade.costBackElem.offsetHeight / 2))}px`;
    
                upgrade.costProgElem.style.left = `${Math.round(progressSection.left)}px`;
                upgrade.costProgElem.style.width = `${Math.round(progressSection.width * crystalData.cost[i - 1] / 500)}px`;
                upgrade.costProgElem.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.75) * lineHeight) - (upgrade.costProgElem.offsetHeight / 2))}px`;
            
                upgrade.costInpElem.style.left = `${Math.round(inputSection.left + (inputSection.width * 0.75) - (upgrade.costInpElem.offsetWidth / 2))}px`;
                upgrade.costInpElem.style.top = `${Math.round(headerHeight + ((i + 1) * dividingHeight) + ((i + 0.5) * lineHeight) - (upgrade.costInpElem.offsetHeight / 2))}px`;
            }

            i++
        });
}

function setCOCCSS(lineHeight, headerHeight, isWidth)
{
    if (crystalPanel.panelCSS) document.body.removeChild(crystalPanel.panelCSS);

    const newCSS = document.createElement('style');
    document.body.append(newCSS);
    const newStyleSheet = newCSS.sheet;

    let selector = '.panelHeader';
    let properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(headerHeight * 0.8)}px;\n`,
        `line-height: ${Math.round(headerHeight * 0.8)}px;\n`,
        'color: #FB7CC7;\n',
        `text-shadow: 0px 0px ${Math.round(headerHeight * 0.8 / 9)}px #FB7CC7;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.panelSubheader';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(headerHeight * 0.6)}px;\n`,
        `line-height: ${Math.round(headerHeight * 0.6)}px;\n`,
        'color: #FB7CC7;\n',
        `text-shadow: 0px 0px ${Math.round(headerHeight * 0.6 / 9)}px #FB7CC7;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.upgradeLabel';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${lineHeight}px;\n`,
        `line-height: ${lineHeight}px;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.progressBar';
    properties =
    [
        'position: absolute;\n',
        `height: ${Math.round(lineHeight / 2.5)}px;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.outMaxed';
    properties =
    [
        `box-shadow: 0px 0px 4px 2px #FB7CC7, inset 0px 0px 3px 1px #FB7CC7;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.costMaxed';
    properties =
    [
        `box-shadow: 0px 0px 4px 2px #FB7CC7, inset 0px 0px 3px 1px #D64896;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.dataField';
    properties =
    [
        'position: absolute;\n',
        `height: ${Math.round(lineHeight * 0.9)}px;\n`,
        `width: ${Math.round(isWidth / 3)}px;\n`,
        `font-size: ${Math.round(lineHeight * 0.8)}px;\n`,
        `text-align: center;\n`,
        'font-family: "Syncopate";\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    outCostTypes.forEach(upgrade =>
        {
            selector = `.${upgrade.name}Upgrade`;
            properties =
            [
                `color: hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`,
                `text-shadow: 0px 0px ${Math.round(lineHeight / 9)}px hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `#${upgrade.name}OutBack`;
            properties =
            [
                `background-color: hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3] / 2});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `#${upgrade.name}OutProg`;
            properties =
            [
                `background-color: hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `#${upgrade.name}CostBack`;
            properties =
            [
                `background-color: hsla(${upgrade.color[0]}, ${upgrade.color[1] / 2}%, ${upgrade.color[2] * 1.2}%, ${upgrade.color[3] / 2});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `#${upgrade.name}CostProg`;
            properties =
            [
                `background-color: hsla(${upgrade.color[0]}, ${upgrade.color[1] / 2}%, ${upgrade.color[2] * 1.2}%, ${upgrade.color[3]});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `.${upgrade.name}OutInp`;
            properties =
            [
                `box-shadow: 0px 0px ${Math.round(lineHeight / 5)}px hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]}), inset 0px 0px ${Math.round(lineHeight / 10)}px hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`,
                'background-color: black;\n',
                `color: hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `.${upgrade.name}CostInp`;
            properties =
            [
                `box-shadow: 0px 0px ${Math.round(lineHeight / 5)}px hsla(${upgrade.color[0]}, ${upgrade.color[1] / 2}%, ${upgrade.color[2] * 1.2}%, ${upgrade.color[3]}), inset 0px 0px ${Math.round(lineHeight / 10)}px hsla(${upgrade.color[0]}, ${upgrade.color[1] / 2}%, ${upgrade.color[2] * 1.2}%, ${upgrade.color[3]});\n`,
                'background-color: black;\n',
                `color: hsla(${upgrade.color[0]}, ${upgrade.color[1] / 2}%, ${upgrade.color[2] * 1.2}%, ${upgrade.color[3]});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        });

    crystalPanel.panelCSS = newCSS;
}

function modifyOCValue(e)
{
    const upgradeName = e.target.dataset.type;
    const upgradeSet = e.target.dataset.which;
    const newValue = parseInt(e.target.value);
    let oldValue = 0;
    let i = 0;
    let index = 0;
    outCostTypes.forEach(upgrade =>
        {
            if (upgradeName === upgrade.name)
            { oldValue = crystalData[upgradeSet][i]; index = i; }
            i++;
        })

    const maxReference = upgradeSet === 'output' ? outCostTypes[index].max : 500;

    if (isNaN(newValue)) { e.target.value = oldValue; }
    else
    {
        if (newValue < 0 || newValue > maxReference) { e.target.value = oldValue; }
        else
        {
            crystalData[upgradeSet][index - (upgradeSet === 'cost' ? 1 : 0)] = Math.floor(newValue);
            e.target.value = Math.floor(newValue);
            adjustOCProgress();
            localStorage.setItem('ISEPScrystals', JSON.stringify(crystalData));
        }
    }
}

function adjustOCProgress()
{
    const headerHeight = crystalPanel.height / 16;
    const labelSection = 
    {
        width: crystalPanel.width / 5,
        height: crystalPanel.height - headerHeight
    };
    const inputSection =
    {
        width: crystalPanel.width / 4,
        height: crystalPanel.height - headerHeight
    };
    inputSection.left = crystalPanel.width - inputSection.width;
    const progressSection =
    {
        left: labelSection.width,
        width: crystalPanel.width - (labelSection.width + inputSection.width),
        height: crystalPanel.height - headerHeight
    };

    let i = 0;
    outCostTypes.forEach(upgrade =>
        {
            upgrade.outProgElem.style.width = `${Math.round(progressSection.width * crystalData.output[i] / outCostTypes[i].max)}px`;
            if (crystalData.output[i] === outCostTypes[i].max) { upgrade.outProgElem.classList.add('outMaxed'); }
            else if (upgrade.outProgElem.classList.contains('outMaxed')) { upgrade.outProgElem.classList.remove('outMaxed'); }

            if (upgrade.name !== 'energy')
            {
                upgrade.costProgElem.style.width = `${Math.round(progressSection.width * crystalData.cost[i - 1] / 500)}px`;

                if (crystalData.cost[i - 1] === 500) { upgrade.costProgElem.classList.add('costMaxed'); }
                else if (upgrade.costProgElem.classList.contains('costMaxed')) { upgrade.costProgElem.classList.remove('costMaxed'); }
            }

            i++
        });
}

function constructCSP()
{
    const headerHeight = crystalPanel.height / 16;
    const columnDivider = crystalPanel.width / 240;
    const labelSection = 
    {
        width: crystalPanel.width / 5,
        height: crystalPanel.height - headerHeight,
        left: [0, crystalPanel.width / 2 + columnDivider]
    };
    const inputSection =
    {
        width: crystalPanel.width / 9,
        height: crystalPanel.height - headerHeight,
        left: [crystalPanel.width / 2 - (crystalPanel.width / 9 + columnDivider), crystalPanel.width * 8 / 9]
    };
    const progressSection =
    {
        left: [labelSection.width, labelSection.left[1] + labelSection.width],
        width: crystalPanel.width / 2 - (columnDivider + labelSection.width + inputSection.width),
        height: crystalPanel.height - headerHeight
    };
    const lineHeight = Math.min(labelSection.height / Math.ceil(specialTypes.length / 2) * 0.8, labelSection.width / 16);
    const dividingHeight = (labelSection.height - (lineHeight * Math.ceil(specialTypes.length / 2))) / (Math.ceil(specialTypes.length / 2) + 1);

    setCSCSS(lineHeight, headerHeight, inputSection.width);

    const mainHeader = document.createElement('label');
    crystalPanel.elem.appendChild(mainHeader);
    mainHeader.innerText = 'Special Crystal Upgrades';
    mainHeader.classList.add('panelHeader');
    mainHeader.style.left = `${Math.round((crystalPanel.width / 2) - (mainHeader.offsetWidth / 2))}px`;
    mainHeader.style.top = `${Math.round(headerHeight / 2 - (mainHeader.offsetHeight / 2))}px`;
    crystalPanel.mainHeadElem = mainHeader;

    let i = 0;
    specialTypes.forEach(upgrade =>
        {
            const column = i >= Math.ceil(specialTypes.length / 2) ? 1 : 0;
            const row = i - (column === 0 ? 0 : Math.ceil(specialTypes.length / 2));
            const htmlName = upgrade.name.replaceAll(' ', '-');
            const progValue = ((2 * upgrade.startCost + (crystalData.special[i] * upgrade.costScales)) * crystalData.special[i] / 2) / upgrade.total;

            const newLabel = document.createElement('label');
            crystalPanel.elem.appendChild(newLabel);
            newLabel.innerText = upgrade.name.replaceAll('--', ' ');
            newLabel.classList.add('upgradeLabel', `${htmlName}Upgrade`);
            newLabel.style.left = `${Math.round(labelSection.left[column] + labelSection.width / 2 - (newLabel.offsetWidth / 2))}px`;
            newLabel.style.top = `${Math.round(headerHeight + ((row + 1) * dividingHeight) + ((row + 0.5) * lineHeight) - (newLabel.offsetHeight / 2))}px`;
            upgrade.labelElem = newLabel;

            const progBack = document.createElement('div');
            crystalPanel.elem.appendChild(progBack);
            progBack.classList.add('progressBar');
            progBack.setAttribute('id', `${htmlName}ProgBack`);
            progBack.style.left = `${Math.round(progressSection.left[column])}px`;
            progBack.style.width = `${Math.round(progressSection.width)}px`;
            progBack.style.top = `${Math.round(headerHeight + ((row + 1) * dividingHeight) + ((row + 0.5) * lineHeight) - (progBack.offsetHeight / 2))}px`;
            upgrade.progBackElem = progBack;

            const progFill = document.createElement('div');
            crystalPanel.elem.appendChild(progFill);
            progFill.classList.add('progressBar');
            if (crystalData.special[i] === specialTypes[i].max) { progFill.classList.add('progMaxed'); }
            progFill.setAttribute('id', `${htmlName}ProgFill`);
            progFill.style.left = `${Math.round(progressSection.left[column])}px`;
            progFill.style.width = `${Math.round(progressSection.width * progValue)}px`;
            progFill.style.top = `${Math.round(headerHeight + ((row + 1) * dividingHeight) + ((row + 0.5) * lineHeight) - (progFill.offsetHeight / 2))}px`;
            upgrade.progFillElem = progFill;

            const progInp = document.createElement('input');
            crystalPanel.elem.appendChild(progInp);
            progInp.type = 'text';
            progInp.value = crystalData.special[i];
            progInp.classList.add('dataField');
            progInp.setAttribute('id', `${htmlName}ProgInp`);
            progInp.dataset.type = upgrade.name;
            progInp.style.left = `${Math.round(inputSection.left[column] + (inputSection.width * 0.25) - (progInp.offsetWidth / 2))}px`;
            progInp.style.top = `${Math.round(headerHeight + ((row + 1) * dividingHeight) + ((row + 0.5) * lineHeight) - (progInp.offsetHeight / 2))}px`;
            progInp.addEventListener('change', modifySValue);
            upgrade.progInpElem = progInp;

            i++
        });
    
    panelResizeFunction = resizeCrystalPanel;
    destroyCurrentPanel = destroyCrystalPanel;
    crystalPanel.active = 'special';
}

function resizeSP()
{
    const headerHeight = crystalPanel.height / 16;
    const columnDivider = crystalPanel.width / 240;
    const labelSection = 
    {
        width: crystalPanel.width / 5,
        height: crystalPanel.height - headerHeight,
        left: [0, crystalPanel.width / 2 + columnDivider]
    };
    const inputSection =
    {
        width: crystalPanel.width / 9,
        height: crystalPanel.height - headerHeight,
        left: [crystalPanel.width / 2 - (crystalPanel.width / 9 + columnDivider), crystalPanel.width * 8 / 9]
    };
    const progressSection =
    {
        left: [labelSection.width, labelSection.left[1] + labelSection.width],
        width: crystalPanel.width / 2 - (columnDivider + labelSection.width + inputSection.width),
        height: crystalPanel.height - headerHeight
    };
    const lineHeight = Math.min(labelSection.height / Math.ceil(specialTypes.length / 2) * 0.8, labelSection.width / 16);
    const dividingHeight = (labelSection.height - (lineHeight * Math.ceil(specialTypes.length / 2))) / (Math.ceil(specialTypes.length / 2) + 1);

    setCSCSS(lineHeight, headerHeight, inputSection.width);

    crystalPanel.mainHeadElem.style.left = `${Math.round((crystalPanel.width / 2) - (crystalPanel.mainHeadElem.offsetWidth / 2))}px`;
    crystalPanel.mainHeadElem.style.top = `${Math.round(headerHeight / 2 - (crystalPanel.mainHeadElem.offsetHeight / 2))}px`;

    let i = 0;
    specialTypes.forEach(upgrade =>
        {
            const column = i >= Math.ceil(specialTypes.length / 2) ? 1 : 0;
            const row = i - (column === 0 ? 0 : Math.ceil(specialTypes.length / 2));
            const progValue = ((2 * upgrade.startCost + (crystalData.special[i] * upgrade.costScales)) * crystalData.special[i] / 2) / upgrade.total;

            upgrade.labelElem.style.left = `${Math.round(labelSection.left[column] + labelSection.width / 2 - (upgrade.labelElem.offsetWidth / 2))}px`;
            upgrade.labelElem.style.top = `${Math.round(headerHeight + ((row + 1) * dividingHeight) + ((row + 0.5) * lineHeight) - (upgrade.labelElem.offsetHeight / 2))}px`;

            upgrade.progBackElem.style.left = `${Math.round(progressSection.left[column])}px`;
            upgrade.progBackElem.style.width = `${Math.round(progressSection.width)}px`;
            upgrade.progBackElem.style.top = `${Math.round(headerHeight + ((row + 1) * dividingHeight) + ((row + 0.5) * lineHeight) - (upgrade.progBackElem.offsetHeight / 2))}px`;

            upgrade.progFillElem.style.left = `${Math.round(progressSection.left[column])}px`;
            upgrade.progFillElem.style.width = `${Math.round(progressSection.width * progValue)}px`;
            upgrade.progFillElem.style.top = `${Math.round(headerHeight + ((row + 1) * dividingHeight) + ((row + 0.5) * lineHeight) - (upgrade.progFillElem.offsetHeight / 2))}px`;

            upgrade.progInpElem.style.left = `${Math.round(inputSection.left[column] + (inputSection.width * 0.25) - (upgrade.progInpElem.offsetWidth / 2))}px`;
            upgrade.progInpElem.style.top = `${Math.round(headerHeight + ((row + 1) * dividingHeight) + ((row + 0.5) * lineHeight) - (upgrade.progInpElem.offsetHeight / 2))}px`;

            i++
        });
}

function setCSCSS(lineHeight, headerHeight, isWidth)
{
    if (crystalPanel.panelCSS) document.body.removeChild(crystalPanel.panelCSS);

    const newCSS = document.createElement('style');
    document.body.append(newCSS);
    const newStyleSheet = newCSS.sheet;

    let selector = '.panelHeader';
    let properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(headerHeight * 0.8)}px;\n`,
        `line-height: ${Math.round(headerHeight * 0.8)}px;\n`,
        'color: #FB7CC7;\n',
        `text-shadow: 0px 0px ${Math.round(headerHeight * 0.8 / 9)}px #FB7CC7;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.upgradeLabel';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${lineHeight}px;\n`,
        `line-height: ${lineHeight}px;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.progressBar';
    properties =
    [
        'position: absolute;\n',
        `height: ${Math.round(lineHeight / 1.2)}px;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.progMaxed';
    properties =
    [
        `box-shadow: 0px 0px 4px 2px #FB7CC7, inset 0px 0px 3px 1px #FB7CC7;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.dataField';
    properties =
    [
        'position: absolute;\n',
        `height: ${Math.round(lineHeight * 0.9)}px;\n`,
        `width: ${Math.round(isWidth / 3)}px;\n`,
        `font-size: ${Math.round(lineHeight * 0.8)}px;\n`,
        `text-align: center;\n`,
        'font-family: "Syncopate";\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    specialTypes.forEach(upgrade =>
        {
            const htmlName = upgrade.name.replaceAll(' ', '-');

            selector = `.${htmlName}Upgrade`;
            properties =
            [
                `color: hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`,
                `text-shadow: 0px 0px ${Math.round(lineHeight / 9)}px hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `#${htmlName}ProgBack`;
            properties =
            [
                `background-color: hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3] / 2});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `#${htmlName}ProgFill`;
            properties =
            [
                `background-color: hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `#${upgrade.name}ProgInp`;
            properties =
            [
                `box-shadow: 0px 0px ${Math.round(lineHeight / 5)}px hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]}), inset 0px 0px ${Math.round(lineHeight / 10)}px hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`,
                'background-color: black;\n',
                `color: hsla(${upgrade.color[0]}, ${upgrade.color[1]}%, ${upgrade.color[2]}%, ${upgrade.color[3]});\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        });

    crystalPanel.panelCSS = newCSS;
}

function modifySValue(e)
{
    const upgradeName = e.target.dataset.type;
    const newValue = parseInt(e.target.value);
    let oldValue = 0;
    let i = 0;
    let index = 0;
    specialTypes.forEach(upgrade =>
        {
            if (upgradeName === upgrade.name)
            { oldValue = crystalData.special[i]; index = i; }
            i++;
        })

    const maxReference = specialTypes[index].max;

    if (isNaN(newValue)) { e.target.value = oldValue; }
    else
    {
        if (newValue < 0 || newValue > maxReference) { e.target.value = oldValue; }
        else
        {
            crystalData.special[index] = Math.floor(newValue);
            e.target.value = Math.floor(newValue);
            adjustSProgress();
            localStorage.setItem('ISEPScrystals', JSON.stringify(crystalData));
        }
    }
}

function adjustSProgress()
{
    const headerHeight = crystalPanel.height / 16;
    const columnDivider = crystalPanel.width / 240;
    const labelSection = 
    {
        width: crystalPanel.width / 5,
        height: crystalPanel.height - headerHeight,
        left: [0, crystalPanel.width / 2 + columnDivider]
    };
    const inputSection =
    {
        width: crystalPanel.width / 9,
        height: crystalPanel.height - headerHeight,
        left: [crystalPanel.width / 2 - (crystalPanel.width / 9 + columnDivider), crystalPanel.width * 8 / 9]
    };
    const progressSection =
    {
        left: [labelSection.width, labelSection.left[1] + labelSection.width],
        width: crystalPanel.width / 2 - (columnDivider + labelSection.width + inputSection.width),
        height: crystalPanel.height - headerHeight
    };

    let i = 0;
    specialTypes.forEach(upgrade =>
        {
            const progValue = ((2 * upgrade.startCost + (crystalData.special[i] * upgrade.costScales)) * crystalData.special[i] / 2) / upgrade.total;

            upgrade.progFillElem.style.width = `${Math.round(progressSection.width * progValue)}px`;
            if (crystalData.special[i] === specialTypes[i].max) { upgrade.progFillElem.classList.add('progMaxed'); }
            else if (upgrade.progFillElem.classList.contains('progMaxed')) { upgrade.progFillElem.classList.remove('progMaxed'); }

            i++;
        });
}

function constructCOTUP()
{
    const headerHeight = crystalPanel.height / 16;

    const prelimCSS = document.createElement('style');
    document.body.append(prelimCSS);
    const prelimStyleSheet = prelimCSS.sheet;
    let selector = '.panelSubheader';
    let properties =
    [
        `font-size: 10px;\n`,
        `line-height: 10px;\n`,
        `padding: 1px;\n`
    ].join('');
    prelimStyleSheet.insertRule(`${selector} { ${properties} }`);
    selector = '.upgradeButton';
    prelimStyleSheet.insertRule(`${selector} { ${properties} }`);
    crystalPanel.prelimCSS = prelimCSS;

    const mainHeader = document.createElement('label');
    crystalPanel.elem.appendChild(mainHeader);
    mainHeader.innerText = 'One Time Crystal Upgrades';
    mainHeader.classList.add('panelHeader');
    mainHeader.style.left = `${Math.round((crystalPanel.width / 2) - (mainHeader.offsetWidth / 2))}px`;
    mainHeader.style.top = `${Math.round(headerHeight / 2 - (mainHeader.offsetHeight / 2))}px`;
    crystalPanel.mainHeadElem = mainHeader;

    const subheadSingle = document.createElement('label');
    crystalPanel.elem.appendChild(subheadSingle);
    subheadSingle.innerText = 'Single Particles';
    subheadSingle.classList.add('panelSubheader');
    crystalPanel.subheadSingElem = subheadSingle;

    let maxRowWidth = 0;
    let currentRowWidth = 0;

    let i = 0;
    let singleRows = [];
    otuSingles.forEach(upgrade =>
        {
            const row = Math.floor(i / 9);
            const member = i % 9;
            if (member === 0) { currentRowWidth = 10; }

            const newLabel = document.createElement('label');
            crystalPanel.elem.appendChild(newLabel);
            newLabel.innerText = upgrade.name.replaceAll('--', ' ');
            newLabel.classList.add('upgradeButton', `${upgrade.name}Upgrade`);
            if (crystalData.otuSingle[i]) { newLabel.classList.add('selected'); }
            newLabel.dataset.type = 'single';
            newLabel.dataset.upgIndex = i;
            upgrade.labelElem = newLabel;
            newLabel.addEventListener('click', toggleUpgrade);
            currentRowWidth += newLabel.offsetWidth + 10;

            if (member === 0) { singleRows.push([newLabel]); }
            else { singleRows[row].push(newLabel); }

            if (member === 8) { maxRowWidth = Math.max(maxRowWidth, currentRowWidth); }

            i++
        });
    crystalPanel.singleRows = singleRows;

    const subheadDual = document.createElement('label');
    crystalPanel.elem.appendChild(subheadDual);
    subheadDual.innerText = 'Dual Particles';
    subheadDual.classList.add('panelSubheader');
    crystalPanel.subheadDualElem = subheadDual;

    i = 0;
    let dualRows = [];
    otuDuals.forEach(upgrade =>
        {
            const row = Math.floor(i / 9);
            const member = i % 9;
            if (member === 0) { currentRowWidth = 10; }

            const newLabel = document.createElement('label');
            crystalPanel.elem.appendChild(newLabel);
            newLabel.innerText = upgrade.name.replaceAll('--', ' ');
            newLabel.classList.add('upgradeButton', `${upgrade.name}Upgrade`);
            if (crystalData.otuDual[i]) { newLabel.classList.add('selected'); }
            newLabel.dataset.type = 'dual';
            newLabel.dataset.upgIndex = i;
            // newLabel.setAttribute('id', `${upgrade.name}Upgrade`);
            upgrade.labelElem = newLabel;
            newLabel.addEventListener('click', toggleUpgrade);
            currentRowWidth += newLabel.offsetWidth + 10;

            if (member === 0) { dualRows.push([newLabel]); }
            else { dualRows[row].push(newLabel); }

            // if (member === 8) { maxRowWidth = Math.max(maxRowWidth, currentRowWidth); }

            i++
        });
    crystalPanel.dualRows = dualRows;

    const subheadSpecial = document.createElement('label');
    crystalPanel.elem.appendChild(subheadSpecial);
    subheadSpecial.innerText = 'Special';
    subheadSpecial.classList.add('panelSubheader');
    crystalPanel.subheadSpecElem = subheadSpecial;

    i = 0;
    let specialRows = [];
    otuSpecials.forEach(upgrade =>
        {
            const row = Math.floor(i / 6);
            const member = i % 6;
            if (member === 0) { currentRowWidth = 10; }

            const newLabel = document.createElement('label');
            crystalPanel.elem.appendChild(newLabel);
            newLabel.innerText = upgrade.name.replaceAll('--', ' ');
            newLabel.classList.add('upgradeButton', `${upgrade.name}Upgrade`);
            if (crystalData.otuSpec[i]) { newLabel.classList.add('selected'); }
            newLabel.dataset.type = 'spec';
            newLabel.dataset.upgIndex = i;
            // newLabel.setAttribute('id', `${upgrade.name}Upgrade`);
            upgrade.labelElem = newLabel;
            newLabel.addEventListener('click', toggleUpgrade);
            currentRowWidth += newLabel.offsetWidth + 10;

            if (member === 0) { specialRows.push([newLabel]); }
            else { specialRows[row].push(newLabel); }

            // if (member === 5) { maxRowWidth = Math.max(maxRowWidth, currentRowWidth); }

            i++
        });
    crystalPanel.specRows = specialRows;

    crystalPanel.maxRowWidth = maxRowWidth;
}

function finishOTUP()
{
    const headerHeight = crystalPanel.height / 16;

    let maxRowWidth = 0;
    let singRowWidths = [];
    let singleRows = crystalPanel.singleRows;
    for (let row = 0; row < singleRows.length; row++)
    {
        const thisWidth = singleRows[row].reduce((a, b) => { return a + b.offsetWidth; }, 0) + (singleRows[row].length * 10 + 10);
        maxRowWidth = Math.max(maxRowWidth, thisWidth);
        singRowWidths.push(thisWidth);
    }

    let dualRowWidths = [];
    let dualRows = crystalPanel.dualRows;
    for (let row = 0; row < dualRows.length; row++)
    {
        const thisWidth = dualRows[row].reduce((a, b) => { return a + b.offsetWidth; }, 0) + (dualRows[row].length * 10 + 10);
        maxRowWidth = Math.max(maxRowWidth, thisWidth);
        dualRowWidths.push(thisWidth);
    }
    
    let specRowWidths = [];
    let specialRows = crystalPanel.specRows;
    for (let row = 0; row < specialRows.length; row++)
    {
        // debugger;
        const thisWidth = specialRows[row].reduce((a, b) => { return a + b.offsetWidth; }, 0) + (specialRows[row].length * 10 + 10);
        maxRowWidth = Math.max(maxRowWidth, thisWidth);
        specRowWidths.push(thisWidth);
    }

    const rowHeight = singleRows[0][0].offsetHeight;
    const totalRows = (singleRows.length + 1) + (dualRows.length + 1) + (specialRows.length + 1);
    const totalHeight = totalRows * (rowHeight + 15) + 15
    const scaling = Math.min(crystalPanel.width / crystalPanel.maxRowWidth, (crystalPanel.height - headerHeight) / totalHeight) * 0.95;
    crystalPanel.scaleRecord = { height: (crystalPanel.height - headerHeight), width: crystalPanel.width, scaling };

    document.body.removeChild(crystalPanel.prelimCSS);

    setCOTUCSS(scaling);

    let runningTop = headerHeight + (scaling * 10);
    let runningLeft = 0;

    crystalPanel.subheadSingElem.style.top = `${runningTop}px`;
        runningTop += crystalPanel.subheadSingElem.offsetHeight + (scaling * 10);
    crystalPanel.subheadSingElem.style.left = `${crystalPanel.width / 2 - (crystalPanel.subheadSingElem.offsetWidth / 2)}px`;

    for (let row = 0; row < singleRows.length; row++)
    {
        runningLeft = scaling * 10;
        for (let member = 0; member < singleRows[row].length; member++)
        {
            singleRows[row][member].style.top = `${runningTop}px`;
            singleRows[row][member].style.left = `${runningLeft}px`;
                runningLeft += singleRows[row][member].offsetWidth + (scaling * 10);
        }
        runningTop += singleRows[row][0].offsetHeight + (scaling * 10);
    }

    crystalPanel.subheadDualElem.style.top = `${runningTop}px`;
        runningTop += crystalPanel.subheadDualElem.offsetHeight + (scaling * 10);
    crystalPanel.subheadDualElem.style.left = `${crystalPanel.width / 2 - (crystalPanel.subheadDualElem.offsetWidth / 2)}px`;

    for (let row = 0; row < dualRows.length; row++)
    {
        runningLeft = scaling * 10;
        for (let member = 0; member < dualRows[row].length; member++)
        {
            dualRows[row][member].style.top = `${runningTop}px`;
            dualRows[row][member].style.left = `${runningLeft}px`;
                runningLeft += dualRows[row][member].offsetWidth + (scaling * 10);
        }
        runningTop += dualRows[row][0].offsetHeight + (scaling * 10);
    }

    crystalPanel.subheadSpecElem.style.top = `${runningTop}px`;
        runningTop += crystalPanel.subheadSpecElem.offsetHeight + (scaling * 10);
    crystalPanel.subheadSpecElem.style.left = `${crystalPanel.width / 2 - (crystalPanel.subheadSpecElem.offsetWidth / 2)}px`;

    for (let row = 0; row < specialRows.length; row++)
    {
        runningLeft = scaling * 10;
        for (let member = 0; member < specialRows[row].length; member++)
        {
            specialRows[row][member].style.top = `${runningTop}px`;
            specialRows[row][member].style.left = `${runningLeft}px`;
                runningLeft += specialRows[row][member].offsetWidth + (scaling * 10);
        }
        runningTop += specialRows[row][0].offsetHeight + (scaling * 10);
    }
    
    panelResizeFunction = resizeCrystalPanel;
    destroyCurrentPanel = destroyCrystalPanel;
    crystalPanel.active = 'otu';
}

function resizeOTUP()
{
    const headerHeight = crystalPanel.height / 16;

    crystalPanel.mainHeadElem.style.left = `${Math.round((crystalPanel.width / 2) - (crystalPanel.mainHeadElem.offsetWidth / 2))}px`;
    crystalPanel.mainHeadElem.style.top = `${Math.round(headerHeight / 2 - (crystalPanel.mainHeadElem.offsetHeight / 2))}px`;

    const scaleRatio = [crystalPanel.width / crystalPanel.scaleRecord.width, (crystalPanel.height - headerHeight) / crystalPanel.scaleRecord.height];
    const scaling = crystalPanel.scaleRecord.scaling * Math.min(scaleRatio[0], scaleRatio[1]);

    setCOTUCSS(scaling);

    let runningTop = headerHeight + (scaling * 10);
    let runningLeft = 0;

    crystalPanel.subheadSingElem.style.top = `${runningTop}px`;
        runningTop += crystalPanel.subheadSingElem.offsetHeight + (scaling * 10);
    crystalPanel.subheadSingElem.style.left = `${crystalPanel.width / 2 - (crystalPanel.subheadSingElem.offsetWidth / 2)}px`;

    let singleRows = crystalPanel.singleRows;
    for (let row = 0; row < singleRows.length; row++)
    {
        runningLeft = scaling * 10;
        for (let member = 0; member < singleRows[row].length; member++)
        {
            singleRows[row][member].style.top = `${runningTop}px`;
            singleRows[row][member].style.left = `${runningLeft}px`;
                runningLeft += singleRows[row][member].offsetWidth + (scaling * 10);
        }
        runningTop += singleRows[row][0].offsetHeight + (scaling * 10);
    }

    crystalPanel.subheadDualElem.style.top = `${runningTop}px`;
        runningTop += crystalPanel.subheadDualElem.offsetHeight + (scaling * 10);
    crystalPanel.subheadDualElem.style.left = `${crystalPanel.width / 2 - (crystalPanel.subheadDualElem.offsetWidth / 2)}px`;

    let dualRows = crystalPanel.dualRows;
    for (let row = 0; row < dualRows.length; row++)
    {
        runningLeft = scaling * 10;
        for (let member = 0; member < dualRows[row].length; member++)
        {
            dualRows[row][member].style.top = `${runningTop}px`;
            dualRows[row][member].style.left = `${runningLeft}px`;
                runningLeft += dualRows[row][member].offsetWidth + (scaling * 10);
        }
        runningTop += dualRows[row][0].offsetHeight + (scaling * 10);
    }

    crystalPanel.subheadSpecElem.style.top = `${runningTop}px`;
        runningTop += crystalPanel.subheadSpecElem.offsetHeight + (scaling * 10);
    crystalPanel.subheadSpecElem.style.left = `${crystalPanel.width / 2 - (crystalPanel.subheadSpecElem.offsetWidth / 2)}px`;

    let specialRows = crystalPanel.specRows;
    for (let row = 0; row < specialRows.length; row++)
    {
        runningLeft = scaling * 10;
        for (let member = 0; member < specialRows[row].length; member++)
        {
            specialRows[row][member].style.top = `${runningTop}px`;
            specialRows[row][member].style.left = `${runningLeft}px`;
                runningLeft += specialRows[row][member].offsetWidth + (scaling * 10);
        }
        runningTop += specialRows[row][0].offsetHeight + (scaling * 10);
    }
}

function setCOTUCSS(scaling)
{
    if (crystalPanel.panelCSS) document.body.removeChild(crystalPanel.panelCSS);

    const headerHeight = crystalPanel.height / 16;

    const newCSS = document.createElement('style');
    document.body.append(newCSS);
    const newStyleSheet = newCSS.sheet;

    let selector = '.panelHeader';
    let properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(headerHeight * 0.8)}px;\n`,
        `line-height: ${Math.round(headerHeight * 0.8)}px;\n`,
        'color: #FB7CC7;\n',
        `text-shadow: 0px 0px ${Math.round(headerHeight * 0.8 / 9)}px #FB7CC7;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.panelSubheader';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(scaling * 10)}px;\n`,
        `line-height: ${Math.round(scaling * 10)}px;\n`,
        'color: #FB7CC7;\n',
        `text-shadow: 0px 0px ${Math.round(scaling * 10 / 9)}px #FB7CC7;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.upgradeButton';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(scaling * 10)}px;\n`,
        `line-height: ${Math.round(scaling * 10)}px;\n`,
        `border-radius: ${Math.round(scaling * 10)}px;\n`,
        'margin: auto;\n',
        `padding: ${Math.round(scaling * 5)}px;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    otuSingles.forEach(upgrade =>
        {
            selector = `.${upgrade.name}Upgrade`;
            properties =
            [
                `color: ${upgrade.color};\n`,
                `box-shadow: 0px 0px ${Math.round(scaling * 2)}px ${upgrade.color};\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `.${upgrade.name}Upgrade.selected`;
            properties =
            [
                `color: ${lerpColor(upgrade.color, '#000000', 0.5)};\n`,
                `background-color: ${upgrade.color};\n`,
                `box-shadow: 0px 0px ${Math.round(scaling * 2)}px ${upgrade.color};\n`,
                `text-shadow: ${Math.round(scaling)}px ${Math.round(scaling)}px ${Math.round(scaling * 2)}px black;\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        });

    otuDuals.forEach(upgrade =>
        {
            selector = `.${upgrade.name}Upgrade`;
            properties =
            [
                `color: ${lerpColor(upgrade.color[0], upgrade.color[1], 0.5)};\n`,
                `box-shadow: 
                    ${-1 * Math.round(scaling)}px ${-1 * Math.round(scaling)}px ${Math.round(scaling)}px ${upgrade.color[0]},
                    ${Math.round(scaling)}px ${Math.round(scaling)}px ${Math.round(scaling)}px ${upgrade.color[1]};\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `.${upgrade.name}Upgrade.selected`;
            properties =
            [
                `color: ${lerpColor(lerpColor(upgrade.color[0], upgrade.color[1], 0.5), '#000000', 0.5)};\n`,
                `background-image: linear-gradient(to bottom right, ${upgrade.color[0]}, ${upgrade.color[1]});\n`,
                `box-shadow: 
                    ${-1 * Math.round(scaling)}px ${-1 * Math.round(scaling)}px ${Math.round(scaling * 2)}px ${upgrade.color[0]},
                    ${Math.round(scaling)}px ${Math.round(scaling)}px ${Math.round(scaling * 2)}px ${upgrade.color[1]};\n`,
                `text-shadow: ${Math.round(scaling)}px ${Math.round(scaling)}px ${Math.round(scaling * 2)}px black;\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        });

    otuSpecials.forEach(upgrade =>
        {
            selector = `.${upgrade.name}Upgrade`;
            properties =
            [
                `color: ${upgrade.color};\n`,
                `box-shadow: 0px 0px ${Math.round(scaling * 2)}px ${upgrade.color};\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);

            selector = `.${upgrade.name}Upgrade.selected`;
            properties =
            [
                `color: ${lerpColor(upgrade.color, '#000000', 0.5)};\n`,
                `background-color: ${upgrade.color};\n`,
                `box-shadow: 0px 0px ${Math.round(scaling * 2)}px ${upgrade.color};\n`,
                `text-shadow: ${Math.round(scaling)}px ${Math.round(scaling)}px ${Math.round(scaling * 2)}px black;\n`
            ].join('');

            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        });

    crystalPanel.panelCSS = newCSS;
}

function toggleUpgrade(e)
{
    const type = e.target.dataset.type;
    const index = e.target.dataset.upgIndex;

    switch(type)
    {
        case 'single':
            crystalData.otuSingle[index] = !crystalData.otuSingle[index];
            if (crystalData.otuSingle[index]) { e.target.classList.add('selected'); }
            else { e.target.classList.remove('selected'); }
            break;
        case 'dual':
            crystalData.otuDual[index] = !crystalData.otuDual[index];
            if (crystalData.otuDual[index]) { e.target.classList.add('selected'); }
            else { e.target.classList.remove('selected'); }
            break;
        case 'spec':
            crystalData.otuSpec[index] = !crystalData.otuSpec[index];
            if (crystalData.otuSpec[index]) { e.target.classList.add('selected'); }
            else { e.target.classList.remove('selected'); }
            break;
        default:
            break;
    }

    localStorage.setItem('ISEPScrystals', JSON.stringify(crystalData));
}

function destroyCrystalPanel()
{
    document.body.removeChild(crystalPanel.elem);
    crystalPanel.elem = null;
    document.body.removeChild(crystalPanel.panelCSS);
    crystalPanel.panelCSS = null;
}

function lerpColor(a, b, amount) { 

    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}
