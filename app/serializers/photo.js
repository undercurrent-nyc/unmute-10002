import RESTSerializer from '@ember-data/serializer/rest';
import { pluralize } from "ember-inflector";

export default class PhotoSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const modelNamePlural = pluralize(primaryModelClass.modelName);

    // Anticipates the REST format.
    if(payload.records) {

      payload.meta = {
        offset: payload.offset
      };
      delete payload.offset;

      payload[modelNamePlural] = payload.records
        .filter(photo => photo.fields.imgurUrl && /i.imgur.com/.test(photo.fields.imgurUrl))
        .map(record => {
          const { imgurUrl, priority, credit } = record.fields;
          return {
            imgurUrl,
            priority,
            credit,
            id: record.id
          }
        });

      delete payload.records;
    }

    return super.normalizeResponse(...arguments);
  };

}
