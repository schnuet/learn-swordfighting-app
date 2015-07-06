angular.module('starter.services')

/*
	The Drag'N'Drop-helper is a central service for all drag and drop event functions, 
	so that the drag and drop code can be reused by many different games using drag'n'drop
	and changed quickly.

	Items that can be dragged should have the class 'drag-item'.
	Also, they should have an id. 
	Example: <div class="drag-item" id="helmet"></div>

	Items can be dragged to a target position. The target position should be marked by an
	other object. The id of the target position should correspond to the object that can be 
	dragged in this way: #helmet -> #helmet-target
	Then, the item with the id 'helmet' can be dragged on an object like this:
	<div id="helmet-target"></div>
*/

.factory ('DragNDropHelper', 
['CssDoctor', '$ionicGesture', '$rootScope',
function (CssDoctor, $ionicGesture, $rootScope) {

	var draggedElement = null;
	var e = null;
	var pos_x = 0;
	var pos_y = 0;
	var moveAutomatically = true;

	var gesturesToWatchArray = [];

	// to be bound with: $ionicGesture.on('dragstart', dragStartEvent, $element);
	var dragStartEvent = function (e) {
		if (e.target.className.indexOf('drag-item') !== -1) {
			draggedElement = e.target;
			aElement = angular.element(draggedElement);

			aElement.removeClass ('drag-item');
			aElement.addClass ('dragged-item');
			/* old
			pos_x = e.target.offsetLeft;
			pos_y = e.target.offsetTop;*/
		}
	};
	// to be bound with: $ionicGesture.on('drag', dragEvent, $element);
	var dragEvent = function (e) {
		if (draggedElement !== null) {
			/* old
			draggedElement.style.left = (pos_x + e.gesture.deltaX) + 'px';
			draggedElement.style.top = (pos_y + e.gesture.deltaY) + 'px';
			*/

			var trans = 'translate3d(' + e.gesture.deltaX + 'px, ' + e.gesture.deltaY +'px, 0)';
			draggedElement.style[ionic.CSS.TRANSFORM] = trans;
			//console.log (draggedElement.style.left);
		}
	};
	// to be bound with: $ionicGesture.on('release', dragEndEvent, $element);
	var dragEndEvent = function (e) {
		if (draggedElement !== null) {
			var offsets = CssDoctor.getOffsetsInParent(draggedElement, 'game-container');
			// get the exact coordinates of the object relative to the gamecontainer

			/* old
			var l = offsets.left; 	//draggedElement.offsetParent.offsetLeft + draggedElement.offsetLeft;
			var t = offsets.top; 	//draggedElement.offsetParent.offsetTop + draggedElement.offsetTop;*/
			var l = offsets.left + e.gesture.deltaX;
			var t = offsets.top +  e.gesture.deltaY;
			
			// get the exact coordinates of the target relative to the gamecontainer
			var target = document.getElementById (draggedElement.id + '-target');
			offsets = CssDoctor.getOffsetsInParent(target, 'game-container');
			var tar_l = offsets.left; 	//target.offsetParent.offsetLeft + target.offsetLeft;
			var tar_t = offsets.top; 	//target.offsetParent.offsetTop + target.offsetTop; 

			// log the important coordinates:
			//console.log ('' + l + ', ' + t + '; ' + tar_l + ', ' + tar_t);
			
			if (l > tar_l - (draggedElement.offsetWidth/2) && l < tar_l + (target.offsetWidth - draggedElement.offsetWidth/2)) {
				if (t > tar_t - (draggedElement.offsetHeight/2) && t < tar_t + (target.offsetHeight - draggedElement.offsetHeight/2)) {

					// The object is on the target!

					onRightTarget (target);
				}
				else {
					release ();
				}
			}
			else {
				release ();
			}
			draggedElement.style[ionic.CSS.TRANSFORM] = '';
			draggedElement = null;
		}
    };

    /*
		The function to call when the item is dropped on the right target:
    */
	var onRightTarget = function (target) {

		$rootScope.$broadcast('dragndrop_right-target', {id : draggedElement.id, target: target});
	};
	/*
		The function to move the item to its target:
	*/
	var moveToTarget = function (target) {
		var t_parent = angular.element (target).parent();

		aElement.removeClass('dragged-item');
		aElement.addClass('object-positioned');
		//console.log (draggedElement.offsetWidth);

		t_parent.append(aElement);
		draggedElement.style.left = CssDoctor.getStyleRuleValue('left', '#' + draggedElement.id + '-target');
		draggedElement.style.top = CssDoctor.getStyleRuleValue('top', '#' + draggedElement.id + '-target');
	};

	/*
		The function to call when the item is dropped anywhere BUT on the target:
	*/
	var release = function () {
		aElement.addClass('drag-item');
		aElement.removeClass('dragged-item');
	};

	var watchElement = function ($element) {
		if (angular.isUndefined (moveAutomatically)) moveAutomatically = true;
		gesturesToWatchArray.push ({
			start: $ionicGesture.on('dragstart', _self.dragStart, $element),
			drag: $ionicGesture.on('drag', _self.drag, $element),
			end: $ionicGesture.on('release', _self.dragEnd, $element), 
		});

		// returns the index of the array where the gestures are saved. 
		// Use that index to remove the watches again:
		return gesturesToWatchArray.length - 1;
	};
	/*
		Removes the eventlisteners saved in the gesture array. pass the index which entry to delete
	*/
	var removeWatches = function (index) {
		console.log ('destroyed watches nr. ' + index);
		$ionicGesture.off (gesturesToWatchArray[index].start, 'dragstart', _self.dragStart);
		$ionicGesture.off (gesturesToWatchArray[index].drag, 'drag', _self.drag);
		$ionicGesture.off (gesturesToWatchArray[index].end, 'release', _self.dragEnd);
		gesturesToWatchArray[index] = null;
	};

	var _self = {
		dragStart : dragStartEvent,
		drag : dragEvent, 
		dragEnd : dragEndEvent, 
		moveToTarget: moveToTarget,
		release : release,

		watchElement: watchElement,
		removeWatches : removeWatches
	};
	return _self;
}]);