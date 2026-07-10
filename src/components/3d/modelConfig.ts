export const MODEL_CONFIG = [
	{
    	// Eye — UI/UX Design Services
    	modelPath: '/models/eye-draco.glb',
    	camera: [2, -2, 20] as [number, number, number],
    	// position: [0.5, 0, 0] as [number, number, number],
		position: {
			desktop: [0.5, 0, 0] as [number, number, number],
			tablet_1024: [0, -0.3, 0] as [number, number, number],
			tablet_992: [0, -1, 0] as [number, number, number],
		},
    	scale: 1,
	},
	{
    	// Brain — Custom Web & App Development
    	modelPath: '/models/brain.element.glb',
    	camera: [1, -1, 12] as [number, number, number],
    	// position: [0.5, 0, 0] as [number, number, number],
    	position: {
			desktop: [0.5, 0, 0] as [number, number, number],
			tablet_1024: [0, -0.3, 0] as [number, number, number],
			tablet_992: [0, -0.7, 0] as [number, number, number],
		},
    	scale: 1,
	},
	{
    	// Heart — Brand Identity Design
    	modelPath: '/models/heart.element-new.glb',
    	camera: [0, 0, 4] as [number, number, number],
    	// position: [0.5, -0.15, 0] as [number, number, number],
		position: {
			desktop: [0.15, -0.05, 0] as [number, number, number],
			tablet_1024: [0, -0.1, 1] as [number, number, number],
			tablet_992: [0, -0.3, 1] as [number, number, number],
		},
    	scale: 1,
	},
	{
    	// Hand — Social Media Management Services
    	modelPath: '/models/hand.element.glb',
    	camera: [0, 0, 7.4] as [number, number, number],
    	// position: [0.35, 0, 0] as [number, number, number],
    	position: {
			desktop: [0.35, 0, 0]  as [number, number, number],
			tablet_1024: [0.2, 0, -0.12]  as [number, number, number],
			tablet_992: [0.2, -0.5, -2.5]  as [number, number, number],
		},
    	scale: 1,
	},
]