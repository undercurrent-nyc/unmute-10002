import RESTSerializer from '@ember-data/serializer/rest';
import { pluralize } from "ember-inflector";

export default class ClipSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const modelNamePlural = pluralize(primaryModelClass.modelName);

    // Anticipates the REST format.
    if(payload.records) {
      const clips = [];

      payload.meta = {
        offset: payload.offset
      };
      delete payload.offset;

      payload.records.forEach(record => {
        const newRecord = {};
        if(record.fields.youtubeUrl && /youtu.be/.test(record.fields.youtubeUrl)) {
          newRecord.youtubeUrl = record.fields.youtubeUrl;
          newRecord.order = record.fields.revOrder;
          newRecord.date = record.fields.date;
          newRecord.noTeamTitle = record.fields.noTeamTitle;
          newRecord.id = newRecord.youtubeUrl.replace("https://youtu.be/", "");
          newRecord.team = record.fields.teamId
          clips.push(newRecord);
        }
      });
      payload[modelNamePlural] = clips.sort((a, b) => {
        return a.order < b.order ? -1 : a.order > b.order ? 1 : a.order >= b.order ? 0 : NaN;
      }).reverse();

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
