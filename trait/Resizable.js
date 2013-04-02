$JSKK.Trait.create
(
	{
		$namespace:	'strappy.ccl.trait',
		$name:		'Resizable'
	}
)
(
	{
		onResizeStart: function(event)
		{
			if (Object.isFunction(this.getView('Main').disableAnimations))
			{
				this.getView('Main').disableAnimations();
			}
			$('body').addClass('is-resizing');
			this.resizing=true;
			this.resizeMatrix=
			{
				x:	event.clientX,
				y:	event.clientY
			};
		},
		onResizeUpdate: function(event)
		{
			if (this.resizing)
			{
				var	view		=this.getView('Main'),
					container	=view.getContainer(),
					width		=container.width(),
					height		=container.height(),
					newWidth	=width,
					newHeight	=height;
				
				//Horizontal Resizing
				if (event.clientX>this.resizeMatrix.x)
				{
					newWidth=width+(event.clientX-this.resizeMatrix.x);
				}
				else if (event.clientX<this.resizeMatrix.x)
				{
					newWidth=width-(this.resizeMatrix.x-event.clientX);
				}
				// //Vertical Resizing
				if (event.clientY<this.resizeMatrix.x)
				{
					newHeight=height+(event.clientY-this.resizeMatrix.y);
				}
				else if (event.clientY>this.resizeMatrix.y)
				{
					newHeight=height-(this.resizeMatrix.y-event.clientY);
				}
				this.resizeMatrix=
				{
					x:	event.clientX,
					y:	event.clientY
				};
				container.css
				(
					{
						width:	newWidth,
						height:	newHeight
					}
				);
			}
		},
		onResizeEnd: function()
		{
			if (this.resizing)
			{
				this.resizing		=false;
				this.resizeMatrix	={x:0,y:0};
				if (Object.isFunction(this.getView('Main').enableAnimations))
				{
					this.getView('Main').enableAnimations();
				}
				$('body').removeClass('is-resizing');
			}
		},
	}
);