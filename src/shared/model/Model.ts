import DataSourceConfig from '../../data-source';

class Model {
    public modelConfig;
    constructor() {
        this.modelConfig = DataSourceConfig.initialize();
    }
}

export default Model;
