module.exports = class Base {
  constructor(options = {}, name) {
    this.name = name
    this.options = options
    this.logging = options.logging
  }

  log(msg, data) {
    if (this.logging) {
      console.log(this.name, msg, data || '')
    }
  }

  error(err, data) {
    console.error(err, data || '')
    throw new Error(msg)
  }
}
