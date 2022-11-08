const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "first name required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "last name required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "username required"],
      trim: true,
      text: true,
    },
    email: {
      type: String,
      required: [true, "email required"],
      trim: true,
      text: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      trim: true,
      text: true,
    },
    picture: {
      type: String,
      default: "https://res.cloudinary.com/ddim3wrb0/image/upload/v1667466973/Ease/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69_nooj2r.jpg",
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "password is required"],
      trim: true,
      text: true,
    },
    bYear: {
      type: String,
      trim: true,
      text: true,
    },
    bMonth: {
      type: String,
      trim: true,
      text: true,
    },
    bDay: {
      type: String,
      trim: true,
      text: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "user",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workPlace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      homeTown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ["single", "in a relationship", "married"],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
