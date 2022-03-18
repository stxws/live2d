import { LAppDelegate } from './lappdelegate';
import { Live2DConfig } from './live2d_config';

function load_model(canvas_elem: HTMLCanvasElement, model_json_path: string){
	const live2d_config: Live2DConfig = Live2DConfig.getInstance();
	live2d_config.set_config(canvas_elem, model_json_path);

	// create the application instance
	if (LAppDelegate.getInstance().initialize() == false) {
		return;
	}
	LAppDelegate.getInstance().run();
}

module.exports = {load_model}