import StatusCodes from "http-status-codes"
import CustomAPIError from "./custom-api.js"

class UnauthorizedErrror extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
  }
}

export default UnauthorizedErrror
