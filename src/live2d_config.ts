export let live2d_config: Live2DConfig = null;

export class Live2DConfig {

	_canvas_elem: HTMLCanvasElement;
	_canvas_width: number; 
	_canvas_height: number;
	_model_json_path: string;
	_model_dir: string;
	_model_json_name: string;

	public static getInstance(): Live2DConfig {
		if (live2d_config == null) {
			live2d_config = new Live2DConfig();
		}
		return live2d_config;
	}

	public set_config(canvas_elem: HTMLCanvasElement, model_json_path: string) {
		this._canvas_elem = canvas_elem;
		this._model_json_path = model_json_path;

		this._canvas_width = canvas_elem.width;
		this._canvas_height = canvas_elem.height;
		const model_dir_end: number = model_json_path.lastIndexOf("/") + 1;
		const model_name_end: number = model_json_path.length;
		this._model_dir = model_json_path.substr(0, model_dir_end);
		this._model_json_name = model_json_path.substr(model_dir_end, model_name_end - model_dir_end);
	}
}
