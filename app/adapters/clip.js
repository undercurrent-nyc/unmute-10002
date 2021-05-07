import RESTAdapter from '@ember-data/adapter/rest';
import ENV from "unmute/config/environment";

export default class ClipAdapter extends RESTAdapter {
  host = "https://api.airtable.com";

  namespace = "v0/appnt24WLhLFVyc6j"

  headers = {
    "Accept": "application/json",
    "Authorization": `Bearer ${ENV.AIRTABLE_API_KEY}`,
  }

  findAll(store, type, sinceToken, snapshotRecordArray) {
    let query = this.buildQuery(snapshotRecordArray);
    let url = this.buildURL(type.modelName, null, snapshotRecordArray, 'findAll');
    if (sinceToken) {
      query.since = sinceToken;
    }

    return this.getClips(url, query);
  }

  async getClips(url, query){
    const data = {
      records: []
    };
    const response = await this.ajax(url, "GET", { data: query });
    data.records = response.records;
    if(response.offset){
      const secondResponse = await this.ajax(`${url}?offset=${response.offset}`, "GET", { data: query });
      for(const record of secondResponse.records){
        data.records.push(record);
      }
    }
    return data;
  }


}
