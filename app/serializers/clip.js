import RESTSerializer from '@ember-data/serializer/rest';
import { pluralize } from "ember-inflector";

export default class ClipSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const modelNamePlural = pluralize(primaryModelClass.modelName);

    // Anticipates the REST format.
    if(payload.records) {
      payload[modelNamePlural] = payload.records;
      delete payload.records;

      payload.meta = {
        offset: payload.offset
      };
      delete payload.offset;

      payload[modelNamePlural].forEach(record => {
        record.youtubeUrl = record.fields.youtubeUrl;
        record.date = record.fields.date;
        record.id = record.youtubeUrl.replace("https://youtu.be/", "");
        record.team = record.fields.teamId
        delete record.createdTime;
        delete record.fields;
      });
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
