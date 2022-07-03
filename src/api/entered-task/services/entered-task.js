'use strict';

/**
 * entered-task service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entered-task.entered-task');
