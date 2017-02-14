/**
 * Created by apple on 16/5/14.
 */
import "core-js";
import "reflect-metadata";
import 'zone.js';
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
