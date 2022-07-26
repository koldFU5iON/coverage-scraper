import Airtable from "airtable";
import "dotenv/config";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appuZbTkbJfdUXxMc"
);

const tableID = "tbldgsajJYMawpWxC";
const table = base(tableID);

export const findRecord = async (recordID) => {
  try {
    return await table.find(recordID);
  } catch (err) {
    console.log(`${err.message} : ${err.error}`);
  }
};

// update record with ID
export const updateRecord = async (recordID, data) => {
  table.update(recordID, data, { typecast: true }, (err, record) => {
    if (!err) {
      console.log(`Record was updated successfully : ${record.getId()}`); //.get('Project Name')
    } else {
      console.error(`${err.message} : ${err.error}`);
    }
  });
};

export const createField = async (recordID, data, field) => {
  table.update(recordID, "Genre");
};

export const updateRecords = async (records) => {
  table.update(records);
};
