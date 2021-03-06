define(['basic/entity', 'geo/v2', 'core/mouse'],
	function(Entity, V2, Mouse) {

		function TouchArea() {
			Entity.call(this);

			this.position = new V2(0, 0);

			this.left = new Entity();
			this.right = new Entity();

			this.add(this.left);
			this.add(this.right);

			var self = this;
			this.left.onMouseDown = function(){
				self.parent.down('left');
			};
			this.left.onMouseUp = function(){
				self.parent.up('left');
			};
			this.right.onMouseDown = function(){
				self.parent.down('right');
			};
			this.right.onMouseUp = function(){
				self.parent.up('right');
			};
			Mouse.additionalTouchStartHandler = function() {
				if(self && self.parent) {
					self.parent.down('up');
				}
			};
			Mouse.additionalTouchEndHandler = function() {
				if(self && self.parent) {
					self.parent.up('up');
				}
			};
		}

		TouchArea.prototype = new Entity();

		TouchArea.prototype.update = function() {
			this.size = this.parent.size;
			var screen = this.parent.size;
			var width = screen.x / 2;
			this.left.size.x = width;
			this.right.size.x = width;
			this.left.size.y = screen.y;
			this.right.size.y = screen.y;
			this.right.position.x = width;
			window.leftel = this.left;
		};

		return TouchArea;

	}
);