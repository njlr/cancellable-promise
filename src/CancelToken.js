import CancelError from './CancelError'

class CancelToken {
  constructor() {
    this.cancelled = false

    this.promise = new Promise((resolve, reject) => {
      this._rejectPromise = reject;
    })
  }

  cancel() {
    this.cancelled = true
    this._rejectPromise(new CancelError())
  }
  
  check() {
    if (this.cancelled) {
      throw new CancelError()
    }
  }
}

export default CancelToken
