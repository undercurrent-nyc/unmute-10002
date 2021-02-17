import RESTSerializer from '@ember-data/serializer/rest';
import { pluralize } from "ember-inflector";

export default class ClipSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const modelNamePlural = pluralize(primaryModelClass.modelName);

    // Anticipates the REST format.
    if(payload.records) {
      payload[modelNamePlural] = [];

      payload.meta = {
        offset: payload.offset
      };
      delete payload.offset;

      console.log(payload.records);

      payload.records.forEach(record => {
        const newRecord = {};
        if(record.fields.youtubeUrl) {
          newRecord.youtubeUrl = record.fields.youtubeUrl;
          newRecord.date = record.fields.date;
          newRecord.id = newRecord.youtubeUrl.replace("https://youtu.be/", "");
          newRecord.team = record.fields.teamId
          payload[modelNamePlural].push(newRecord);
        }
      });
      delete payload.records;
    // // } else {
    // //   payload[type.modelName] = payload.fields;
    // //   payload[type.modelName].id = payload.id;
    // //   payload[type.modelName].created = payload.createdTime;
    // //   delete payload.id;
    // //   delete payload.fields;
    // //   delete payload.createdTime;
    }

    return super.normalizeResponse(...arguments);
  };

}
