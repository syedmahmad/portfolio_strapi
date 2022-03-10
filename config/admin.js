module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '114476682f7652578da350c43d07cc6f'),
  },
});
