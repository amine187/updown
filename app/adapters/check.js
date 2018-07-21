import UpDown from './updown';
import ENV from 'updown/config/environment';


export default UpDown.extend({
    pathOfType() {
        return 'checks';
    },
    buildURL() {
        if (ENV.environment === 'development') {
            return `${this._super(...arguments)}.json`;
        } else {
            return `${this._super(...arguments)}?api-key=${this.get('apiKey')}`;
        }
    },
});
