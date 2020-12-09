// We grab Schema and model from mongoose library.
const { Schema, model } = require("mongoose");

// We declare new schema.
const guildSettingSchema = new Schema({
  gid: { type: String },
  prefix: { type: String, default: "!" },
  memberAdd: { type: Boolean, default: true },
  isSetup: { type: Boolean, default: false },
  maintenance: { type: Boolean, default: false },
  welcomeChannelId: { type: String, default: null },
  leaverChannelId: { type: String, default: null }
});

// We export it as a mongoose model.
module.exports = model("guild_settings", guildSettingSchema);