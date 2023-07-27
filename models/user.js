const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/, "Please enter a valid email address."]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
)


userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = Student;
