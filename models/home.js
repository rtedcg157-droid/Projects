// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");




const homeSchema = mongoose.Schema({
  houseName: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  photo: String,
  description: String,
});

homeSchema.pre('findOneAndDelete', async function(next) {
  console.log('Pre hook for findOneAndDelete called');
  const homeId = this.getQuery()._id;
  await favourite.deleteMany({ houseId: homeId });
  next();
});



module.exports = mongoose.model("Home", homeSchema);



/* module.exports = class Home {
  constructor(houseName, price, location, rating, photo, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo;
    this.description = description;
    if(_id)
    {
      this._id = _id;
    }
  }

  save() {
   const db = getDb();
   if(this._id){// Update the existing home
      return db.collection('homes').updateOne({ _id: new ObjectId(String(this._id)) }, { $set: {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photo: this.photo,
        description: this.description,
      } });
   } else { // Create a new home
     return db.collection('homes').insertOne(this);
   }
  }

  static find() {
    const db = getDb();
    return db.collection('homes').find().toArray();
  }

  static findById(homeId) {
    console.log('Finding by id: ', homeId);
    const db = getDb();
    return db.collection('homes')
    .find({ _id: new ObjectId(String(homeId)) }).next();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection('homes').deleteOne({ _id: new ObjectId(String(homeId)) });    
  }
};

*/