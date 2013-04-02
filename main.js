requirejs.config
(
	{
		// paths
		// {
		// 	'strappy.ccl':	
		// }
	}
);
define
(
	'strappy/ccl',
	[
		'./CCL',
		'./trait/Containable',
		'./trait/Animatable',
		'./trait/Pluploadable',
		'./component/application/Controller',
		'./controller/Router',
		'./component/container/Container',
		'./component/container/controller/State',
		'./component/container/controller/AutoLayout',
		'./component/container/controller/CardLayout',
		'./component/container/controller/HTMLLayout',
		'./component/container/view/Default',
		'./component/container/store/State',
		'./component/uploader/Uploader',
		'./component/uploader/controller/Main',
		'./component/uploader/view/Main'
	]
);