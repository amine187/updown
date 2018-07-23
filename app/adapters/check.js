import UpDown from './updown';
import ENV from 'updown/config/environment';

/**
 * Extend the configuration of host 
 * and namespace from the main adapter
 * to communicate with the updown API.
 * 
 * @module adapters/check
 * @augments module:updown
 * @public
 */
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
