const mongoose = require('mongoose')

const phonenumberSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phonenumber = mongoose.model('Phonenumber', phonenumberSchema)

if (process.argv.length === 5) {

  const password = process.argv[2]

  const url = `mongodb+srv://fullstack:${password}@cluster0.0sdr354.mongodb.net/Phonebook?retryWrites=true&w=majority`

  mongoose.connect(url)

  const phonenumber = new Phonenumber({
    name: process.argv[3],
    number: process.argv[4]
  })

  phonenumber.save().then(result => {
    console.log(`added ${process.argv[3]} ${process.argv[4]} to phonebook`)
    mongoose.connection.close()
  })

} else if (process.argv.length === 3) {

  const password = process.argv[2]

  const url = `mongodb+srv://fullstack:${password}@cluster0.0sdr354.mongodb.net/Phonebook?retryWrites=true&w=majority`

  mongoose.connect(url)

  Phonenumber.find({}).then(result => {
    result.forEach(phonenumber => {
      console.log(phonenumber)
    })
    mongoose.connection.close()
  })
  
} else {
  console.log("arguments needed")
  process.exit(1)
}