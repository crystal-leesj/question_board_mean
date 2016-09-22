console.log('USERS MODEL IS ON!');

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
      name: {
        first: {
          type: String,
          required: true,
          trim: true,
        },
        last: {
          type: String,
          required: true,
          trim: true,
        },
      },

      email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
      },

      password: {
        type: String,
        required: true,
      },

      birthday: {
        type: Date,
        required: true,
      }
}, {
  timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
  }
});


// gnerating hashed password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});


// userSchema.virtual( 'name.full' ).get( function () {
//   return this.name.first + " " + this.name.last;
//   // return `${ this.name.first } ${ this.name.last}`;
// });

mongoose.model('User', userSchema);
