exports.all = async (req, res, next) => {
    await res.send('Get all posts ');
}

exports.store = async (req, res, next) => {
    await res.send('add new post')
}

exports.show = async (req, res, next) => {
    await res.send('get single post');
}

exports.update = async (req, res, next) => {
    await res.send('edit post')
}

exports.destroy = async (req, res, next) => {
    await res.send('delete post');
}

