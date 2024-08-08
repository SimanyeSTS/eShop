function ErrorHandlling (err, req, res, next) {
    if (err || res.statusCode >= 400) {
        res.json(
            {
                status: res.status ||
                res.statusCode || 500,
                err: "An error has occured. Please try again later."
            }
        )
    } next()
}
export {
    ErrorHandlling
}