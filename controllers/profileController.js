const { Profile } = require('../models');

exports.create = (req, res) => {
  const { id } = req.params;
  Profile
    .create(req.body)
    .then((profile) => {
      res.status(201).location(req.originalUrl);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error with ${id} id profile -- ${err}`,
      });
    });
};
exports.find = (req, res) => {
  const { id } = req.params;
  Profile
    .findById(id)
    .then((profile) => {
      if (profile) { res.status(200).json(profile); } else {
        res.status(404).json({
          message: `User ${id} id not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error with ${id} id profile -- ${err}`,
      });
    });
};
exports.update = (req, res) => {
  const { id } = req.params;
  Profile
    .findById(id)
    .then((profile) => {
      if (profile) {
        profile.updateAttributes(req.body);
        res.status(200).json({ message: 'User updated' });
      } else {
        res.status(404).json({
          message: `User ${id} id not found`,
        });
      }
    }).catch(err => res.status(500).json({
      message: `Error with ${id} id profile -- ${err}`,
    }));
};
exports.delete = (req, res) => {
  const { id } = req.params;
  Profile
    .findById(id)
    .then((profile) => {
      if (profile) {
        profile.destroy();
        res.status(200).json({ message: 'User deleted' });
      } else {
        res.status(404).json({
          message: `User ${id} id not found`,
        });
      }
    }).catch(err => res.status(500).json({
      message: `Error with ${id} id profile -- ${err}`,
    }));
};
