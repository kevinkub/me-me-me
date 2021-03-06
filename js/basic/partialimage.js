define(['core/graphic', 'geo/v2', 'basic/entity'],
		function(graphics, V2, Entity) {
			function PartialImage(pos, src, scale, percent) {
				this.img = graphics[src];
				Entity.call(this, pos, new V2(this.img.width, this.img.height));
				this.scale = scale || 1;
				this.percent = percent || 1;
			}

			PartialImage.prototype = new Entity();

			PartialImage.prototype.onDraw = function(ctx) {
				if(this.size.x >= 1 && this.size.y >= 1)
					ctx.drawImage(this.img, 0, 0, (this.size.x * this.percent) | 0, this.size.y | 0, 0, 0, (this.size.x * this.scale * this.percent) | 0, (this.size.y * this.scale) | 0);
			};

			return PartialImage;
		}
);
