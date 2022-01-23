function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = 'images/'+array[i];
    }
}

preloadImages(["2018-group.png", '2019-group.jpg', 'banner.jpg', 'chess.jpg', 'class-schedule.jpg', 'english-writing.jpg', 'group-banner.jpg', 'logo.png', 'math.jpg', 'rules.png'])