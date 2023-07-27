const { Schema, Types } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt:{
      type: Date,
      default: Date.now,
      get: formattedDate,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
)

function formattedDate(date){
  const newDate = date.toLocaleString();
  return newDate;
};


module.exports = reactionSchema;
