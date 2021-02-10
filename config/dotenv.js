/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(env) {
  return {
    enabled: env !== 'production',
    clientAllowedKeys: ["AIRTABLE_API_KEY", "YOUTUBE_API_KEY"],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env')
  }
};
