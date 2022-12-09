import UnAuthorizedError from "../errors/unauthorize.js"

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return
  throw new UnAuthorizedError("not authroized to access this route")
}

export default checkPermissions
