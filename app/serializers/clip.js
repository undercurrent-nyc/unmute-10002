import RESTSerializer from '@ember-data/serializer/rest';
import { pluralize } from "ember-inflector";

export default class ClipSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload) {
    const modelNamePlural = pluralize(primaryModelClass.modelName);
    if(payload.records) {
      payload.data = payload.records;
      delete payload.records;

      // payload.meta = {
      //   offset: payload.offset
      // };
      delete payload.offset;

      payload.data.forEach(record => {
        record.type = modelNamePlural;
        record.attributes = record.fields;
        delete record.createdTime;
        delete record.fields;
      });
    // } else {
    //   payload[type.modelName] = payload.fields;
    //   payload[type.modelName].id = payload.id;
    //   payload[type.modelName].created = payload.createdTime;
    //   delete payload.id;
    //   delete payload.fields;
    //   delete payload.createdTime;
    }

    console.log(payload);

    return this._super(store, primaryModelClass, payload);
  };

}
