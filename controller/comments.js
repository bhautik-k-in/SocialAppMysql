
exports.all = async (req, res, next) => {
    await res.send('get all comments using post id')
}

exports.store = async (req, res, next) => {
    await res.send('add new comment')
}

exports.show = async (req, res, next) => {
    await res.send('get single comment');
}

exports.update = async (req, res, next) => {
    await res.send('edit comment')
}

exports.destroy = async (req, res, next) => {
    await res.send('delete comment');
}

