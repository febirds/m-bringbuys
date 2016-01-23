/**
 * Created by wanp on 16-1-17.
 */
$(function () {
    site.initEditor();

    var dargObj = $(".bring-dragable")[0];
    var dargAnchorObj = $(".bring-drag-anchor")[0];
    var dragRef = DragDrop.bind(dargObj, {
        anchor: dargAnchorObj,
        boundingBox: 'offsetParent',
        dragstart: function(evt) {
            console.log('DragDrop.bind dragstart', evt);
        },
        drag: function(evt) {
            console.log('DragDrop.bind drag', evt);
        },
        dragend: function(evt) {
            console.log('DragDrop.bind dragend', evt);
        }
    });

    dragRef.bindEvent('dragstart', function(evt) {
        console.log('DragDrop.bindEvent dragstart', evt);
    });
    dragRef.bindEvent('drag', function(evt) {
        console.log('DragDrop.bindEvent drag', evt);
    });
    dragRef.bindEvent('dragend', function(evt) {
        console.log('DragDrop.bindEvent dragend', evt);
    });

});
