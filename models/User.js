const Schema = Mongoose.Schema;

const UserSchema = Schema(
 {
    name : String,
    email : String
 }

);

module.exports = Mongoose.model('users',UserSchema);