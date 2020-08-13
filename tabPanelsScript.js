var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");
function showPanel(panelIndex, colorCode = '#ffffff') {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#f44336');
/*
    SAMPLE HTML
    
    <div class="tabContainer">
        <div class="buttonContainer">
            <button onclick="showPanel(0)">Tab 1</button>
            <button onclick="showPanel(1,'#4caf50')">Tab 2</button>
            <button onclick="showPanel(2,'#2196f3')">Tab 3</button>
            <button onclick="showPanel(3,'#ff5722')">Tab 4</button>
        </div>
        <div class="tabPanel">Tab 1:Content</div>
        <div class="tabPanel">Tab 2:Content</div>
        <div class="tabPanel">Tab 3:Content</div>
        <div class="tabPanel">Tab 4:Content</div>
    </div>
*/

// The color parameter is completely optional when you call the event function. By default, it makes the color white. I think you could use 'inherit' for that too but I'm not sure.
