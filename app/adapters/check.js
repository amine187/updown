import UpDown from './updown';
import ENV from 'updown/config/environment';


export default UpDown.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        let resource = '';
        ENV.environment === 'production' ? resource = 'checks' : resource = 'checks.json';
        return `${this.get('host')}/${this.get('namespace')}/${resource}?api-key=${this.get('apiKey')}`;
    },
});
