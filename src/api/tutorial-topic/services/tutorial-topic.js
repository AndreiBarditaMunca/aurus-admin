'use strict';

/**
 * tutorial-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tutorial-topic.tutorial-topic');
