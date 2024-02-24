import { eventSource, event_types } from '../../../../script.js';
import { uuidv4 } from '../../../utils.js';

eventSource.on(event_types.TEXT_COMPLETION_SETTINGS_READY, (args) =>{
    Object.assign(args, {
        'timestamp': Date.now(),
        'request_id': uuidv4(),
    });
});
