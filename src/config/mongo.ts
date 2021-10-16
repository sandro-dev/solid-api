
export default {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 27017,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456',
  db: process.env.DB_NAME || 'todo_app',
  authSource: process.env.DB_AUTH_SOURCE || 'admin'
}
