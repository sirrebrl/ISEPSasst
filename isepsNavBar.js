const navHeight = 0.1;

const navBar = document.createElement('div');
document.body.append(navBar);
navBar.classList.add('navBar');

const navHighlight = document.createElement('span');
navHighlight.classList.add('navHighlight');
navBar.addEventListener('mouseleave', deHighlight);
navBar.appendChild(navHighlight);

const navButtons = [];

createNavButton('perks', 'Perks', 'rgba(255, 255, 255, 1)');
createNavButton('gcorp', 'G-Corp', 'rgba(255, 255, 255, 1)');
    createNavButton('gcorp-main', "Main", 'rgba(255, 255, 255, 1)', 'gcorp');
    createNavButton('gcorp-comps', "Comps", 'rgba(255, 255, 255, 1)', 'gcorp');
    createNavButton('gcorp-modules', "Modules", 'rgba(255, 255, 255, 1)', 'gcorp');
createNavButton('corvus', 'Corvus', 'rgba(255, 255, 255, 1)');
createNavButton('colony', 'Colony', 'rgba(255, 255, 255, 1)');
createNavButton('prestige', 'Prestige', 'rgba(255, 255, 255, 1)');
    createNavButton('prestige-sim', "Sim Reset", 'rgba(255, 255, 255, 1)', 'prestige');
    createNavButton('prestige-se', "Singularity", 'rgba(255, 255, 255, 1)', 'prestige');
createNavButton('crystals', 'Crystals', 'rgba(255, 255, 255, 1)');
    createNavButton('crystals-output', "Output/Cost", 'rgba(255, 255, 255, 1)', 'crystals');
    createNavButton('crystals-special', "Special", 'rgba(255, 255, 255, 1)', 'crystals');
    createNavButton('crystals-otu', "One Time", 'rgba(255, 255, 255, 1)', 'crystals');
createNavButton('tokens', 'Tokens', 'rgba(255, 255, 255, 1)');
createNavButton('planning', 'Planning', 'rgba(255, 255, 255, 1)');

navButtons.forEach(navButton =>
    {
        if (navButton.children.length === 0)
        { 
            navButton.navigable = true;
            navButton.elem.addEventListener('click', navigatePanel);
        }
        else
            { navButton.navigable = false; }
    });

const navDim =
{
    width: window.innerWidth,
    height: window.innerHeight
};

function createNavButton(panel, text, color, parent = null)
{
    const newButtonObj =
    {
        panel,
        text,
        color,
        isChild: (parent !== null),
        children: [],
        active: false,
        highlighted: false
    };

    if (newButtonObj.isChild)
    {
        newButtonObj.parent = parent;
        for (let i = 0; i < navButtons.length; i++)
        {
            if (navButtons[i].panel === parent)
                {
                    navButtons[i].children.push(newButtonObj);
                }
        }
    }
    else 
    { 
        const newButtonElem = document.createElement('label');
        navBar.appendChild(newButtonElem);
        newButtonElem.classList.add('navButton');
        newButtonElem.dataset.panel = panel;
        newButtonElem.innerText = text;
        newButtonElem.addEventListener('mouseenter', highlightNav);
        newButtonObj.elem = newButtonElem;

        newButtonObj.spawnChildren = function()
        {
            this.children.forEach(childNav =>
                {
                    const newChild = document.createElement('label');
                    navBar.appendChild(newChild);
                    newChild.classList.add('navButton', 'navChild');
                    newChild.dataset.panel = childNav.panel;
                    newChild.innerText = childNav.text;
                    newChild.addEventListener('mouseenter', highlightNav);
                    newChild.addEventListener('click', navigatePanel);
                    childNav.elem = newChild;
                })

            const dividingSpace = 20;
            const totalWidth = this.children.reduce((a, b) => { return a + b.elem.offsetWidth; }, 0) + (dividingSpace * (this.children.length - 1));
            const lineCenter = navDim.height * 0.75;
            let runningLeft = this.elem.offsetLeft + (this.elem.offsetWidth / 2) - (totalWidth / 2);
            if (runningLeft < dividingSpace) { runningLeft = dividingSpace; }
            else if ((runningLeft + totalWidth) > (navDim.width - dividingSpace)) { runningLeft = navDim.width - (totalWidth + dividingSpace); }

            for (let i = 0; i < this.children.length; i++)
            {
                const thisTop = Math.round(lineCenter - this.children[i].elem.offsetHeight);
                const thisLeft = runningLeft;
                runningLeft += this.children[i].elem.offsetWidth + dividingSpace;
                this.children[i].elem.style.top = `${thisTop}px`;
                this.children[i].elem.style.left = `${thisLeft}px`;
            }
        };

        navButtons.push(newButtonObj); 
    }
}

