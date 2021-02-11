let tabButtons=document.querySelectorAll('.tabContainer .buttonContainer button');
let tabPanels=document.querySelectorAll('.tabContainer .tabPanel');

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor='';
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabPanels.forEach(function(node){
        node.style.display='none';
    });
    tabPanels[panelIndex].style.display='block';
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}