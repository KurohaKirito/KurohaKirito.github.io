window.onload = function () {
    try {
        TagCanvas.Start('my3DTags', 'tags',
            {
                textFont: 'Georgia,Optima',
                textColour: null,
                outlineColour: 'black',
                weight: true,
                reverse: true,
                depth: 0.8,
                maxSpeed: 0.05,
                bgRadius: 1,
                freezeDecel: true
            });
    }
    catch (e) {
        document
            .getElementById('myTags')
            .style
            .display = 'none';
    }
};