let panelResizeFunction = null;
let destroyCurrentPanel = null;

function openDefaultPanel()
{
    // constructPerkPanel(navDim.width, window.innerHeight - navDim.height);
    // constructCrystalPanel(navDim.width, window.innerHeight - navDim.height, 'otu');
    constructSimResetPanel(navDim.width, window.innerHeight - navDim.height);
    navButtons[0].active = true;
    activeNavLink = navButtons[0].elem;

    const navCoords = activeNavLink.getBoundingClientRect();
    const newCoords =
    {
        width: Math.round(navCoords.width * 1.2),
        height: Math.round(navCoords.height * 1.2),
        left: Math.round(navCoords.left - (navCoords.width * 0.1)),
        top: Math.round(navCoords.top - (navCoords.height * 0.2))
    };
    navHighlight.style.width = `${newCoords.width}px`;
    navHighlight.style.height = `${newCoords.height}px`;
    navHighlight.style.transform = `translate(${newCoords.left}px, ${newCoords.top}px)`;
}

function reDim()
{
    navDim.width = window.innerWidth;
    navDim.height = window.innerHeight * navHeight;
    document.documentElement.style.setProperty('--navWidth', `${navDim.width}px`);
    document.documentElement.style.setProperty('--navHeight', `${navDim.height}px`);
    document.documentElement.style.setProperty('--panelHeight', `${window.innerHeight - navDim.height}px`);

    let stdFontSize = Math.round(window.innerHeight / 60);
    let lgFontSize = Math.round(stdFontSize / 0.6);
    document.documentElement.style.setProperty('--stdFontSize', `${stdFontSize}px`);
    document.documentElement.style.setProperty('--lgFontSize', `${lgFontSize}px`);

    const spareRoom = navDim.width - navButtons.reduce((a, b) => { return a + b.elem.offsetWidth; }, 0);
    const dividingSpace = Math.round(spareRoom / (navButtons.length + 1));
    let runningLeft = dividingSpace;
    for (let i = 0; i < navButtons.length; i++)
    {
        const thisTop = Math.round((navDim.height / 4) - (navButtons[i].elem.offsetHeight / 2));
        const thisLeft = runningLeft;
        runningLeft += navButtons[i].elem.offsetWidth + dividingSpace;
        navButtons[i].elem.style.top = `${thisTop}px`;
        navButtons[i].elem.style.left = `${thisLeft}px`;
    }

    if (panelResizeFunction === null) { openDefaultPanel(); }

    if (panelResizeFunction) panelResizeFunction(navDim.width, window.innerHeight - navDim.height);

    deHighlight();
}

let activeNavLink = null;
let activeNavPanel = '';

function destroyNavChildren(highlighting = false)
{
    let childrenDestroyed = false;
    const currentChildren = document.querySelectorAll('.navChild');
    if (currentChildren.length > 0)
    {
        const childPanel = currentChildren[0].dataset.panel;
        let linkActive = false;
        navButtons.forEach(navButton =>
            {
                if (childPanel.includes(navButton.panel) && navButton.active) { linkActive = true; }
            });
        if (linkActive === false || highlighting)
        {
            for (let i = currentChildren.length - 1; i > -1; i--)
            {
                navBar.removeChild(currentChildren[i]);
            }
            childrenDestroyed = true;
        }
    } else { childrenDestroyed = true; }
    return childrenDestroyed;
}

