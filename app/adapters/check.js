import UpDown from './updown';
import ENV from 'updown/config/environment';


export default UpDown.extend({
    pathOfType() {
        return 'checks';
    },
    buildURL(modelName, id, snapshot, requestType, query) {
        if (ENV.environment === 'development') {
            return `${this._super(...arguments)}.json`;
        } else {
            return `${this._super(...arguments)}?api-key=${this.get('apiKey')}`;
        }
    },
});
