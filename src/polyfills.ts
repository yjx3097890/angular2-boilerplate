/**
 * Created by apple on 16/5/14.
 */
import "es6-shim";
import "reflect-metadata";
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