function highlightNav()
{
    const navCoords = this.getBoundingClientRect();
    const newCoords =
    {
        width: Math.round(navCoords.width * 1.2),
        height: Math.round(navCoords.height * 1.2),
        left: Math.round(navCoords.left - (navCoords.width * 0.1)),
        top: Math.round(navCoords.top - (navCoords.height * 0.2))
    };
    navHighlight.style.width = `${newCoords.width}px`;
    navHighlight.style.height = `${newCoords.height}px`;
    navHighlight.style.transform = `translate(${newCoords.left}px, ${newCoords.top}px)`;

    const targetNav = this.dataset.panel;

    navButtons.forEach(navButton =>
        {
            if (!this.classList.contains('navChild') && targetNav.includes(navButton.panel))
            {
                destroyNavChildren(true);
                if (targetNav === navButton.panel && navButton.children.length > 0) { navButton.spawnChildren(); }
                navButton.highlighted = true;
            }
        });
    navButtons.forEach(navButton =>
        {
            if (!this.dataset.panel.includes(navButton.panel))
            { 
                navButton.highlighted = false;
            }
        });
}

function deHighlight()
{
    const childrenDestroyed = destroyNavChildren();

    navButtons.forEach(navButton =>
        {
            if (!navButton.highlighted && navButton.active && navButton.children.length > 0)
            { 
                if (childrenDestroyed) { navButton.spawnChildren(); }
                navButton.children.forEach(navChild =>
                    {
                        if (activeNavPanel === navChild.panel) { activeNavLink = navChild.elem; }
                    })
            }
            navButton.highlighted = false;
        });

    const navCoords = activeNavLink.getBoundingClientRect();
    const newCoords =
    {
        width: Math.round(navCoords.width * 1.2),
        height: Math.round(navCoords.height * 1.2),
        left: Math.round(navCoords.left - (navCoords.width * 0.1)),
        top: Math.round(navCoords.top - (navCoords.height * 0.2))
    };
    navHighlight.style.width = `${newCoords.width}px`;
    navHighlight.style.height = `${newCoords.height}px`;
    navHighlight.style.transform = `translate(${newCoords.left}px, ${newCoords.top}px)`;

}

function navigatePanel(e)
{
    const targetPanel = e.target.dataset.panel;
    navButtons.forEach(navButton =>
        {
            if (navButton.panel === targetPanel)
            {
                navButton.active = true;
                activeNavLink = navButton.elem;
                activeNavPanel = navButton.panel;
            }
            else if (targetPanel.includes(navButton.panel))
            {
                navButton.active = true;
                navButton.children.forEach(navChild =>
                    {
                        if (navChild.panel === targetPanel)
                        {
                            navChild.active = true;
                            activeNavLink = navChild.elem;
                            activeNavPanel = navChild.panel;
                        }
                        else
                        {
                            navChild.active = false;
                        }
                    });
            }
            else
            {
                navButton.active = false;
                if (navButton.children.length > 0)
                {
                    navButton.children.forEach(navChild => { navChild.active = false;});
                }
            }
        });

    if (targetPanel === 'perks')
    { destroyCurrentPanel(); constructPerkPanel(navDim.width, window.innerHeight - navDim.height); }
    else if (targetPanel.includes('crystals'))
    { destroyCurrentPanel(); constructCrystalPanel(navDim.width, window.innerHeight - navDim.height, targetPanel); }
    else if (targetPanel === 'prestige-sim')
    { destroyCurrentPanel(); constructSimResetPanel(navDim.width, window.innerHeight - navDim.height); }
    
    setTimeout(reDim, 50);
}

setTimeout(reDim, 100);
window.addEventListener('resize', reDim);